import { useEffect, useRef, useState } from 'react';
import { useAuthStore } from '@/lib/store/auth-store';
import { MessageBubble } from './message-bubble';
import { getDatabase, ref, onValue } from "firebase/database";
import { db } from '@/lib/firebase'; // Import your Firebase initialization

interface Message {
    id: string;
    senderId: string;
    content: string;
    createdAt: number;
}

interface MessageListProps {
  conversationId: string;
}

export function MessageList({ conversationId }: MessageListProps) {
  const { user } = useAuthStore();
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!user) return;

    const messagesRef = ref(db, `messages/${conversationId}`);

    const unsubscribe = onValue(messagesRef, (snapshot) => {
      setIsLoading(true);
      setError(null);
      try {
        const data = snapshot.val();
        if (data) {
          const messagesArray = Object.keys(data).map((key) => ({
            id: key,
            ...data[key],
          }));
          messagesArray.sort((a, b) => a.createdAt - b.createdAt);
          setMessages(messagesArray);
        } else {
          setMessages([]);
        }
      } catch (err: any) {
        setError(err.message || 'Error fetching messages');
      } finally {
        setIsLoading(false);
      }
    });

    return () => unsubscribe();
  }, [conversationId, user]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  if (!user) return null;

  if (isLoading) {
    return <div className="p-4 text-center">Loading messages...</div>;
  }

  if (error) {
    return <div className="p-4 text-center text-red-500">{error}</div>;
  }

  if (!messages.length) {
    return <div className="p-4 text-center text-gray-500">No messages yet.</div>;
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
