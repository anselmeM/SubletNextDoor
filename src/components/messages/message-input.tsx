import { useState } from 'react';
import { Send } from 'lucide-react';
import { Button } from '../ui/button';
import { getDatabase, ref, push, serverTimestamp } from "firebase/database";
import { useAuthStore } from '@/lib/store/auth-store';
import { db } from '@/lib/firebase'; // Import your Firebase initialization

interface MessageInputProps {
  conversationId: string;
}

export function MessageInput({ conversationId }: MessageInputProps) {
  const { user } = useAuthStore();
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;

    if (message.trim()) {
      try {
        const messagesRef = ref(db, `messages/${conversationId}`);
        await push(messagesRef, {
          senderId: user.id,
          content: message.trim(),
          createdAt: serverTimestamp(),
        });
        setMessage('');
      } catch (error) {
        console.error("Error sending message:", error);
        // Handle error, e.g., display an error message to the user
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2 border-t p-4">
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Ask a question or share your thoughts"
        className="flex-1 rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 disabled:opacity-50"
      />
      <Button type="submit" disabled={!message.trim()}>
        <Send className="h-4 w-4" />
      </Button>
    </form>
  );
}
