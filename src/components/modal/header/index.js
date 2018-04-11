import React from 'react';
import PropTypes from 'prop-types';

import Title from '../../title';
import './index.css';


const ModalHeader = ({ title }) => (
  <header className="modal-header">
    <Title title={title} />
  </header>
);

ModalHeader.prototype.propTypes = {
  title: PropTypes.string.isRequired,
};

export default ModalHeader;
