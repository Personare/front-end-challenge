import React from 'react';
import ModalHeader from './header';
import ModalContent from './content';
import ModalFooter from './footer';


const Modal = (props) => (
  <dialog className="modal" open>
    <ModalHeader title={props.title} />
    <ModalContent>
      {props.children}
    </ModalContent>
    <ModalFooter />
  </dialog>
);

export default Modal;
