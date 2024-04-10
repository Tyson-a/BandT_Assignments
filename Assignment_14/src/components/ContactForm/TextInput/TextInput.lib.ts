export const isValidText = (text: string, minLength: number = 1): boolean => {
  return text.length >= minLength;
};