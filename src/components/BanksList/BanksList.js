import BanksItem from './BanksItem';

const BanksList = ({ banks, onDeleteBank, onSubmit, onShowModal}) => (
  <ol>
    <BanksItem banksItem={banks} onDeleteBank={onDeleteBank} onSubmit={onSubmit} onShowModal={onShowModal} />
  </ol>
);

export default BanksList;
