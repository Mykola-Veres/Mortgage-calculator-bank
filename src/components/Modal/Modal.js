import BankEditForm from 'components/BankEditForm';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { OverlayStyle, ModalStyle } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export default function Modal ({bank, onSubmit, onClose}) {

  useEffect(() => {
    window.addEventListener('keydown', handlerKeyDown);
    return () => {window.removeEventListener('keydown', handlerKeyDown)};

    function handlerKeyDown (e) {
      if (e.code === 'Escape') {onClose()};
    };

  }, [onClose])

  const handlerClickOnOverlay = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return createPortal(
    <OverlayStyle onClick={handlerClickOnOverlay}>
      <ModalStyle>
        <BankEditForm bank={bank} onSubmit={onSubmit}/>
        <button onClick={onClose}>X Close</button>
      </ModalStyle>
    </OverlayStyle>,
    modalRoot,
  );
}
