import ContactsItem from './ContactsList/ContactsList';
import ContactsFilter from './ContactsFilter/ContactsFilter';
import { useDispatch, useSelector } from 'react-redux';

export default function Contacts({ onClickRemove, onChangeInput }) {
  const filter = useSelector(state => state.filter);

  return (
    <div>
      <h2>Contacts</h2>

      <ContactsFilter onChangeInput={onChangeInput} />
      <ul>
        <ContactsItem onClickRemove={onClickRemove} />
      </ul>
    </div>
  );
}
