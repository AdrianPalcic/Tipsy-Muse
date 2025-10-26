export const formattedDate = (date: Date) => {
  const day = date.getDate().toString().padStart(2, "0"); // dodaje 0 ako je <10
  const month = (date.getMonth() + 1).toString().padStart(2, "0"); // mjeseci su 0-indexed
  const year = date.getFullYear();
  return `${day}.${month}.${year}`;
};
