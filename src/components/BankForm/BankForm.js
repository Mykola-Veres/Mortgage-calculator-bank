import { useState } from 'react';
import { nanoid } from 'nanoid';
import { ContactsForm, ContactsFormBtn } from './BankForm.styled';

export default function BankForm ({onSubmit}) {
  const [name, setName] = useState("");
  const [rate, setRate] = useState("");
  const [loan, setLoan] = useState("");
  const [payment, setPayment] = useState("");
  const [term, setTerm] = useState("");

  const handlerChangeName = e => {
    switch (e.target.name){
      case "name":
        return setName(e.target.value)
      case "rate":
        return setRate(e.target.value)
      case "loan":
        return setLoan(e.target.value)
      case "payment":
        return setPayment(e.target.value)
      case "term":
        return setTerm(e.target.value)
      default:
        throw new Error();
    }
  }

  const handlerSubmitUser = e => {
    e.preventDefault();
    const bank = {
      id: nanoid(),
      name,
      rate,
      loan,
      payment,
      term,
    };
    onSubmit(bank);
    resetName();
  };

  const resetName = () => {
    setName("");
    setRate('');
    setLoan("");
    setPayment("");
    setTerm("");
  };

    return (
      <ContactsForm onSubmit={handlerSubmitUser}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={name}
            onChange={handlerChangeName}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Mercer Bank"
            required
          />
        </label>
        <label>
          Interest rate:
          <input
            type="number"
            name="rate"
            value={rate}
            onChange={handlerChangeName}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Interest rate must be digits and can contain spaces, dashes and parentheses"
            required
          />
        </label>
        <label>
          Maximum loan:
          <input
            type="number"
            name="loan"
            value={loan}
            onChange={handlerChangeName}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Maximum loan must be digits and can contain spaces, dashes and parentheses"
            required
          />
        </label>
        <label>
          Minimum down payment:
          <input
            type="number"
            name="payment"
            value={payment}
            onChange={handlerChangeName}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Minimum down payment must be digits and can contain spaces, dashes and parentheses"
            required
          />
        </label>
        <label>
          Loan term:
          <input
            type="number"
            name="term"
            value={term}
            onChange={handlerChangeName}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Loan term must be digits and can contain spaces, dashes and parentheses"
            required
          />
        </label>
        <ContactsFormBtn type="submit">Add contact</ContactsFormBtn>
      </ContactsForm>
    );
}
