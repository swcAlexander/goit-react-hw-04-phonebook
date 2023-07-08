import React from 'react';
import { PropTypes } from 'prop-types';
import { ContactItem } from 'components/ContactList/ContactsItem/ContactItem';
import style from 'components/ContactList/ContactList.module.css';

export const ContactList = ({ contacts, removeContact }) => {
  if (contacts)
    return (
      <ul className={style.contactList}>
        {contacts.map(contact => (
          <div className={style.contactListContainer} key={contact.id}>
            <ContactItem
              name={contact.name}
              number={contact.number}
              key={contact.id}
            />
            <button type="button" onClick={() => removeContact(contact.id)}>
              Delete
            </button>
          </div>
        ))}
      </ul>
    );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  removeContact: PropTypes.func.isRequired,
};
