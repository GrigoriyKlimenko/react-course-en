import React, { createRef, FormEvent } from 'react';
import { ProperName } from '@components/Form/fields/ProperName';
import { DateOfBirth } from '@components/Form/fields/DateOfBirth';
import { Gender } from '@components/Form/fields/Gender/Gender';
import { RacingClass } from '@components/Form/fields/RacingClass';
import { FileUpload } from '@components/Form/fields/FileUpload';
import { Confirmation } from '@components/Form/fields/Confirmation';
import { CardType } from '@components/CardsContainer/Card/types';
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

  handleSubmit = async (event: FormEvent<HTMLButtonElement>) => {
    event.preventDefault();

    this.props.addCard({
      id: 'id1',
      name: `${this.firstNameRef.current?.value} ${this.lastNameRef.current?.value}`,
      image: this.imageRef.current?.files
        ? URL.createObjectURL(this.imageRef.current?.files[0])
        : '',
      date: this.birthdayRef.current?.value || '',
      gender: 'male',
      raceClass: this.racingClassRef.current?.value || '',
      city: this.cityRef.current?.value || '',
    });
  };

  render() {
    return (
      <div className="formContainer">
        <ProperName label="First name" reference={this.firstNameRef} />
        <ProperName label="Second name" reference={this.lastNameRef} />
        <ProperName label="City" reference={this.cityRef} />
        <DateOfBirth reference={this.birthdayRef} />
        <Gender referenceArray={this.genderRefArray} />
        <RacingClass reference={this.racingClassRef} />
        <FileUpload reference={this.imageRef} />
        <Confirmation reference={this.confirmRef} />
        <button type="submit" onClick={this.handleSubmit}>
          Submit
        </button>
      </div>
    );
  }
}
