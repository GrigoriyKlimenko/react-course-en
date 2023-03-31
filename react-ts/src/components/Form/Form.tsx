import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { CardType } from '@components/CardsContainer/Card/types';
import { RadioValueSelect } from '@components/Form/fields/RadioValueSelect/RadioValueSelect';
import { OptionValueSelect } from '@components/Form/fields/OptionValueSelect';
import { Confirmation } from '@components/Form/fields/Confirmation';
import { Alert } from '@components/Form/Alert';
import { TextValueInput } from '@components/Form/fields/TextValueInput';
import { DateValueInput } from '@components/Form/fields/DateValueInput';
import { ImageInput } from '@components/Form/fields/ImageInput';
import './styles.css';

type Props = {
  addCard: (value: CardType) => void;
};

export type FormValues = {
  firstName: string;
  lastName: string;
  city: string;
  birthday: string;
  gender: string;
  raceClass: string;
  image: FileList;
  confirm: boolean;
};

export type FormValuesKeys = keyof FormValues;

export const Form = ({ addCard }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
  });
  const formProps = { register, errors };
  const [isAlertOpen, setIsAlertOpen] = useState(false);

  const closeAlert = () => {
    setIsAlertOpen(false);
  };

  const onSubmit = (data: FormValues) => {
    addCard({
      id: 'id' + Date.now(),
      name: `${data.firstName} ${data.lastName}`,
      image: data.image ? URL.createObjectURL(data.image?.[0]) : '',
      gender: data.gender,
      city: data.city,
      raceClass: data.raceClass,
      date: data.birthday,
    });
    setIsAlertOpen(true);
    reset();
  };

  return (
    <>
      <form className="formContainer" onSubmit={handleSubmit(onSubmit)}>
        <TextValueInput label="First name" name="firstName" {...formProps} />
        <TextValueInput label="Last name" name="lastName" {...formProps} />
        <TextValueInput label="City" name="city" {...formProps} />
        <DateValueInput label="Date of birth" name="birthday" {...formProps} />
        <RadioValueSelect
          label="Gender"
          name="gender"
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
          {...formProps}
        />
        <OptionValueSelect
          label="Race class"
          name="raceClass"
          options={[
            { title: 'None', value: '' },
            { title: 'Drag racing', value: 'Drag racing' },
            { title: 'Drift racing', value: 'Drift racing' },
            { title: 'Ring racing', value: 'Ring racing' },
            { title: 'Cross country racing', value: 'Cross country racing' },
          ]}
          {...formProps}
        />
        <ImageInput
          label="Your photo"
          name="image"
          typeAccept="image/*"
          {...formProps}
        />
        <Confirmation
          label="I have read the rules"
          name="confirm"
          {...formProps}
        />
        <input className="submitButton" type="submit" value="Submit" />
      </form>
      {isAlertOpen && <Alert handleClose={closeAlert} />}
    </>
  );
};
