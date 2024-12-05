import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { generateId } from '../utils/id';

export interface Message {
  id: string;
  senderId: string;
  receiverId: string;
  content: string;
  createdAt: string;
  read: boolean;
}

export interface Conversation {
  id: string;
  participants: string[];
  lastMessage?: Message;
  unreadCount: number;
}

interface MessageState {
  conversations: Conversation[];
  messages: Record<string, Message[]>;
  addMessage: (senderId: string, receiverId: string, content: string) => void;
  markAsRead: (conversationId: string) => void;
  getConversation: (userId1: string, userId2: string) => Conversation | undefined;
  getMessages: (conversationId: string) => Message[];
}

export const useMessageStore = create<MessageState>()(
  persist(
    (set, get) => ({
      conversations: [],
      messages: {},

      addMessage: (senderId, receiverId, content) => {
        const message: Message = {
          id: generateId(),
          senderId,
          receiverId,
          content,
          createdAt: new Date().toISOString(),
          read: false,
        };

        set((state) => {
          // Find or create conversation
          let conversation = state.getConversation(senderId, receiverId);
          if (!conversation) {
            conversation = {
              id: generateId(),
              participants: [senderId, receiverId],
              unreadCount: 0,
            };
          }

          // Update conversation
          const updatedConversations = state.conversations.filter(
            (c) => c.id !== conversation!.id
          );
          conversation.lastMessage = message;
          conversation.unreadCount += 1;
          updatedConversations.unshift(conversation);

          // Update messages
          const conversationMessages = state.messages[conversation.id] || [];
          return {
            conversations: updatedConversations,
            messages: {
              ...state.messages,
              [conversation.id]: [...conversationMessages, message],
            },
          };
        });
      },

      markAsRead: (conversationId) => {
        set((state) => ({
          conversations: state.conversations.map((conv) =>
            conv.id === conversationId
              ? { ...conv, unreadCount: 0 }
              : conv
          ),
          messages: {
            ...state.messages,
            [conversationId]: (state.messages[conversationId] || []).map(
              (msg) => ({ ...msg, read: true })
            ),
          },
        }));
      },

      getConversation: (userId1, userId2) => {
        return get().conversations.find(
          (conv) =>
            conv.participants.includes(userId1) &&
            conv.participants.includes(userId2)
        );
      },

      getMessages: (conversationId) => {
        return get().messages[conversationId] || [];
      },
    }),
    {
      name: 'message-storage',
    }
  )
);