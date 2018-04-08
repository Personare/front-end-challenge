import React from 'react';
import Card from '../../deck/card';

const ModalContent = (props) => (
  <section className="modal-content">
    {props.children}
  </section>
);

export default ModalContent;
