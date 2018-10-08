import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './Modal.scss';

const Modal = ({ isOpen, name, image }) => {
    if (!isOpen) {
        return null;
    }

    return ReactDOM.createPortal(
        <div className="Modal">
            <div className="modal-1" onClick={e => e.stopPropagation()}>
                <img src={image} alt={name} />
                <h1>{name}</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mauris felis, pulvinar cursus
                    pulvinar at, pretium vitae sem. Fusce dolor elit, bibendum sed mollis lobortis, ornare sit amet
                    libero. Proin congue, urna et semper pharetra, ex diam auctor metus, ac malesuada lectus sapien non
                    tortor. Maecenas metus augue, auctor at varius vel, facilisis non mi. Sed risus mi, convallis a
                    lobortis ac, cursus et tortor. Aenean in tempus nisl, a viverra turpis.
                </p>
            </div>
        </div>,
        document.body
    );
};

Modal.propTypes = {
    name: PropTypes.string,
    image: PropTypes.string
};

export default Modal;
