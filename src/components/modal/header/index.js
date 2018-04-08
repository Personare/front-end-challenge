import React from 'react';
import Title from '../../title';


const ModalHeader = ({title}) => (
  <header className="modal-header">
    <Title title={title} />
  </header>
);

export default ModalHeader;