import { BanksListBtn, BanksListItem } from './BanksList.styled';
import BankCard from 'components/BankCard';
import { useState } from 'react';
import Modal from "components/Modal";

const BanksItem = ({ banksItem, onDeleteBank, onSubmit}) => {
  const [toggle, setToggle] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [banks, setBank] = useState("")

  const handlerClickDetails = () => {
    setToggle(prevToggle => !prevToggle)
  };

  const handlerClickEdit = (bank) => {
    setBank(bank)
    setShowModal(prevModal => !prevModal);
  }

  return (banksItem.map(bank => (
    <BanksListItem key={bank.id}>
      {bank.name}: {bank.rate}%
      <BanksListBtn onClick={() => onDeleteBank(bank.name)}>
        Delete
      </BanksListBtn>
      <BanksListBtn onClick={handlerClickDetails}>Further details</BanksListBtn>
      <BanksListBtn onClick={() => handlerClickEdit(bank)}>Edit</BanksListBtn>
      {toggle && <BankCard rate={bank.rate} loan={bank.loan} payment={bank.payment} term={bank.term}
      ></BankCard>}

      {showModal && (
            <Modal onSubmit={onSubmit}
              bank={banks}
              onClose={handlerClickEdit}
            />
          )}
    </BanksListItem>
  )))}

export default BanksItem;
