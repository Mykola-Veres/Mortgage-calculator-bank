import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavStyled = styled.nav`
display: flex;
gap: 20px;
padding: 20px;
text-align: center;
`;

export const NavLinkStyled = styled(NavLink)`
&.active {
  color: red;
  background-color: rgb(222, 160, 30);
}
width: 120px;
background-color: rgb(255, 255, 128);
  padding: 5px;
  cursor: pointer;
  transform: scale(1);
  transition: transform 250ms linear;
  border-radius: 15px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  :hover,
  :focus {
    transform: scale(1.1);
    cursor: pointer;
  }
counter-increment: section;
::before{
content: counters(section,".") ". ";
color: red;
font-weight: bold;
}
`;

export const NavConteinerStaled = styled.div`
background-color: ${props => props.theme.colors.greyOpacity};
border-radius: 15px;
`;
