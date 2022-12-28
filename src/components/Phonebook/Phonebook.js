import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  itemsSelector,
  getIsLoadingSelector,
  getError,
} from '../../redux/contactsAll';
import { getAllContacts } from '../../redux/contactsAll/contactsOperations';

import Section from '../Section';
import Container from '../Container';
import ContactForm from '../ContactForm';
import Filter from '../Filter';
import ContactList from '../ContactList';

export default function Phonebook() {
  const dispatch = useDispatch();
  const allContacts = useSelector(itemsSelector);
  const isLoading = useSelector(getIsLoadingSelector);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(getAllContacts());
  }, [dispatch]);

  return (
    <>
      <Section>
        <Container>
          <h1 className="title">Phonebook</h1>
          <ContactForm />
        </Container>
        {allContacts.length ? (
          <>
            {' '}
            <Container>
              <h2 className="title">Contacts</h2>
              <Filter />
              {isLoading && !error && <b>Request in progress...</b>}
              <ContactList />
            </Container>
          </>
        ) : (
          <h1 className="title">Phonebook</h1>
        )}
      </Section>
    </>
  );
}
