import { createRef, FormEvent, useState } from 'react';
import { RadioValueSelect } from '@components/Form/fields/RadioValueSelect/RadioValueSelect';
import { OptionValueSelect } from '@components/Form/fields/OptionValueSelect';
import { Confirmation } from '@components/Form/fields/Confirmation';
import { CardType } from '@components/CardsContainer/Card/types';
import { validateForm } from '@components/Form/validation/helpers';
import { Alert } from '@components/Form/Alert';
import { SingleValueInput } from '@components/Form/fields/SingleValueInput';
import './styles.css';

type Props = {
  addCard: (value: CardType) => void;
};

export const Form = ({ addCard }: Props) => {
  const firstNameRef = createRef<HTMLInputElement>();
  const lastNameRef = createRef<HTMLInputElement>();
  const cityRef = createRef<HTMLInputElement>();
  const birthdayRef = createRef<HTMLInputElement>();
  const genderRefArray = [
    createRef<HTMLInputElement>(),
    createRef<HTMLInputElement>(),
  ];
  const racingClassRef = createRef<HTMLSelectElement>();
  const imageRef = createRef<HTMLInputElement>();
  const confirmRef = createRef<HTMLInputElement>();
  const formRef = createRef<HTMLFormElement>();

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
  const [validationErrors, setValidationErrors] = useState(initialValidation);
  const [isAlertOpen, setIsAlertOpen] = useState(false);

  const closeAlert = () => {
    setIsAlertOpen(false);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const values = {
      firstName: firstNameRef.current?.value || '',
      lastName: lastNameRef.current?.value || '',
      city: cityRef.current?.value || '',
      birthday: birthdayRef.current?.value || '',
      gender:
        genderRefArray.find((item) => item.current?.checked)?.current?.value ||
        '',
      racingClass: racingClassRef.current?.value || '',
      image: imageRef.current?.value || '',
      confirm: confirmRef.current?.checked || false,
    };
    const validationResult = validateForm(initialValidation, values);
    setValidationErrors(validationResult);
    const {
      firstName,
      lastName,
      city,
      birthday,
      gender,
      racingClass,
      image,
      confirm,
    } = validationResult;
    if (
      !(
        firstName ||
        lastName ||
        city ||
        birthday ||
        gender ||
        racingClass ||
        image ||
        confirm
      )
    ) {
      addCard({
        id: 'id' + Date.now(),
        name: `${values.firstName} ${values.lastName}`,
        image: imageRef.current?.files
          ? URL.createObjectURL(imageRef.current?.files[0])
          : '',
        date: values.birthday,
        gender: values.gender,
        raceClass: values.racingClass,
        city: values.city,
      });
      formRef.current?.reset();
      setIsAlertOpen(true);
    }
  };

  return (
    <>
      <form className="formContainer" ref={formRef} onSubmit={handleSubmit}>
        <SingleValueInput
          type="text"
          name="First name"
          reference={firstNameRef}
          validationErrorMessage={validationErrors.firstName}
        />
        <SingleValueInput
          type="text"
          name="Second name"
          reference={lastNameRef}
          validationErrorMessage={validationErrors.lastName}
        />
        <SingleValueInput
          type="text"
          name="City"
          reference={cityRef}
          validationErrorMessage={validationErrors.city}
        />
        <SingleValueInput
          type="date"
          name="Date of birth"
          reference={birthdayRef}
          validationErrorMessage={validationErrors.birthday}
        />
        <RadioValueSelect
          name="Gender"
          options={[
            {
              id: 'male',
              title: 'Male',
            },
            {
              id: 'female',
              title: 'Female',
            },
          ]}
          referenceArray={genderRefArray}
          validationErrorMessage={validationErrors.gender}
        />
        <OptionValueSelect
          name="Race class"
          options={[
            { title: 'None', value: '' },
            { title: 'Drag racing', value: 'Drag racing' },
            { title: 'Drift racing', value: 'Drift racing' },
            { title: 'Ring racing', value: 'Ring racing' },
            { title: 'Cross country racing', value: 'Cross country racing' },
          ]}
          reference={racingClassRef}
          validationErrorMessage={validationErrors.racingClass}
        />
        <SingleValueInput
          type="file"
          name="Your photo"
          typeAccept="image/*"
          reference={imageRef}
          validationErrorMessage={validationErrors.image}
        />
        <Confirmation
          label="I have read the rules"
          reference={confirmRef}
          validationErrorMessage={validationErrors.confirm}
        />
        <input className="submitButton" type="submit" value="Submit" />
      </form>
      {isAlertOpen && <Alert handleClose={closeAlert} />}
    </>
  );
};
