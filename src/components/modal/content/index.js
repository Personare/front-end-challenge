import React from 'react';
import Card from '../../deck/card';
import './index.css';

const ModalContent = (props) => (
  <section className="modal-content">
    {props.children}
  </section>
);

export default ModalContent;
