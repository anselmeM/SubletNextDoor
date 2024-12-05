import { useEffect, useRef } from 'react';
import { useMessageStore } from '@/lib/store/message-store';
import { useAuthStore } from '@/lib/store/auth-store';
import { MessageBubble } from './message-bubble';

interface MessageListProps {
  conversationId: string;
}

export function MessageList({ conversationId }: MessageListProps) {
  const { user } = useAuthStore();
  const messages = useMessageStore((state) => state.getMessages(conversationId));
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  if (!user) return null;

  return (
    <div className="flex flex-1 flex-col space-y-4 overflow-y-auto p-4">
      {messages.map((message) => (
        <MessageBubble
          key={message.id}
          message={message}
          isOwn={message.senderId === user.id}
        />
      ))}
      <div ref={messagesEndRef} />
    </div>
  );
}