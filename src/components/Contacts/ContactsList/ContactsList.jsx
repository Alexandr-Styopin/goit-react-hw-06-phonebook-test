import { ContactsItem } from '../ContactsList/ContactsItem/ContactsItem';
import { useSelector } from 'react-redux';

export default function Contacts() {
  const contacts = useSelector(state => state.contacts);

  return contacts.map(contact => (
    <ContactsItem key={contact.id} contacts={contacts} contact={contact} />
  ));
}
