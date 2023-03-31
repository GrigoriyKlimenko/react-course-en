export const textInputRule = {
  required: 'Required field, fill it in',
  pattern: {
    value: /^([A-Z][a-z]{2,})/,
    message:
      'The value must start with a capital letter and be at least 3 characters(only letters) long',
  },
};

export const birthdayInputRule = {
  required: 'Choose your day of birth',
  validate: {
    minAge: (date: string) =>
      Date.now() - Date.parse(date) > 567648000000 ||
      'You must be over 18 years old',
    maxAge: (date: string) =>
      Date.now() - Date.parse(date) < 3153600000000 ||
      'Something wrong with your age',
  },
};

export const genderInputRule = {
  required: 'Choose your gender',
};

export const raceClassInputRule = {
  required: 'Choose the racing class in which you will participate',
};

export const imageInputRule = {
  required: 'Choose your photo',
};

export const confirmInputRule = {
  required: 'Confirm, that you have read the competition rules',
};
