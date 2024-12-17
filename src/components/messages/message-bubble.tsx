import { formatDistanceToNow } from 'date-fns';
import { cn } from '@/lib/utils';
import type { Message } from '@/lib/store/message-store';

interface MessageBubbleProps {
  message: Message;
  isOwn: boolean;
}

export function MessageBubble({ message, isOwn }: MessageBubbleProps) {
  return (
    <div className={cn('flex', isOwn ? 'justify-end' : 'justify-start')} aria-live="polite"> {/* Accessibility */}
      <div
        className={cn(
          'max-w-[70%] rounded-lg px-4 py-2',
          isOwn ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-900',
          'break-words', // Word wrapping (Tailwind CSS)
          'white-space: pre-wrap;' // Whitespace handling (CSS)
        )}
      >
        <p>{message.content}</p>
        <p
          className={cn(
            'mt-1 text-xs',
            isOwn ? 'text-blue-100' : 'text-gray-500'
          )}
        >
          {formatDistanceToNow(new Date(message.createdAt), {
            addSuffix: true,
          })}
        </p>
      </div>
    </div>
  );
}
