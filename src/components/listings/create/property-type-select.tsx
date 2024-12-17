import { forwardRef } from 'react';
import { Label } from '@/components/ui/label';
import { PROPERTY_TYPES } from '@/types/listing';

interface PropertyTypeSelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  error?: string;
  optional?: boolean;
}

export const PropertyTypeSelect = forwardRef<HTMLSelectElement, PropertyTypeSelectProps>(
  ({ error, optional, ...props }, ref) => {
    return (
      <div className="space-y-2">
        <Label required={!optional}>Property Type</Label>
        <select
          ref={ref}
          className="block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          {...props}
        >
          <option value="">Select a property type</option>
          {PROPERTY_TYPES.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
        {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
      </div>
    );
  }
);

PropertyTypeSelect.displayName = 'PropertyTypeSelect';
