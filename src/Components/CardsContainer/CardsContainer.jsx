import IMAGES from '../../images.json';
import Card from '../Card/Card';

const CardsContainer = () => {
    return (
        <div className='mt-0 lg:mt-4'>

             <ul className='border border-red-700 h-screen md:grid lg:grid-cols-5 md:grid-cols-2 [&>*:first-child]:col-span-2  [&>*:first-child]:row-span-2 gap-5'> 
                   {/* <li className='bg-red-400'>1</li>
                   <li className='bg-blue-600'>2</li>
                   <li className='bg-green-600'>3</li>
                   <li className='bg-pink-700'>4</li>
                   <li className='bg-cyan-600'>5</li>
                   <li className='bg-amber-500'>6</li>
                   <li className='bg-slate-400'>7</li>
                   <li className='bg-orange-800'>8</li>
                   <li className='bg-lime-400'>9</li>
                   <li className='bg-emerald-500'>10</li>
                   <li className='bg-violet-500'>11</li>
                    */}


                   {
                      IMAGES && IMAGES.map((IMAGE)=> <li className="bg-gray-500 rounded-md"><Card IMAGE = {IMAGE}  key={IMAGE.id}></Card></li>) 
                   }

                   <li className='bg-gray-500 rounded-md'>Add Image</li>
             </ul>

        </div>
    );
};

export default CardsContainer;