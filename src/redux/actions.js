export const addContact = contact => {
  return {
    type: 'phonebook/addContacts',
    payload: contact,
  };
};

export const removeContact = contactId => {
  return { type: 'phonebook/removeContact', payload: contactId };
};

export const filterContact = value => {
  return { type: 'phonebook/filterContact', payload: value };
};
