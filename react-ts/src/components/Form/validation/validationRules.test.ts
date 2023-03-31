import { describe, it } from 'vitest';

import { birthdayInputRule } from './validationRules';

const {
  validate: { minAge, maxAge },
} = birthdayInputRule;

describe('validation for date of birth', () => {
  it('returns true', () => {
    expect(minAge('2000-12-01')).toBe(true);
    expect(maxAge('2000-12-01')).toBe(true);
  });
  it('returns validation error for <18 age', () => {
    expect(minAge('2020-12-12')).toBe('You must be over 18 years old');
  });
  it('Returns validation error for too old value', () => {
    expect(maxAge('1920-12-12')).toBe('Something wrong with your age');
  });
});
