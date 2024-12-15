import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { generateId } from '../utils/id';

export interface Notification {
  id: string;
  userId: string;
  type: 'message' | 'listing' | 'system';
  title: string;
  message: string;
  read: boolean;
  createdAt: string;
  link?: string;
}

// Type for the notification payload
type NotificationPayload = Omit<Notification, 'id' | 'createdAt' | 'read'>;

interface NotificationState {
  notifications: Notification[];
  addNotification: (notification: NotificationPayload) => void;
  markAsRead: (notificationId: string) => void;
  markAllAsRead: (userId: string) => void;
  clearAll: (userId: string) => void;
  getUnreadCount: (userId: string) => number;
}

export const useNotificationStore = create<NotificationState>()(
  persist(
    (set, get) => ({
      notifications: [],

      addNotification: (notification) => {
        const newNotification: Notification = {
          id: generateId(),
          createdAt: new Date().toISOString(),
          read: false,
          ...notification,
        };

        set((state) => {
          const updatedNotifications = [newNotification, ...state.notifications];

          // Sort notifications by createdAt in descending order
          updatedNotifications.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());

          return {
            notifications: updatedNotifications,
          };
        });
      },

      markAsRead: (notificationId) => {
        set((state) => ({
          notifications: state.notifications.map((notification) =>
            notification.id === notificationId ? { ...notification, read: true } : notification
          ),
        }));
      },

      markAllAsRead: (userId) => {
        set((state) => ({
          notifications: state.notifications.map((notification) =>
            notification.userId === userId ? { ...notification, read: true } : notification
          ),
        }));
      },

      clearAll: (userId) => {
        set((state) => ({
          notifications: state.notifications.filter(
            (notification) => notification.userId !== userId
          ),
        }));
      },

      getUnreadCount: (userId) => {
        return get().notifications.filter(
          (notification) => notification.userId === userId && !notification.read
        ).length;
      },
    }),
    {
      name: 'notification-storage',
    }
  )
);