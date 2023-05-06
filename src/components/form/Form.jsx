import { useState } from 'react';
import { nanoid } from 'nanoid';

import InputName from './input-name/InpitName';
import InputNumber from './input-number/InputNumer';
import InputButtin from './inbut-button/InputButtin';
import css from '../form/Form.module.css';

import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/actions';

export default function Form() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();

  const handleInputChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        break;
    }
  };

  const handleSumitForm = e => {
    e.preventDefault();

    const newLocalData = [
      ...JSON.parse(window.localStorage.getItem('contacts')),
      { name: name, number: number, id: nanoid() },
    ];

    if (
      JSON.parse(window.localStorage.getItem('contacts')).filter(contact =>
        contact.name.includes(name)
      ).length !== 0
    ) {
      alert(`${name} is already in contact`);
      return;
    }

    window.localStorage.setItem('contacts', JSON.stringify(newLocalData));

    dispatch(addContact(JSON.parse(window.localStorage.getItem('contacts'))));
  };

  return (
    <form
      className={css.submitForm}
      onSubmit={handleSumitForm}
      onChange={handleInputChange}
    >
      <InputName />
      <InputNumber />
      <InputButtin />
    </form>
  );
}
