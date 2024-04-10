// Validates that the input is a number and within an acceptable range
export const validateBudgetInput = (value: number, min: number = 0, max: number = 10000): boolean => {
    if (typeof value !== 'number') {
      return false;
    }
    return value >= min && value <= max;
  };
  