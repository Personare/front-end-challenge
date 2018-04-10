import React from 'react';
import PropTypes from 'prop-types';

import ModalContent from './content';
import ModalFooter from './footer';
import './index.css';


const Modal = props => (
  <dialog className="modal" open>
    <ModalContent>
      {props.children}
    </ModalContent>
    <ModalFooter />
  </dialog>
);

Modal.prototype.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Modal;
