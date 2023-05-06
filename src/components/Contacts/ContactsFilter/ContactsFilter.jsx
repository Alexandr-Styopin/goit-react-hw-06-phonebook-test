import { useDispatch, useSelector } from 'react-redux';
import { filterContact } from '../../../redux/actions';

export default function ContactsFilter({ onChangeInput }) {
  const contacts = useSelector(state => state.contacts);
  const dispatch = useDispatch();

  const handleInputFilter = e => {
    dispatch(filterContact(e.target.value.toLowerCase()));
  };
  return (
    <label>
      Find contacts by name
      <input type="text" name="filter" onChange={handleInputFilter} />
    </label>
  );
}
