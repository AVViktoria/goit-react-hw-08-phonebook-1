import { createSelector } from 'reselect';

export const itemsSelector = state => state.phonebook.contacts;
export const filterSelector = state => state.filter.filter;
export const getIsLoadingSelector = state => state.phonebook.isLoading;
export const getError = state => state.phonebook.error;

export const getFilteredContacts = createSelector(
  [itemsSelector, filterSelector],
  (contacts, filter) => {
    const visibleContacts = contacts.filter(contact => {
      return contact.name.toLowerCase().includes(filter.toLowerCase());
    });

    return visibleContacts;
  }
);
