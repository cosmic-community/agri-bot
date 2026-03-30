'use client';

import { useState, useRef, useEffect } from 'react';
import type { ChatMessage as ChatMessageType, ChatSession } from '@/types';
import ChatMessage from '@/components/ChatMessage';
import ChatSidebar from '@/components/ChatSidebar';

function generateId(): string {
  return Date.now().toString(36) + Math.random().toString(36).slice(2);
}

export default function ChatInterface() {
  const [sessions, setSessions] = useState<ChatSession[]>([]);
  const [activeSessionId, setActiveSessionId] = useState<string | null>(null);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    try {
      const saved = localStorage.getItem('agri-chat-sessions');
      if (saved) {
        const parsed = JSON.parse(saved) as ChatSession[];
        setSessions(parsed);
        if (parsed.length > 0 && parsed[0]) {
          setActiveSessionId(parsed[0].id);
        }
      }
    } catch {
      // ignore
    }
  }, []);

  useEffect(() => {
    if (sessions.length > 0) {
      localStorage.setItem('agri-chat-sessions', JSON.stringify(sessions));
    }
  }, [sessions]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [sessions, activeSessionId]);

  const activeSession = sessions.find((s) => s.id === activeSessionId);

  const createNewChat = () => {
    const newSession: ChatSession = {
      id: generateId(),
      title: 'New Chat',
      messages: [],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    setSessions((prev) => [newSession, ...prev]);
    setActiveSessionId(newSession.id);
  };

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;

    let sessionId = activeSessionId;
    let currentSessions = [...sessions];

    if (!sessionId) {
      const newSession: ChatSession = {
        id: generateId(),
        title: input.slice(0, 40),
        messages: [],
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };
      currentSessions = [newSession, ...currentSessions];
      sessionId = newSession.id;
      setActiveSessionId(sessionId);
    }

    const userMsg: ChatMessageType = {
      id: generateId(),
      role: 'user',
      content: input.trim(),
      timestamp: new Date().toISOString(),
    };

    const updatedSessions = currentSessions.map((s) => {
      if (s.id === sessionId) {
        const updated = {
          ...s,
          messages: [...s.messages, userMsg],
          updatedAt: new Date().toISOString(),
        };
        if (s.messages.length === 0) {
          updated.title = input.trim().slice(0, 40);
        }
        return updated;
      }
      return s;
    });

    setSessions(updatedSessions);
    setInput('');
    setIsLoading(true);

    try {
      const currentSession = updatedSessions.find((s) => s.id === sessionId);
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: input.trim(),
          history: currentSession?.messages.slice(-10) || [],
        }),
      });

      const data = await res.json();

      const assistantMsg: ChatMessageType = {
        id: generateId(),
        role: 'assistant',
        content: data.response || 'I apologize, I could not process your request. Please try again.',
        timestamp: new Date().toISOString(),
      };

      setSessions((prev) =>
        prev.map((s) =>
          s.id === sessionId
            ? { ...s, messages: [...s.messages, assistantMsg], updatedAt: new Date().toISOString() }
            : s
        )
      );
    } catch {
      const errorMsg: ChatMessageType = {
        id: generateId(),
        role: 'assistant',
        content: '❌ Sorry, there was an error processing your request. Please check your API configuration and try again.',
        timestamp: new Date().toISOString(),
      };
      setSessions((prev) =>
        prev.map((s) =>
          s.id === sessionId
            ? { ...s, messages: [...s.messages, errorMsg], updatedAt: new Date().toISOString() }
            : s
        )
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex h-[calc(100vh-4rem)]">
      <ChatSidebar
        sessions={sessions}
        activeSessionId={activeSessionId}
        onSelectSession={setActiveSessionId}
        onNewChat={createNewChat}
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      <div className="flex-1 flex flex-col">
        <div className="flex items-center gap-3 p-4 border-b border-slate-800/50">
          <button
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden p-2 rounded-lg hover:bg-slate-800/60 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-agri-500 to-emerald-600 flex items-center justify-center text-sm">
            🤖
          </div>
          <div>
            <h2 className="font-semibold text-white text-sm">Agri-Intel Assistant</h2>
            <p className="text-xs text-slate-400">Crop, Weather, Pest & Market Intelligence</p>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {!activeSession || activeSession.messages.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <div className="text-6xl mb-6">🌾</div>
              <h3 className="text-xl font-bold text-white mb-2">Welcome to Agri-Intel Assistant</h3>
              <p className="text-slate-400 max-w-md text-sm">
                Ask me about crop recommendations, weather forecasts, pest identification, irrigation schedules, or market prices.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-8 max-w-lg">
                {[
                  'What crops should I grow this season in Maharashtra?',
                  'How is the weather for farming today?',
                  'Tell me about rice pest management',
                  'What are the current wheat market prices?',
                ].map((suggestion) => (
                  <button
                    key={suggestion}
                    onClick={() => setInput(suggestion)}
                    className="text-left px-4 py-3 rounded-xl bg-slate-800/60 border border-slate-700/50 text-sm text-slate-300 hover:border-agri-500/30 hover:text-white transition-all"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            activeSession.messages.map((msg) => (
              <ChatMessage key={msg.id} message={msg} />
            ))
          )}
          {isLoading && (
            <div className="flex gap-3 animate-slide-up">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-agri-500 to-emerald-600 flex items-center justify-center text-sm flex-shrink-0">
                🤖
              </div>
              <div className="bg-slate-800/80 border border-slate-700/50 rounded-2xl px-4 py-3">
                <div className="flex gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-agri-400 animate-typing" style={{ animationDelay: '0ms' }} />
                  <span className="w-2 h-2 rounded-full bg-agri-400 animate-typing" style={{ animationDelay: '200ms' }} />
                  <span className="w-2 h-2 rounded-full bg-agri-400 animate-typing" style={{ animationDelay: '400ms' }} />
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <div className="p-4 border-t border-slate-800/50">
          <div className="flex gap-3">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && !e.shiftKey && sendMessage()}
              placeholder="Ask about crops, weather, pests, markets..."
              className="flex-1 px-4 py-3 rounded-xl bg-slate-800/80 border border-slate-700/50 text-white placeholder-slate-500 focus:outline-none focus:border-agri-500/50 transition-colors text-sm"
              disabled={isLoading}
            />
            <button
              onClick={sendMessage}
              disabled={isLoading || !input.trim()}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-agri-500 to-emerald-600 text-white font-medium hover:from-agri-400 hover:to-emerald-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all text-sm"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}