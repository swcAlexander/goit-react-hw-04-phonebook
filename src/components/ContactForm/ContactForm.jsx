import { useState } from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import style from 'components/ContactForm/ContactForm.module.css';

export default function ContactForm() {
  const [name, setName] = useState('');
  const hundleChange = e => {
    const { value } = e.currentTarget;
    setName(value);
  };

  const [number, setNumber] = useState('');

  nameInputId = nanoid();
  numberImputId = nanoid();

  const hundleSubmit = e => {
    e.preventDefault();
    props.onSubmit(name, number);
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form className={style.contactForm} onSubmit={hundleSubmit}>
      <h1 className={style.contactFormHeader}>Phonebook</h1>
      <label htmlFor={nameInputId}>
        Name
        <input
          className={style.contactInput}
          type="text"
          name="name"
          id={nameInputId}
          value={name}
          onChange={hundleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label htmlFor={numberImputId}>
        Number
        <input
          className={style.contactInput}
          type="tel"
          name="number"
          id={numberInputId}
          value={number}
          onChange={hundleChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button className={style.contactButton} type="submit">
        Add contact
      </button>
    </form>
  );
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
