import React from 'react';

const Card = (props) => {

    const {id , image} = props.product

    return (
        <div className='text-center relative hover:cursor-pointer'>
            
            <div className=' w-full h-full hover:bg-black opacity-30 p-4 absolute z-10  transition hover:duration-300'>
              <label className='absolute left-2'>
                   <input type="checkbox" className='accent-black' />
              </label>
            </div>
           

            <img src={image} alt="" className='lg:w-full'/>
        </div>
    );
};

export default Card;