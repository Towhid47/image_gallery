import React from 'react';

const Card = (props) => {

    const {id , image} = props.IMG

    const {handleChange} = props

    


    return (
        <div className='text-center relative hover:cursor-pointer'>
            
            <div className='w-full h-full hover:bg-[#0000008a] p-4 absolute z-10  transition hover:duration-700'>
              <label className='absolute left-2'>
                   <input type="checkbox" value={id} onChange={handleChange}/>
              </label>
            </div>
           

            <img src={image} alt="" className='lg:w-full'/>
        </div>
    );
};

export default Card;