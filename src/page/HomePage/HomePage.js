import { useEffect, useState } from 'react';
import { TitleStyled } from './HomePage.styled';
import { FaRegArrowAltCircleLeft } from 'react-icons/fa';
import { Link, Navigate } from 'react-router-dom';
import BankForm from 'components/BankForm';
import BanksList from 'components/BanksList';
// import { useAuth } from 'hooks/auth';
import { useDispatch, useSelector } from 'react-redux';
import { removeUser } from 'redux/slices/userSlice';

export default function HomePage() {
  const { email, token } = useSelector(state => state.user);
  const dispatch = useDispatch();

  const [banks, setBanks] = useState(() => {
    return JSON.parse(localStorage.getItem('banks')) ?? '';
  });
  console.log(banks);
  const [showModal] = useState(false);

  useEffect(() => {
    localStorage.setItem('banks', JSON.stringify(banks));
  }, [banks]);

  const handlerSubmitUserForm = bank => {
    banks.some(
      bankItem =>
        bankItem.name.toLocaleLowerCase() === bank.name.toLocaleLowerCase()
    )
      ? alert(`${bank.name} is already in Banks`)
      : setBanks(prevBanks => [...prevBanks, bank]);
  };

  const handlerOnEdit = bank => {
    setBanks(prevBanks =>
      prevBanks.filter(bankItem => bankItem.id !== bank.id)
    );
    setBanks(prevBanks => [...prevBanks, bank]);
  };

  const handlerDeleteBank = name => {
    setBanks(prevBanks => prevBanks.filter(bank => bank.name !== name));
  };

  return (
    <div>
      {email && token ? (
        <div>
          <h1>Welcome</h1>

          <button onClick={() => dispatch(removeUser())}>
            Log out from
            {email}
          </button>
        </div>
      ) : (
        <Navigate to="/login" />
      )}
      <Link to={`/calculator`}>
        <FaRegArrowAltCircleLeft /> Mortgage calculator{' '}
      </Link>
      <Link to={`/login`}>
        {' '}
        <FaRegArrowAltCircleLeft />
        To Login{' '}
      </Link>
      <TitleStyled>Banks</TitleStyled>
      <BankForm onSubmit={handlerSubmitUserForm} />
      <BanksList
        banks={banks}
        onDeleteBank={handlerDeleteBank}
        onSubmit={handlerOnEdit}
        onShowModal={showModal}
      />
    </div>
  );
}
