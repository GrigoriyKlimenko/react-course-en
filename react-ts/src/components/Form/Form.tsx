import React, { createRef, FormEvent } from 'react';
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

export class Form extends React.Component<Props> {
  firstNameRef = createRef<HTMLInputElement>();
  lastNameRef = createRef<HTMLInputElement>();
  cityRef = createRef<HTMLInputElement>();
  birthdayRef = createRef<HTMLInputElement>();
  genderRefArray = [
    createRef<HTMLInputElement>(),
    createRef<HTMLInputElement>(),
  ];
  racingClassRef = createRef<HTMLSelectElement>();
  imageRef = createRef<HTMLInputElement>();
  confirmRef = createRef<HTMLInputElement>();
  formRef = createRef<HTMLFormElement>();

  initialValidation = {
    firstName: '',
    lastName: '',
    city: '',
    birthday: '',
    gender: '',
    racingClass: '',
    image: '',
    confirm: '',
  };

  state = {
    validationErrors: this.initialValidation,
    isAlertOpen: false,
  };

  closeAlert = () => {
    this.setState({ isAlertOpen: false });
  };

  handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const values = {
      firstName: this.firstNameRef.current?.value || '',
      lastName: this.lastNameRef.current?.value || '',
      city: this.cityRef.current?.value || '',
      birthday: this.birthdayRef.current?.value || '',
      gender:
        this.genderRefArray.find((item) => item.current?.checked)?.current
          ?.value || '',
      racingClass: this.racingClassRef.current?.value || '',
      image: this.imageRef.current?.value || '',
      confirm: this.confirmRef.current?.checked || false,
    };
    const validationResult = validateForm(this.initialValidation, values);
    this.setState({ validationErrors: validationResult });
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
      this.props.addCard({
        id: 'id' + Date.now(),
        name: `${values.firstName} ${values.lastName}`,
        image: this.imageRef.current?.files
          ? URL.createObjectURL(this.imageRef.current?.files[0])
          : '',
        date: values.birthday,
        gender: values.gender,
        raceClass: values.racingClass,
        city: values.city,
      });
      this.formRef.current?.reset();
      this.setState({ isAlertOpen: true });
    }
  };

  render() {
    return (
      <>
        <form
          className="formContainer"
          ref={this.formRef}
          onSubmit={this.handleSubmit}
        >
          <SingleValueInput
            type="text"
            name="First name"
            reference={this.firstNameRef}
            validationErrorMessage={this.state.validationErrors.firstName}
          />
          <SingleValueInput
            type="text"
            name="Second name"
            reference={this.lastNameRef}
            validationErrorMessage={this.state.validationErrors.lastName}
          />
          <SingleValueInput
            type="text"
            name="City"
            reference={this.cityRef}
            validationErrorMessage={this.state.validationErrors.city}
          />
          <SingleValueInput
            type="date"
            name="Date of birth"
            reference={this.birthdayRef}
            validationErrorMessage={this.state.validationErrors.birthday}
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
            referenceArray={this.genderRefArray}
            validationErrorMessage={this.state.validationErrors.gender}
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
            reference={this.racingClassRef}
            validationErrorMessage={this.state.validationErrors.racingClass}
          />
          <SingleValueInput
            type="file"
            name="Your photo"
            typeAccept="image/*"
            reference={this.imageRef}
            validationErrorMessage={this.state.validationErrors.image}
          />
          <Confirmation
            label="I have read the rules"
            reference={this.confirmRef}
            validationErrorMessage={this.state.validationErrors.confirm}
          />
          <input className="submitButton" type="submit" value="Submit" />
        </form>
        {this.state.isAlertOpen && <Alert handleClose={this.closeAlert} />}
      </>
    );
  }
}
