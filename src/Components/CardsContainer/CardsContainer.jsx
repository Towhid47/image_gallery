import IMAGES from '../../images.json';
import Card from '../Card/Card';

const CardsContainer = () => {
    return (
        <div className='mt-0 lg:mt-4'>

             <ul className='grid grid-cols-2 md:grid-cols-5  mx-auto [&>*:first-child]:col-span-2   [&>*:first-child]:row-span-2 gap-1 lg:gap-5 '> 

                   {
                     IMAGES.map((IMAGE)=> <li className="border-2 border-gray-400 rounded-md  lg:w-full"><Card IMAGE = {IMAGE}  key={IMAGE.id}></Card></li>) 
                   }

                   <li className='border-2 border-gray-400 border-dashed rounded-md'>Add Image</li>
             </ul>

        </div>
    );
};

export default CardsContainer;