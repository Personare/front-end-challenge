import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

const Button = ({ onClick, children }) => (
    <button onClick={onClick} className="Button">
        {children}
    </button>
);

Button.propTypes = {
    onClick: PropTypes.func,
    children: PropTypes.string
};

export default Button;
