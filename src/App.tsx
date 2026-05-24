import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

function ChatBubble() {
  const [open, setOpen] = useState(false);
  const [msg, setMsg] = useState("");
  const [chat, setChat] = useState<string[]>([]);
  const [badge, setBadge] = useState(false);

  useEffect(() => {
    setTimeout(() => setBadge(true), 3000);
  }, []);

  const send = async () => {
    if (!msg.trim()) return;
    setChat(prev => [...prev, "You: " + msg]);
    setMsg("");
    
    try {
      const res = await fetch('https://realtyvahub-proxy2.ryan0312001.workers.dev', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: 'deepseek/deepseek-v4-flash:free',
          messages: [{ role: 'user', content: msg }]
        })
      });
      const data = await res.json();
      if (data.choices?.[0]) {
        setChat(prev => [...prev, "Jenny: " + data.choices[0].message.content]);
      }
    } catch {
      setChat(prev => [...prev, "Jenny: Sorry, try again!"]);
    }
  };

  if (!open) {
    return (
      <button onClick={() => { setOpen(true); setBadge(false); }} style={{
        position: 'fixed', bottom: 28, right: 28, width: 62, height: 62,
        borderRadius: '50%', background: '#1a3c5e', color: '#fff',
        border: 'none', cursor: 'pointer', zIndex: 99999, fontSize: 24
      }}>
        💬
        {badge && <span style={{
          position: 'absolute', top: -3, right: -3, background: 'red',
          color: '#fff', borderRadius: '50%', width: 18, height: 18,
          fontSize: 10, display: 'flex', alignItems: 'center', justifyContent: 'center'
        }}>1</span>}
      </button>
    );
  }

  return (
    <div style={{
      position: 'fixed', bottom: 102, right: 28, width: 350, height: 500,
      background: '#fff', borderRadius: 16, boxShadow: '0 0 20px rgba(0,0,0,0.2)',
      zIndex: 99999, display: 'flex', flexDirection: 'column'
    }}>
      <div style={{ padding: 16, background: '#1a3c5e', color: '#fff', borderRadius: '16px 16px 0 0', display: 'flex', justifyContent: 'space-between' }}>
        <span>Jenny - RealtyVA</span>
        <button onClick={() => setOpen(false)} style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer' }}>✕</button>
      </div>
      <div style={{ flex: 1, padding: 12, overflowY: 'auto' }}>
        {chat.map((c, i) => (
          <div key={i} style={{ marginBottom: 8, color: c.startsWith('You:') ? '#1a3c5e' : '#333' }}>
            {c}
          </div>
        ))}
      </div>
      <div style={{ padding: 12, display: 'flex', gap: 8 }}>
        <input value={msg} onChange={e => setMsg(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && send()}
          placeholder="Type a message..."
          style={{ flex: 1, padding: 8, borderRadius: 8, border: '1px solid #ddd' }} />
        <button onClick={send} style={{ padding: '8px 16px', background: '#1a3c5e', color: '#fff', border: 'none', borderRadius: 8, cursor: 'pointer' }}>
          Send
        </button>
      </div>
    </div>
  );
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <ChatBubble />
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
