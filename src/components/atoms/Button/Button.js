import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

const Button = ({ isClosed, onClick, children }) => {
    return (
        <button onClick={() => (!isClosed ? onClick() : '')} className={!isClosed ? 'Button' : 'Button --disabled'}>
            {children}
        </button>
    );
};

Button.propTypes = {
    onClick: PropTypes.func,
    children: PropTypes.string,
    isClosed: PropTypes.bool
};

export default Button;
