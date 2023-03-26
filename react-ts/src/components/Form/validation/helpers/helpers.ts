type InitValidation = {
  [key: string]: string;
};

type Values = {
  firstName: string;
  lastName: string;
  city: string;
  birthday: string;
  gender: string;
  racingClass: string;
  image: string;
  confirm: boolean;
};

export const validateForProperName = (value: string) => {
  if (value.trim().length === 0) {
    return 'Required field, fill it in';
  }
  if (!value.trim().match(/^([A-Z][a-z]{2,})/)) {
    return 'The value must start with a capital letter and be at least 3 characters(only letters) long';
  }
  return '';
};

export const validateBirthday = (value: string) => {
  if (!value) {
    return 'Choose your day of birth';
  }
  if (Date.now() - Date.parse(value) < 567648000000) {
    return 'You must be over 18 years old';
  }
  if (Date.now() - Date.parse(value) > 3153600000000) {
    return 'Something wrong with your age';
  }
  return '';
};

export const validateForm = (
  initValidation: InitValidation,
  values: Values
) => {
  const validationResult = JSON.parse(JSON.stringify(initValidation));
  validationResult.firstName = validateForProperName(values.firstName);
  validationResult.lastName = validateForProperName(values.lastName);
  validationResult.city = validateForProperName(values.city);
  validationResult.birthday = validateBirthday(values.birthday);
  validationResult.gender =
    values.gender.length === 0 ? 'Choose your gender' : '';
  validationResult.image = values.image ? '' : 'Choose your photo';
  validationResult.racingClass = values.racingClass
    ? ''
    : 'Choose the racing class in which you will participate';
  validationResult.confirm = values.confirm
    ? ''
    : 'Confirm, that you have read the competition rules';
  return validationResult;
};
