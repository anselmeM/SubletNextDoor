import { ArrowLeft } from 'lucide-react';
import { Button } from '../ui/button';

interface ConversationHeaderProps {
  participantName: string;
  onBack?: () => void;
}

export function ConversationHeader({ participantName, onBack }: ConversationHeaderProps) {
  return (
    <div className="flex items-center gap-2 border-b p-4">
      {onBack && (
        <Button variant="ghost" size="sm" onClick={onBack} aria-label="Go back"> {/* Accessibility */}
          <ArrowLeft className="h-5 w-5" />
        </Button>
      )}
      <h2 className="text-lg font-semibold">{participantName}</h2>
    </div>
  );
}
