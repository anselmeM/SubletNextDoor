import { ArrowDownAZ, ArrowUpAZ, Calendar, Star } from 'lucide-react';
import { SortOption } from '@/types/listing';

interface SortSelectProps {
  value: SortOption;
  onChange: (value: SortOption) => void;
}

const SORT_OPTIONS: { value: SortOption; label: string; icon: JSX.Element }[] = [
  { value: 'price-asc', label: 'Price: Low to High', icon: <ArrowDownAZ className="h-4 w-4" /> },
  { value: 'price-desc', label: 'Price: High to Low', icon: <ArrowUpAZ className="h-4 w-4" /> },
  { value: 'date-desc', label: 'Newest First', icon: <Calendar className="h-4 w-4" /> },
  { value: 'rating-desc', label: 'Top Rated', icon: <Star className="h-4 w-4" /> },
];

export function SortSelect({ value, onChange }: SortSelectProps) {
  return (
    <div className="flex items-center space-x-2">
      <label htmlFor="sort" className="text-sm font-medium text-gray-700">
        Sort by:
      </label>
      <select
        id="sort"
        value={value}
        onChange={(e) => onChange(e.target.value as SortOption)}
        className="rounded-md border-gray-300 py-1 pl-3 pr-8 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
      >
        {SORT_OPTIONS.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}