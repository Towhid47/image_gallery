import Card from '../Card/Card';

import { FaImages } from 'react-icons/fa';
import { useRef, useState } from 'react';

  const CardsContainer = (props) =>{

    let { IMGs , handleChange} = props ;


    return (
        <div className='mt-0 lg:mt-4'>            

             <ul className='grid grid-cols-2 md:grid-cols-5  mx-auto [&>*:first-child]:col-span-2  [&>*:first-child]:row-span-2 gap-1 lg:gap-5 '> 

                   {
                     IMGs.map((IMG , index)=> <li draggable
                                          key={index} className="transition duration-500 border-2 border-gray-300 rounded-md  lg:w-full"><Card IMG = {IMG} handleChange={handleChange}></Card></li>) 
                   }

                   <li className='border-2 border-gray-400 border-dashed rounded-md flex justify-center items-center flex-col-reverse'><p>Add Image</p> &nbsp; <p><FaImages className='text-2xl'/></p></li>
             </ul>

        </div>
    );
};

export default CardsContainer;