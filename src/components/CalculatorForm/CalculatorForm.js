import { useState } from "react";
import {SearchStyled, FormStyled, ButtonStyled} from "./CalculatorFrom.styled";

export default function CalculatorForm () {
// const [loading, setLoading] = useState(false);
// const [movies, setMovies] = useState(null)
// const [searchParams, setSearchParams] = useSearchParams();
// const location = useLocation();
// const query = searchParams.get("query")

//   const handlerSubmitUser = (event) => {
//     event.preventDefault()
//     const userQuery = event.currentTarget.elements.query.value
//     setSearchParams({query: userQuery})
//   }


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
      name,
      rate,
      loan,
      payment,
      term,
    };
      // onSubmit(bank)
    resetName();
  };

  const resetName = () => {
    setName("");
    setRate('');
    setLoan("");
    setPayment("");
    setTerm("");
  };


  return(
<FormStyled onSubmit={handlerSubmitUser}>
    <SearchStyled
        name="query"
        required
        id="film-name"
        aria-label="search"
        minLength="2"
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
      />

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

    <ButtonStyled  type="submit">
      <span>Submit</span>
    </ButtonStyled>
  </FormStyled>
)}
