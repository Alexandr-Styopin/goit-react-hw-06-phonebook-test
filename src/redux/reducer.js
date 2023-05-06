const initialState = {
  contacts: [],
  filter: '',
};

export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'phonebook/addContacts': {
      return {
        ...state,
        contacts: [...action.payload],
      };
    }
    case 'phonebook/removeContact':
      return {
        ...state,

        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        ),
      };

    case 'phonebook/filterContact':
      return {
        ...state,

        contacts: state.contacts.filter(contact =>
          contact.name.toLowerCase().includes(action.payload.toLowerCase())
        ),

        filter: action.payload,
      };
    default:
      return state;
  }
};
