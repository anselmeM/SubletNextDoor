import { useState } from 'react';
import { ConversationList } from '@/components/messages/conversation-list';
import { MessageList } from '@/components/messages/message-list';
import { MessageInput } from '@/components/messages/message-input';
import { ConversationHeader } from '@/components/messages/conversation-header';
import { useMessageStore } from '@/lib/store/message-store';
import { useAuthStore } from '@/lib/store/auth-store';

export function MessagesPage() {
  const [selectedConversation, setSelectedConversation] = useState<string | null>(null);
  const { user } = useAuthStore();
  const { addMessage, getConversation } = useMessageStore();

  if (!user) return null;

  const conversation = selectedConversation 
    ? getConversation(user.id, selectedConversation)
    : null;

  const handleSend = (content: string) => {
    if (selectedConversation) {
      addMessage(user.id, selectedConversation, content);
    }
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="grid h-[600px] overflow-hidden rounded-lg border bg-white lg:grid-cols-[320px,1fr]">
        <div className="border-r">
          <ConversationList onSelect={setSelectedConversation} />
        </div>
        
        {selectedConversation ? (
          <div className="flex flex-col">
            <ConversationHeader
              participantName={selectedConversation}
              onBack={() => setSelectedConversation(null)}
            />
            <MessageList conversationId={conversation?.id || ''} />
            <MessageInput onSend={handleSend} />
          </div>
        ) : (
          <div className="flex items-center justify-center">
            <p className="text-gray-500">Select a conversation to start messaging</p>
          </div>
        )}
      </div>
    </div>
  );
}