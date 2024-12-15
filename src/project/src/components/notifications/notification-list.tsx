import { formatDistanceToNow } from 'date-fns';
import { Bell, MailOpen, Home, Info } from 'lucide-react';
import { useNotificationStore, type Notification } from '@/lib/store/notification-store';
import { Button } from '../ui/button';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface NotificationListProps {
  userId: string;
}

export function NotificationList({ userId }: NotificationListProps) {
  const { notifications, markAsRead, markAllAsRead, clearAll } = useNotificationStore();

  const userNotifications = notifications.filter(
    (notification) => notification.userId === userId
  );

  if (userNotifications.length === 0) {
    return (
      <div className="p-4 text-center text-gray-500">
        No notifications
      </div>
    );
  }

  const getIcon = (type: Notification['type']) => {
    switch (type) {
      case 'message':
        return <MailOpen className="h-5 w-5 text-blue-500" />;
      case 'listing':
        return <Home className="h-5 w-5 text-green-500" />;
      case 'system':
        return <Info className="h-5 w-5 text-yellow-500" />;
      default:
        return <Bell className="h-5 w-5 text-gray-500" />;
    }
  };

  return (
    <div className="divide-y">
      <div className="flex items-center justify-between p-4">
        <h3 className="font-medium">Notifications</h3>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => markAllAsRead(userId)}
          >
            Mark all as read
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => clearAll(userId)}
          >
            Clear all
          </Button>
        </div>
      </div>

      {userNotifications.map((notification) => (
        <div
          key={notification.id}
          className={cn(
            'flex items-start p-4 hover:bg-gray-50',
            !notification.read && 'bg-blue-50'
          )}
        >
          <div className="mr-4 mt-1">{getIcon(notification.type)}</div>
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <p className="font-medium text-gray-900">{notification.title}</p>
              <p className="text-xs text-gray-500">
                {formatDistanceToNow(new Date(notification.createdAt), {
                  addSuffix: true,
                })}
              </p>
            </div>
            <p className="mt-1 text-sm text-gray-600">{notification.message}</p>
            {notification.link && (
              <Link
                to={notification.link}
                className="mt-2 text-sm font-medium text-blue-600 hover:text-blue-500"
              >
                View details
              </Link>
            )}
          </div>
          {!notification.read && (
            <Button
              variant="ghost"
              size="sm"
              className="ml-4"
              onClick={() => markAsRead(notification.id)}
            >
              Mark as read
            </Button>
          )}
        </div>
      ))}
    </div>
  );
}