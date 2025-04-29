import css from './ContactForm.module.css';
import { useState } from 'react';
import { useId } from 'react';
import { nanoid } from 'nanoid';

export default function ContactForm({ onAdd }) {
  const [formattedNumber, setFormattedNumber] = useState('');
  const fieldId = useId();

  const handleNumberChange = (event) => {
    const digits = event.target.value.replace(/\D/g, '');
    let formatted = '';

    if (digits.length <= 3) {
      formatted = digits;
    } else if (digits.length <= 5) {
      formatted = `${digits.slice(0, 3)}-${digits.slice(3)}`;
    } else {
      formatted = `${digits.slice(0, 3)}-${digits.slice(3, 5)}-${digits.slice(
        5,
        7,
      )}`;
    }

    setFormattedNumber(formatted);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onAdd({
      id: nanoid(),
      name: event.target.elements.username.value,
      number: event.target.elements.number.value,
    });
    event.target.reset();
    setFormattedNumber('');
  };
  return (
    <>
      <form className={css.form} onSubmit={handleSubmit}>
        <label htmlFor={`${fieldId}-username`}>Name</label>
        <input type="text" name="username" id={`${fieldId}-username`} />
        <label htmlFor={`${fieldId}-number`}>Number</label>
        <input
          type="tel"
          name="number"
          id={`${fieldId}-number`}
          value={formattedNumber}
          onChange={handleNumberChange}
          maxLength="9"
          required
        />
        <button type="submit" className={css.button}>
          Add contact
        </button>
      </form>
    </>
  );
}
