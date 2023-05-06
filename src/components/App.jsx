////////////////redux////////////////////////
import { useDispatch, useSelector } from 'react-redux';

import css from './App.module.css';
import Form from './form/Form';
import Contacts from './Contacts/Contacts';
import { addContact } from '../redux/actions';

export function App() {
  const contacts = useSelector(state => state.contacts);

  const dispatch = useDispatch();
  const localData = JSON.parse(window.localStorage.getItem('contacts'));

  if (localData === null) {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
    return;
  }

  if (contacts.length !== localData.length) {
    dispatch(addContact(localData));
  }

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <Form />
      <Contacts />
    </div>
  );
}

// const tamplateContacts = () => [
//   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
//   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
//   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
//   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
// ];
