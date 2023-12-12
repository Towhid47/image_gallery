import Card from "../Card/Card";
import {motion} from 'framer-motion'

import '../../App.css';



const CardsContainer = (props) => {
  let { IMGs, handleChange, handleDragStart, handleDragEnd, handleDragOver } =
    props;

  return (
    <div className="mt-0 lg:mt-4 pb-7">
      <motion.ul className="drag grid grid-cols-2 md:grid-cols-5  mx-auto [&>*:first-child]:col-span-2  [&>*:first-child]:row-span-2 gap-1 lg:gap-5 ">
        {IMGs.map((IMG, index) => (
          <motion.li
            draggable
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            onDragStart={(e) => handleDragStart(e, index)}
            onDragOver={() => handleDragOver(index)}
            onDragEnd={(e) => handleDragEnd(e, index)}
            key={index}
            className="transition duration-700 border-2 border-gray-300 rounded-md  lg:w-full"
          >
            <Card IMG={IMG} handleChange={handleChange}></Card>
          </motion.li>
        ))}

        
      </motion.ul>
    </div>
  );
};

export default CardsContainer;
