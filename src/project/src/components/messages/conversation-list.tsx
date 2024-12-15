import { formatDistanceToNow } from 'date-fns';
import { useMessageStore } from '@/lib/store/message-store';
import { useAuthStore } from '@/lib/store/auth-store';
import { Button } from '../ui/button';

interface ConversationListProps {
  onSelect?: (conversationId: string) => void;
}

export function ConversationList({ onSelect }: ConversationListProps) {
  const { user } = useAuthStore();
  const { conversations, markAsRead } = useMessageStore();

  if (!user) return null;

  const userConversations = conversations.filter((conv) =>
    conv.participants.includes(user.id)
  );

  if (userConversations.length === 0) {
    return (
      <div className="p-4 text-center text-gray-500">
        No conversations yet
      </div>
    );
  }

  const handleSelect = (conversationId: string) => {
    markAsRead(conversationId);
    onSelect?.(conversationId);
  };

  return (
    <div className="divide-y">
      {userConversations.map((conversation) => {
        const otherParticipant = conversation.participants.find(
          (id) => id !== user.id
        );
        const lastMessage = conversation.lastMessage;

        return (
          <Button
            key={conversation.id}
            variant="ghost"
            className="w-full justify-start p-4 hover:bg-gray-50"
            onClick={() => handleSelect(conversation.id)}
          >
            <div className="flex w-full items-center justify-between">
              <div className="flex-1">
                <p className="font-medium text-gray-900">
                  {otherParticipant}
                  {conversation.unreadCount > 0 && (
                    <span className="ml-2 rounded-full bg-blue-100 px-2 py-0.5 text-xs text-blue-600">
                      {conversation.unreadCount}
                    </span>
                  )}
                </p>
                {lastMessage && (
                  <>
                    <p className="mt-1 truncate text-sm text-gray-500">
                      {lastMessage.content}
                    </p>
                    <p className="mt-1 text-xs text-gray-400">
                      {formatDistanceToNow(new Date(lastMessage.createdAt), {
                        addSuffix: true,
                      })}
                    </p>
                  </>
                )}
              </div>
            </div>
          </Button>
        );
      })}
    </div>
  );
}