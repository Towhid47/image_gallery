import IMAGES from '../../images.json';
import Card from '../Card/Card';

import { FaImages } from 'react-icons/fa';

const CardsContainer = () => {

    let products = [...IMAGES] ;
    
    


    return (
        <div className='mt-0 lg:mt-4'>

            

             <ul className='grid grid-cols-2 md:grid-cols-5  mx-auto [&>*:first-child]:col-span-2  [&>*:first-child]:row-span-2 gap-1 lg:gap-5 '> 

                   {
                     products.map((product)=> <li className="border-2 border-gray-300 rounded-md  lg:w-full"><Card product = {product}  key={product.id}></Card></li>) 
                   }

                   <li className='border-2 border-gray-400 border-dashed rounded-md flex justify-center items-center'>Add Image &nbsp; <FaImages className='text-2xl'/></li>
             </ul>

        </div>
    );
};

export default CardsContainer;