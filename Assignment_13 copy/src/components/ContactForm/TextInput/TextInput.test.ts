// TextInputValidation.test.ts

import { isValidText } from './TextInput.lib';

describe('TextInput Validation', () => {
  test('should return true for valid inputs', () => {
    expect(isValidText('hello', 1)).toBe(true);
    expect(isValidText('world', 4)).toBe(true); 
  });

  test('should return false for invalid inputs', () => {
    expect(isValidText('', 1)).toBe(false); 
    expect(isValidText('abc', 4)).toBe(false); 
  });
});
