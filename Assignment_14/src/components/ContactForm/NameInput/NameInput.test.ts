// test.ts
import { isValidName } from './NameInput.lib'

describe('Name Validation', () => {
  test('should return true for valid names', () => {
    expect(isValidName('John')).toBe(true);
    expect(isValidName('Sarah Connor')).toBe(true);
    expect(isValidName("O'Neal")).toBe(true);
    expect(isValidName('Jean-Luc Picard')).toBe(true);
    expect(isValidName('M', 1)).toBe(true);
  });

  test('should return false for invalid names', () => {
    expect(isValidName('')).toBe(false);
    expect(isValidName('1234')).toBe(false);
    expect(isValidName('John123')).toBe(false);
    expect(isValidName('!@#$%^&*()')).toBe(false);
    expect(isValidName('John_Doe')).toBe(false);
    expect(isValidName('John@Doe')).toBe(false);
    expect(isValidName('John Doe', 10)).toBe(false); // Test for length requirement
  });

  // Test handling of default minimum length
  test('should handle default minimum length', () => {
    expect(isValidName('J')).toBe(true);
    expect(isValidName('')).toBe(false);
  });
});
