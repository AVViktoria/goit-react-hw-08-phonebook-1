import { useState } from 'react';

export const useLocalStorage = () => {
  const [contacts, setContacts] = useState(
    () => JSON.parse(window.localStorage.getItem('contacts')) ?? []
  );

  return [contacts, setContacts];
};
