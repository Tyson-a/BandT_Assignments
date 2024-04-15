// lib.ts
export const isValidName = (name: string, minLength: number = 1): boolean => {
  const validNamePattern = /^[A-Za-z\s'-]+$/; // Only allows letters, spaces, apostrophes, and hyphens
  return name.length >= minLength && validNamePattern.test(name);
};
