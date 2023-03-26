import { describe, it } from 'vitest';

import {
  validateForProperName,
  validateBirthday,
  validateForm,
} from './helpers';

describe('validation for date of birth', () => {
  it('Returns empty string', () => {
    expect(validateBirthday('2000-12-01')).toBe('');
  });
  it('Returns string with require to fill input', () => {
    expect(validateBirthday('')).toBe('Choose your day of birth');
  });
  it('Returns validation error for <18 age', () => {
    expect(validateBirthday('2020-12-12')).toBe(
      'You must be over 18 years old'
    );
  });
  it('Returns validation error for too old value', () => {
    expect(validateBirthday('1920-12-12')).toBe(
      'Something wrong with your age'
    );
  });
});

describe('validation for proper name', () => {
  it('Returns empty string', () => {
    expect(validateForProperName('Jhon')).toBe('');
  });
  it('Returns string with require to fill input', () => {
    expect(validateForProperName('  ')).toBe('Required field, fill it in');
  });
  it('Returns string with require to correct value', () => {
    expect(validateForProperName('007agent')).toBe(
      'The value must start with a capital letter and be at least 3 characters(only letters) long'
    );
  });
});

describe('validation for all values', () => {
  const initialValidation = {
    firstName: '',
    lastName: '',
    city: '',
    birthday: '',
    gender: '',
    racingClass: '',
    image: '',
    confirm: '',
  };

  const skipValue = {
    firstName: 'Tim',
    lastName: 'Timers',
    city: 'City',
    birthday: '1968-12-12',
    gender: '',
    racingClass: '',
    image: '',
    confirm: false,
  };

  const filledValues = {
    firstName: 'Tim',
    lastName: 'Timers',
    city: 'City',
    birthday: '1968-12-12',
    gender: 'male',
    racingClass: 'Drag racing',
    image: 'C:/somepath',
    confirm: true,
  };

  const validationWithErrors = {
    firstName: '',
    lastName: '',
    city: '',
    birthday: '',
    gender: 'Choose your gender',
    racingClass: 'Choose the racing class in which you will participate',
    image: 'Choose your photo',
    confirm: 'Confirm, that you have read the competition rules',
  };
  it('Pass validation', () => {
    expect(validateForm(initialValidation, filledValues)).toEqual(
      initialValidation
    );
  });
  it('return validation error', () => {
    expect(validateForm(initialValidation, skipValue)).toEqual(
      validationWithErrors
    );
  });
});
