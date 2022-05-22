import { Link } from "react-router-dom";
import styled from "styled-components";


export const ListMoviesStyled = styled.ol`
display: flex;
align-items: flex-start;
flex-direction: column;
list-style: none;
counter-reset: section;
list-style-type: none;
`;

export const ItemMoviesStyled = styled(Link)`
list-style: none;
counter-increment: section;
::before{
content: counters(section,".") ". ";
color: red;
font-weight: bold;
}
`

export const TitleStyled = styled.h1`
color: rgb(222, 160, 30);
text-align: center;
`

