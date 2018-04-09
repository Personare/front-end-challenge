import React from 'react';
import ModalHeader from './header';
import ModalContent from './content';
import ModalFooter from './footer';
import './index.css';


const Modal = (props) => (
  <dialog className="modal" open>
    <ModalContent>
      {props.children}
    </ModalContent>
    <ModalFooter />
  </dialog>
);

export default Modal;
