import { useEffect, useRef, useState } from 'react';
import { useMessageStore } from '@/lib/store/message-store';
import { useAuthStore } from '@/lib/store/auth-store';
import { MessageBubble } from './message-bubble';

interface MessageListProps {
  conversationId: string;
}

export function MessageList({ conversationId }: MessageListProps) {
  const { user } = useAuthStore();
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchMessages = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const messages = await useMessageStore((state) =>
          state.getMessages(conversationId)
        );
        setMessages(messages);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMessages();
  }, [conversationId, useMessageStore]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  if (!user) return null;

  if (isLoading) {
    return <div className="p-4 text-center">Loading messages...</div>;
  }

  if (error) {
    return <div className="p-4 text-center text-red-500">Error fetching messages</div>;
  }

  if (!messages.length) {
    return <div className="p-4 text-center text-gray-500">No messages yet</div>;
  }

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
