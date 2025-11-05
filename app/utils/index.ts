export const formattedDate = (date: Date) => {
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear();
  return `${day}.${month}.${year}`;
};

export const parseDate = (dateString: string): Date => {
  const [day, month, year] = dateString.split(".").map(Number);
  return new Date(year, month - 1, day);
};

export const getDateRange = (
  filter: string
): { start: Date; end: Date } | null => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  switch (filter) {
    case "ovaj tjedan": {
      const start = new Date(today);
      const dayOfWeek = today.getDay();
      const diff = dayOfWeek === 0 ? -6 : 1 - dayOfWeek;
      start.setDate(today.getDate() + diff);

      const end = new Date(start);
      end.setDate(start.getDate() + 6);
      return { start, end };
    }

    case "sljedeci tjedan": {
      const start = new Date(today);
      const dayOfWeek = today.getDay();
      const diff = dayOfWeek === 0 ? 1 : 8 - dayOfWeek;
      start.setDate(today.getDate() + diff);

      const end = new Date(start);
      end.setDate(start.getDate() + 6);
      return { start, end };
    }

    case "ovaj mjesec": {
      const start = new Date(today.getFullYear(), today.getMonth(), 1);
      const end = new Date(today.getFullYear(), today.getMonth() + 1, 0);
      return { start, end };
    }

    case "sljedeci mjesec": {
      const start = new Date(today.getFullYear(), today.getMonth() + 1, 1);
      const end = new Date(today.getFullYear(), today.getMonth() + 2, 0);
      return { start, end };
    }

    case "Svi datumi":
    default:
      return null;
  }
};

export const isDateInRange = (
  dateString: string,
  range: { start: Date; end: Date } | null
): boolean => {
  if (!range) return true;

  const date = parseDate(dateString);
  return date >= range.start && date <= range.end;
};
