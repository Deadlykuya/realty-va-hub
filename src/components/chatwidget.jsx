import { useState, useRef, useEffect } from 'react';

const RVH_PROXY_URL = 'https://realtyvahub-proxy2.ryan0312001.workers.dev';

const RVH_SYSTEM_PROMPT = `You are Jenny, a friendly and knowledgeable real estate virtual assistant advisor for RealtyVAHub — a company that places trained virtual assistants for real estate investors, agents, and operators across the U.S.

Your Personality:
- Warm, confident, and professional — like a trusted real estate colleague
- Use short paragraphs and clear language
- Occasionally use relevant real estate emojis (🏡🏢📋💼) but don't overdo it
- Show genuine enthusiasm for helping clients scale their real estate businesses

Your Purpose:
- Answer questions about RealtyVAHub's VA services, pricing, and how VAs work
- Explain the different VA roles: Cold Callers/ISAs, Acquisitions VAs, Dispositions VAs, Client Relations VAs
- Help clients figure out which VA type is right for their business
- Guide leads toward booking a discovery call or getting a quote
- Educate on real estate operations, lead generation, and scaling strategies

Your Knowledge Base (answer ONLY from these topics):
1. VA Roles at RealtyVAHub:
   - Cold Callers/ISAs: outbound prospecting, motivated seller lists, multifamily owner outreach, appointment setting
   - Acquisitions VAs: lead follow-up, deal qualification, CRM management, offer support
   - Dispositions VAs: buyer list building, deal marketing, contract coordination, closing support
   - Property Management VAs: tenant communication, landlord updates, inbox and calendar management

2. Clients We Serve: multifamily investors, single-family wholesalers, fix-and-flip operators, property managers, real estate agents and brokers

3. Common real estate VA questions: onboarding timelines, training process, KPIs, what to expect, ROI

4. General real estate business topics: lead generation, cold calling, CRM systems (Podio, HubSpot, REsimpli, Salesforce), wholesaling, property management

Strict Rules:
- ONLY discuss real estate and RealtyVAHub topics. If asked about anything unrelated, politely redirect: "I'm specialized in real estate VA services — I'd love to help with anything in that space! 🏡"
- Never make up specific pricing — say pricing depends on role and hours, and invite them to get a custom quote
- Always end responses with a helpful next step or question to keep the conversation going
- Keep responses concise (under 120 words unless a detailed breakdown is truly needed)
- If someone seems ready to hire, guide them to: "You can book a free discovery call at RealtyVAHub.com 📋"`;

interface Message {
  role: 'user' | 'assistant';
  content: string;
  time: string;
}

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showBadge, setShowBadge] = useState(false);
  const [chatHistory, setChatHistory] = useState<{ role: string; content: string }[]>([]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setShowBadge(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const getTime = () => {
    return new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const sendMessage = async (text: string) => {
    if (!text.trim() || isTyping) return;
    
    const userMsg: Message = { role: 'user', content: text, time: getTime() };
    setMessages(prev => [...prev, userMsg]);
    const newHistory = [...chatHistory, { role: 'user', content: text }];
    setChatHistory(newHistory);
    setInput('');
    setIsTyping(true);

    try {
      const response = await fetch(RVH_PROXY_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: 'deepseek/deepseek-v4-flash:free',
          max_tokens: 512,
          messages: [
            { role: 'system', content: RVH_SYSTEM_PROMPT },
            ...newHistory
          ]
        })
      });

      const data = await response.json();
      setIsTyping(false);

      if (data.choices && data.choices[0]) {
        const reply = data.choices[0].message.content;
        const botMsg: Message = { role: 'assistant', content: reply, time: getTime() };
        setMessages(prev => [...prev, botMsg]);
        setChatHistory(prev => [...prev, { role: 'assistant', content: reply }]);
      } else {
        const errorMsg: Message = { role: 'assistant', content: "I'm having a moment — please try again in a second! 🏡", time: getTime() };
        setMessages(prev => [...prev, errorMsg]);
      }
    } catch (err) {
      setIsTyping(false);
      const errorMsg: Message = { role: 'assistant', content: "Oops, something went wrong. Please try again! 🏡", time: getTime() };
      setMessages(prev => [...prev, errorMsg]);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage(input);
    }
  };

  const handleOpen = () => {
    setIsOpen(true);
    setShowBadge(false);
    if (messages.length === 0) {
      setTimeout(() => {
        const welcomeMsg: Message = {
          role: 'assistant',
          content: "Hey there! 👋 I'm Jenny, your RealtyVAHub advisor.\n\nI help real estate investors and operators find the right virtual assistants to scale their business — from cold callers to acquisitions and dispositions VAs.\n\nWhat can I help you with today?",
          time: getTime()
        };
        setMessages([welcomeMsg]);
        setChatHistory([{ role: 'assistant', content: welcomeMsg.content }]);
      }, 400);
    }
  };

  return (
    <>
      {/* Chat Bubble */}
      <button
        onClick={handleOpen}
        style={{
          position: 'fixed',
          bottom: '28px',
          right: '28px',
          width: '62px',
          height: '62px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #1a3c5e 0%, #2d6a9f 100%)',
          boxShadow: '0 6px 28px rgba(26,60,94,0.45), 0 2px 8px rgba(0,0,0,0.18)',
          cursor: 'pointer',
          border: 'none',
          display: isOpen ? 'none' : 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 99999,
          transition: 'transform 0.25s cubic-bezier(.34,1.56,.64,1)',
          animation: 'rvh-pulse 3s ease-in-out infinite'
        }}
      >
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
          <path d="M20 2H4C2.9 2 2 2.9 2 4V22L6 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2Z" fill="white"/>
        </svg>
        {showBadge && (
          <span style={{
            position: 'absolute',
            top: '-3px',
            right: '-3px',
            width: '18px',
            height: '18px',
            background: '#e84545',
            borderRadius: '50%',
            fontSize: '10px',
            color: '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '2px solid #fff',
            fontWeight: 700,
            fontFamily: "'Plus Jakarta Sans', sans-serif"
          }}>1</span>
        )}
      </button>

      {/* Chat Panel */}
      {isOpen && (
        <div style={{
          position: 'fixed',
          bottom: '102px',
          right: '28px',
          width: '370px',
          height: '540px',
          background: '#ffffff',
          borderRadius: '20px',
          boxShadow: '0 20px 70px rgba(0,0,0,0.18), 0 4px 20px rgba(26,60,94,0.1)',
          display: 'flex',
          flexDirection: 'column',
          zIndex: 99999,
          overflow: 'hidden',
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          animation: 'rvh-slideUp 0.35s cubic-bezier(.34,1.56,.64,1)'
        }}>
          {/* Header */}
          <div style={{
            background: 'linear-gradient(135deg, #1a3c5e 0%, #2d6a9f 100%)',
            padding: '18px 20px 16px',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            flexShrink: 0
          }}>
            <div style={{
              width: '42px',
              height: '42px',
              borderRadius: '50%',
              background: 'rgba(255,255,255,0.15)',
              border: '2px solid rgba(255,255,255,0.3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '20px',
              position: 'relative'
            }}>
              🏠
              <div style={{
                position: 'absolute',
                bottom: '1px',
                right: '1px',
                width: '10px',
                height: '10px',
                background: '#4ade80',
                borderRadius: '50%',
                border: '2px solid #2d6a9f'
              }}></div>
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ color: '#fff', fontWeight: 700, fontSize: '14.5px' }}>Jenny — RealtyVA Advisor</div>
              <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '11.5px', display: 'flex', alignItems: 'center', gap: '5px' }}>
                <span style={{ width: '7px', height: '7px', background: '#4ade80', borderRadius: '50%', display: 'inline-block' }}></span>
                Online now
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              style={{
                background: 'rgba(255,255,255,0.15)',
                border: 'none',
                color: '#fff',
                cursor: 'pointer',
                width: '30px',
                height: '30px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '16px',
                flexShrink: 0
              }}
            >✕</button>
          </div>

          <div style={{
            background: 'rgba(26,60,94,0.06)',
            color: '#1a3c5e',
            fontSize: '11px',
            padding: '6px 20px 8px',
            textAlign: 'center',
            borderBottom: '1px solid #edf2f8',
            flexShrink: 0
          }}>
            Real Estate Virtual Assistant Experts 🏡
          </div>

          {/* Messages */}
          <div style={{
            flex: 1,
            overflowY: 'auto',
            padding: '16px 14px',
            background: '#f8fafd',
            display: 'flex',
            flexDirection: 'column',
            gap: '10px'
          }}>
            {messages.map((msg, i) => (
              <div key={i} style={{
                display: 'flex',
                flexDirection: 'column',
                maxWidth: '82%',
                alignSelf: msg.role === 'user' ? 'flex-end' : 'flex-start'
              }}>
                {msg.role === 'assistant' && (
                  <div style={{ display: 'flex', alignItems: 'center', gap: '5px', marginBottom: '4px' }}>
                    <div style={{
                      width: '22px', height: '22px',
                      background: 'linear-gradient(135deg,#1a3c5e,#2d6a9f)',
                      borderRadius: '50%',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '11px', color: '#fff',
                      flexShrink: 0
                    }}>J</div>
                    <span style={{ fontSize: '11px', color: '#6b8299', fontWeight: 600 }}>Jenny</span>
                  </div>
                )}
                <div style={{
                  padding: '11px 14px',
                  borderRadius: '16px',
                  fontSize: '13.5px',
                  lineHeight: 1.6,
                  background: msg.role === 'user' 
                    ? 'linear-gradient(135deg, #1a3c5e 0%, #2d6a9f 100%)' 
                    : '#fff',
                  color: msg.role === 'user' ? '#fff' : '#1a2a3a',
                  borderBottomLeftRadius: msg.role === 'assistant' ? '5px' : '16px',
                  borderBottomRightRadius: msg.role === 'user' ? '5px' : '16px',
                  boxShadow: msg.role === 'assistant' ? '0 2px 8px rgba(0,0,0,0.07)' : 'none'
                }}>
                  {msg.content}
                </div>
                <div style={{
                  fontSize: '10.5px',
                  color: '#99aabb',
                  marginTop: '3px',
                  padding: '0 4px',
                  textAlign: msg.role === 'user' ? 'right' : 'left'
                }}>{msg.time}</div>
              </div>
            ))}
            {isTyping && (
              <div style={{ alignSelf: 'flex-start' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '5px', marginBottom: '4px' }}>
                  <div style={{
                    width: '22px', height: '22px',
                    background: 'linear-gradient(135deg,#1a3c5e,#2d6a9f)',
                    borderRadius: '50%',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '11px', color: '#fff'
                  }}>J</div>
                  <span style={{ fontSize: '11px', color: '#6b8299', fontWeight: 600 }}>Jenny</span>
                </div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '5px',
                  padding: '10px 14px',
                  background: '#fff',
                  borderRadius: '16px',
                  borderBottomLeftRadius: '5px',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.07)',
                  width: 'fit-content'
                }}>
                  <div className="typing-dot" style={{ width: '7px', height: '7px', background: '#2d6a9f', borderRadius: '50%' }}></div>
                  <div className="typing-dot" style={{ width: '7px', height: '7px', background: '#2d6a9f', borderRadius: '50%', animationDelay: '0.2s' }}></div>
                  <div className="typing-dot" style={{ width: '7px', height: '7px', background: '#2d6a9f', borderRadius: '50%', animationDelay: '0.4s' }}></div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div style={{
            padding: '12px 14px',
            background: '#fff',
            borderTop: '1px solid #edf2f8',
            display: 'flex',
            gap: '9px',
            alignItems: 'flex-end',
            flexShrink: 0
          }}>
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask about VAs, pricing, services..."
              rows={1}
              style={{
                flex: 1,
                border: '1.5px solid #dde7f2',
                borderRadius: '12px',
                padding: '10px 14px',
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: '13.5px',
                color: '#1a2a3a',
                outline: 'none',
                resize: 'none',
                maxHeight: '80px',
                minHeight: '40px',
                lineHeight: 1.5,
                background: '#f8fafd'
              }}
            />
            <button
              onClick={() => sendMessage(input)}
              disabled={isTyping}
              style={{
                width: '40px',
                height: '40px',
                background: 'linear-gradient(135deg, #1a3c5e, #2d6a9f)',
                border: 'none',
                borderRadius: '11px',
                cursor: isTyping ? 'not-allowed' : 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                opacity: isTyping ? 0.5 : 1,
                boxShadow: '0 3px 12px rgba(45,106,159,0.4)'
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M22 2L11 13M22 2L15 22L11 13L2 9L22 2Z" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>

          <div style={{
            textAlign: 'center',
            fontSize: '10px',
            color: '#b0bec8',
            padding: '0 14px 10px',
            background: '#fff',
            flexShrink: 0
          }}>
            Powered by RealtyVAHub · AI may make mistakes
          </div>
        </div>
      )}

      <style>{`
        @keyframes rvh-pulse {
          0%, 100% { box-shadow: 0 6px 28px rgba(26,60,94,0.45), 0 0 0 0 rgba(45,106,159,0.4); }
          50% { box-shadow: 0 6px 28px rgba(26,60,94,0.45), 0 0 0 12px rgba(45,106,159,0); }
        }
        @keyframes rvh-slideUp {
          from { opacity: 0; transform: scale(0.85) translateY(20px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
        .typing-dot {
          animation: rvh-bounce 1.2s ease-in-out infinite;
          opacity: 0.6;
        }
        @keyframes rvh-bounce {
          0%, 60%, 100% { transform: translateY(0); opacity: 0.6; }
          30% { transform: translateY(-5px); opacity: 1; }
        }
        @media (max-width: 480px) {
          #rvh-chat-panel { width: calc(100vw - 24px) !important; right: 12px !important; bottom: 90px !important; height: 72vh !important; max-height: 560px !important; }
        }
      `}</style>
    </>
  );
}
