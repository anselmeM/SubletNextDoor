// src/lib/utils/date.ts
export function formatDate(dateString: string | Date | undefined): string | null {
    if (!dateString) {
      return null;
    }
  
    try {
      const date = typeof dateString === 'string' ? new Date(dateString) : dateString;
      return date.toLocaleDateString();
    } catch (error: unknown) { // Use unknown
      if (error instanceof Error) { // Type guard
        console.error("Invalid date string:", dateString, error.message);
      } else {
        console.error("An unknown error occurred while parsing the date", dateString, error);
      }
      return null;
    }
  }