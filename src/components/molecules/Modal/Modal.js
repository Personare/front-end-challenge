import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './Modal.scss';

const Modal = ({ isOpen, name, image, close }) => {
    const setScrollLock = value => (document.querySelector('html').style.overflow = value);

    if (!isOpen) {
        setScrollLock('');
        return null;
    }

    setScrollLock('hidden');

    return ReactDOM.createPortal(
        <div className="Modal" onClick={close}>
            <div className="Modal__content" onClick={e => e.stopPropagation()}>
                <button className="Modal__close" onClick={close}>
                    <svg viewBox="0 0 40 40">
                        <path d="M 10,10 L 30,30 M 30,10 L 10,30" />
                    </svg>
                </button>
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
