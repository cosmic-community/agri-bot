'use client';

import type { ChatSession } from '@/types';

interface ChatSidebarProps {
  sessions: ChatSession[];
  activeSessionId: string | null;
  onSelectSession: (id: string) => void;
  onNewChat: () => void;
  isOpen: boolean;
  onClose: () => void;
}

export default function ChatSidebar({
  sessions,
  activeSessionId,
  onSelectSession,
  onNewChat,
  isOpen,
  onClose,
}: ChatSidebarProps) {
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={onClose} />
      )}
      <aside
        className={`fixed lg:relative top-0 left-0 h-full w-72 bg-slate-900 border-r border-slate-800/50 z-50 lg:z-auto transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        <div className="p-4">
          <button
            onClick={onNewChat}
            className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-agri-500/20 border border-agri-500/30 text-agri-400 hover:bg-agri-500/30 transition-colors text-sm font-medium"
          >
            <span className="text-lg">+</span> New Chat
          </button>
        </div>
        <div className="px-4 pb-4 space-y-1 overflow-y-auto h-[calc(100%-80px)]">
          {sessions.map((session) => (
            <button
              key={session.id}
              onClick={() => {
                onSelectSession(session.id);
                onClose();
              }}
              className={`w-full text-left px-4 py-3 rounded-xl text-sm transition-colors truncate ${
                activeSessionId === session.id
                  ? 'bg-agri-500/20 text-agri-400 border border-agri-500/30'
                  : 'text-slate-400 hover:bg-slate-800/60 hover:text-white'
              }`}
            >
              💬 {session.title}
            </button>
          ))}
          {sessions.length === 0 && (
            <p className="text-slate-500 text-sm text-center py-8">No chats yet</p>
          )}
        </div>
      </aside>
    </>
  );
}