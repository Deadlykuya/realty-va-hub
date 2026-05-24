import { useState, useRef, useEffect } from 'react';

const RVH_PROXY_URL = 'https://realtyvahub-proxy2.ryan0312001.workers.dev';

const RVH_SYSTEM_PROMPT = `You are Jenny, a friendly and knowledgeable real estate virtual assistant advisor for RealtyVAHub.`;

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showBadge, setShowBadge] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    // Show badge after 3 seconds
    const timer = setTimeout(() => setShowBadge(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const getTime = () => {
    return new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const sendMessage = async (text) => {
    if (!text.trim() || isTyping) return;
    
    const userMsg = { role: 'user', content: text, time: getTime() };
    setMessages(prev => [...prev, userMsg]);
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
            ...messages.map(m => ({ role: m.role, content: m.content })),
            { role: 'user', content: text }
          ]
        })
      });

      const data = await response.json();
      setIsTyping(false);

      if (data.choices && data.choices[0]) {
        const botMsg = { role: 'assistant', content: data.choices[0].message.content, time: getTime() };
        setMessages(prev => [...prev, botMsg]);
      }
    } catch (err) {
      setIsTyping(false);
      const errorMsg = { role: 'assistant', content: "Oops, something went wrong. Please try again! 🏡", time: getTime() };
      setMessages(prev => [...prev, errorMsg]);
    }
  };

  const handleKeyDown = (e) => {
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
        setMessages([{
          role: 'assistant',
          content: "Hey there! 👋 I'm Jenny, your RealtyVAHub advisor.\n\nI help real estate investors and operators find the right virtual assistants to scale their business.",
          time: getTime()
        }]);
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
          boxShadow: '0 6px 28px rgba(26,60,94,0.45)',
          cursor: 'pointer',
          border: 'none',
          display: isOpen ? 'none' : 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 99999,
          animation: 'pulse 3s ease-in-out infinite'
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
            fontWeight: 'bold'
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
          boxShadow: '0 20px 70px rgba(0,0,0,0.18)',
          display: 'flex',
          flexDirection: 'column',
          zIndex: 99999,
          overflow: 'hidden',
          fontFamily: "'Plus Jakarta Sans', sans-serif"
        }}>
          {/* Header */}
          <div style={{
            background: 'linear-gradient(135deg, #1a3c5e 0%, #2d6a9f 100%)',
            padding: '18px 20px',
            display: 'flex',
            alignItems: 'center',
            gap: '12px'
          }}>
            <div style={{
              width: '42px',
              height: '42px',
              borderRadius: '50%',
              background: 'rgba(255,255,255,0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '20px'
            }}>🏠</div>
            <div style={{ flex: 1 }}>
              <div style={{ color: '#fff', fontWeight: 700, fontSize: '14px' }}>Jenny — RealtyVA Advisor</div>
              <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '11px' }}>🟢 Online now</div>
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
                fontSize: '16px'
              }}
            >✕</button>
          </div>

          {/* Messages */}
          <div style={{
            flex: 1,
            overflowY: 'auto',
            padding: '16px',
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
                      fontSize: '11px', color: '#fff'
                    }}>J</div>
                    <span style={{ fontSize: '11px', color: '#6b8299', fontWeight: 600 }}>Jenny</span>
                  </div>
                )}
                <div style={{
                  padding: '11px 14px',
                  borderRadius: '16px',
                  fontSize: '13.5px',
                  lineHeight: '1.6',
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
                  fontSize: '10px',
                  color: '#99aabb',
                  marginTop: '3px',
                  textAlign: msg.role === 'user' ? 'right' : 'left'
                }}>{msg.time}</div>
              </div>
            ))}
            {isTyping && (
              <div style={{ display: 'flex', gap: '5px', padding: '10px 14px', background: '#fff', borderRadius: '16px', width: 'fit-content' }}>
                <div style={{ width: '7px', height: '7px', background: '#2d6a9f', borderRadius: '50%', animation: 'bounce 1.2s infinite' }}></div>
                <div style={{ width: '7px', height: '7px', background: '#2d6a9f', borderRadius: '50%', animation: 'bounce 1.2s infinite', animationDelay: '0.2s' }}></div>
                <div style={{ width: '7px', height: '7px', background: '#2d6a9f', borderRadius: '50%', animation: 'bounce 1.2s infinite', animationDelay: '0.4s' }}></div>
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
            gap: '9px'
          }}>
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask about VAs, pricing, services..."
              rows="1"
              style={{
                flex: 1,
                border: '1.5px solid #dde7f2',
                borderRadius: '12px',
                padding: '10px 14px',
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: '13.5px',
                outline: 'none',
                resize: 'none',
                maxHeight: '80px',
                minHeight: '40px',
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
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                opacity: isTyping ? 0.5 : 1
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M22 2L11 13M22 2L15 22L11 13L2 9L22 2Z" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      )}

      <style>{`
        @keyframes pulse {
          0%, 100% { box-shadow: 0 6px 28px rgba(26,60,94,0.45), 0 0 0 0 rgba(45,106,159,0.4); }
          50% { box-shadow: 0 6px 28px rgba(26,60,94,0.45), 0 0 0 12px rgba(45,106,159,0); }
        }
        @keyframes bounce {
          0%, 60%, 100% { transform: translateY(0); opacity: 0.6; }
          30% { transform: translateY(-5px); opacity: 1; }
        }
      `}</style>
    </>
  );
}
