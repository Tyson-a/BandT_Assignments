import {expect, test} from '@jest/globals';
import '@testing-library/jest-dom';
import { sum } from "./Button.lib";
 
test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });