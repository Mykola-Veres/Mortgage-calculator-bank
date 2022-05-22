import {NavLinkStyled, NavStyled, NavConteinerStaled} from "./Navigation.styled";

export default function Navigation() {
  return(
    <NavConteinerStaled>
      <NavStyled>
        <NavLinkStyled to="/">Banks</NavLinkStyled>
        <NavLinkStyled to="/calculator">Mortgage calculator</NavLinkStyled>
      </NavStyled>
    </NavConteinerStaled>
  )
}
