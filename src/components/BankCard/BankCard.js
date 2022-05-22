

const BanksCard = ({ rate, loan, payment, term }) => (
    <>
      <div> Interest rate:{"  "}
        {rate}%
      </div>
      <div> Maximum loan:{"  "}
        {loan}
      </div>
      <div>Minimum down payment:{"  "}
        {payment}
      </div>
      <div> Loan term:{"  "}
        {term}
      </div>
    </>
  );

export default BanksCard;


// export default function BanksCard() {


//   return(
//     <NavConteinerStaled>
//       <NavStyled>
//         <NavLinkStyled to="/">Banks</NavLinkStyled>
//         <NavLinkStyled to="/calculator">Mortgage calculator</NavLinkStyled>
//       </NavStyled>
//     </NavConteinerStaled>
//   )
// }

