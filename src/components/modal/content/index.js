import React from 'react';
import PropTypes from 'prop-types';

import './index.css';

const ModalContent = props => (
  <section className="modal-content">
    {props.children}
  </section>
);

ModalContent.prototype.propTypes = {
  children: PropTypes.element.isRequired,
};

export default ModalContent;
