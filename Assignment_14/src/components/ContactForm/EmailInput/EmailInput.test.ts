import { isValidEmail } from './EmaliInput.lib';

describe('Email Validation Tests', () => {
  test('Valid email addresses', () => {
    expect(isValidEmail('example@example.com')).toBe(true);
    expect(isValidEmail('user.name+tag+sorting@example.com')).toBe(true);
    expect(isValidEmail('user.name@example.co.uk')).toBe(true);
  });

  test('Invalid email addresses', () => {
    expect(isValidEmail('example@')).toBe(false);
    expect(isValidEmail('example.com')).toBe(false);
    expect(isValidEmail('@example.com')).toBe(false);
    expect(isValidEmail('user name@example.com')).toBe(false); 
    expect(isValidEmail('user.name@.com')).toBe(false);
  });
});