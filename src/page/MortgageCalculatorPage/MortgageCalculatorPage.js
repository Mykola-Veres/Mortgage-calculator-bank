import CalculatorForm from "components/CalculatorForm";
import { useEffect, useState } from "react"
import toast from "react-hot-toast";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import {SearchStyled, FormStyled, ButtonStyled, TitleStyled} from "./MortgageCalculatorPage.styled";


export default function MortgageCalculatorPage () {
const [loading, setLoading] = useState(false);
const [movies, setMovies] = useState(null)
const [searchParams, setSearchParams] = useSearchParams();
const location = useLocation();
const query = searchParams.get("query")

const [banks, setBanks] = useState(() => {return JSON.parse(localStorage.getItem('banks')) ?? ""})
console.log("banks",banks)

  const handlerSubmitUser = (event) => {
    event.preventDefault()
    const userQuery = event.currentTarget.elements.query.value
    setSearchParams({query: userQuery})
  }

  useEffect (()=> {
    if (!query) {return}

  },[query])

return(
  <>
  <Link to={`/`} ><FaRegArrowAltCircleLeft/> go to Banks </Link>
  <TitleStyled>Mortgage calculator</TitleStyled>
  <CalculatorForm></CalculatorForm>

  {/* <FormStyled onSubmit={handlerSubmitUser}>
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
    <ButtonStyled  type="submit">
      <span>search</span>
    </ButtonStyled>
  </FormStyled> */}
  </>
)}
