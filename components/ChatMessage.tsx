import type { ChatMessage as ChatMessageType } from '@/types';

interface ChatMessageProps {
  message: ChatMessageType;
}

export default function ChatMessage({ message }: ChatMessageProps) {
  const isUser = message.role === 'user';

  return (
    <div className={`flex gap-3 ${isUser ? 'justify-end' : 'justify-start'} animate-slide-up`}>
      {!isUser && (
        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-agri-500 to-emerald-600 flex items-center justify-center text-sm flex-shrink-0">
          🤖
        </div>
      )}
      <div
        className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
          isUser
            ? 'bg-agri-500/20 text-white border border-agri-500/30'
            : 'bg-slate-800/80 text-slate-200 border border-slate-700/50'
        }`}
      >
        <div className="whitespace-pre-wrap">{message.content}</div>
        <p className="text-xs text-slate-500 mt-2">
          {new Date(message.timestamp).toLocaleTimeString()}
        </p>
      </div>
      {isUser && (
        <div className="w-8 h-8 rounded-lg bg-slate-700 flex items-center justify-center text-sm flex-shrink-0">
          👤
        </div>
      )}
    </div>
  );
}