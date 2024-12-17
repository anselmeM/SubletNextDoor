import { Search } from 'lucide-react';
import { Button } from '../ui/button';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  onSearch: () => void;
}

export function SearchBar({ value, onChange, onSearch }: SearchBarProps) {
  return (
    <div className="flex w-full max-w-2xl items-center rounded-full border bg-white px-4 py-2 shadow-sm">
      <input
        type="search" // Use type="search" for search queries
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search by location, university, or amenities..."
        className="flex-1 border-none bg-transparent px-2 focus:outline-none"
        onKeyDown={(e) => e.key === 'Enter' && onSearch()}
      />
      <Button onClick={onSearch} size="sm" aria-label="Search listings"> {/* Accessibility */}
        <Search className="mr-2 h-4 w-4" />
        Search
      </Button>
    </div>
  );
}
