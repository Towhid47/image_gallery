import React from 'react';

const Card = (props) => {

    const {id , image} = props.IMAGE

    return (
        <div className='text-center'>
            <img src={image} alt="" className='lg:w-full'/>
        </div>
    );
};

export default Card;