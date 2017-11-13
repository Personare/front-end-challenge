import React from 'react';

const CardPicture = (props) => (
    <div className='CardPicture'>
        <img className='CardPicture__image' src={props.imgUrl} />
    </div>
);

export default CardPicture;
