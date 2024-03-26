// This import statement is necessary to run the tests but ensure it's the only import
import { validateBudgetInput } from './BudgetInput.lib.ts';

describe('validateBudgetInput', () => {
  it('should return true for valid numbers within range', () => {
    expect(validateBudgetInput(100)).toBe(true);
    expect(validateBudgetInput(5000)).toBe(true);
    expect(validateBudgetInput(0)).toBe(true); // Assuming 0 is a valid input
  });

  it('should return false for numbers outside of range', () => {
    expect(validateBudgetInput(-1)).toBe(false);
    expect(validateBudgetInput(10001)).toBe(false);
  });

  it('should return false for invalid inputs', () => {
    expect(validateBudgetInput(NaN)).toBe(false);
  });
});
