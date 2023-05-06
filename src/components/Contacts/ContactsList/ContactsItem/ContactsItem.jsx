import { useDispatch } from 'react-redux';
import { removeContact } from '../../../../redux/actions';

import css from '../ContactsItem/ContactsItem.module.css';

export function ContactsItem({ contact }) {
  const dispatch = useDispatch();
  const localData = JSON.parse(window.localStorage.getItem('contacts'));

  const handleRemove = () => {
    dispatch(removeContact(contact.id));
    window.localStorage.setItem(
      'contacts',
      JSON.stringify(localData.filter(item => item.id !== contact.id))
    );
  };

  return (
    <li className={css.contactItem}>
      <p className={css.contactText}>
        {contact.name}: {contact.number}
      </p>

      <button className={css.contactBtn} type="button" onClick={handleRemove}>
        Delete
      </button>
    </li>
  );
}
