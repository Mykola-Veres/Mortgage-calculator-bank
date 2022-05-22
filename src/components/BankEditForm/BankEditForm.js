import { useState } from 'react';
import { ContactsForm, ContactsFormBtn } from './BankEditForm.styled';

export default function BankEditForm ({onSubmit, bank}) {
  const [name, setName] = useState(bank.name);
  const [rate, setRate] = useState(bank.rate);
  const [loan, setLoan] = useState(bank.loan);
  const [payment, setPayment] = useState(bank.payment);
  const [term, setTerm] = useState(bank.term);
  const [id] = useState(bank.id);

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
      id,
      name,
      rate,
      loan,
      payment,
      term,
    };
    onSubmit(bank)
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
        <ContactsFormBtn type="submit">Edit contact</ContactsFormBtn>
      </ContactsForm>
    );
}
