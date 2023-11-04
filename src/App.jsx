import { useState } from 'react';
import { FaCheck } from 'react-icons/fa';
import './App.css'
import Swal from 'sweetalert2';

import CardsContainer from './Components/CardsContainer/CardsContainer'
import IMAGES from './images.json'

function App() {

  let IMGs = [...IMAGES] ; // Copy Array from JSON File


  // ------------  Image Selection handling ------------------//  

  const [checkedImages , setImages] = useState([])

    function handleChange (event) {
      
     const {value, checked} = event.target;

     if(checked){
       setImages([...checkedImages , parseInt(value)]);
     }
     else{
        setImages([...checkedImages.filter(item => item !== parseInt(value) ) ])
     }   
  }



   // -------------- Image Deletion handling --------------------- //

   const [remainingImages , setRemainingImages] = useState(IMGs);
  
   const handleDelete = () =>{
      
      setRemainingImages( IMGs.filter((item) => !checkedImages.includes(item.id) ) );

      //----- Showing Animation after Delete -------- //
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Delete Success',
        showConfirmButton: false,
        timer: 1700
      })
      // --------------------------------------------//

      setImages([]);
 
   }
    
    IMGs = [...remainingImages];


      //---------------- Drag n Drop & Sort image list ---------------- //

      const handleDragStart = (e, index) => {
        e.dataTransfer.setData("index", index);
      };
    
      const handleDragOver = (e) => {
        e.preventDefault();
      };
    
      const handleDrop = (e, index) => {
        e.preventDefault();
        const sourceIndex = e.dataTransfer.getData("index");
        const newList = [...remainingImages];
        const [removed] = newList.splice(sourceIndex, 1);
        newList.splice(index, 0, removed);
        setRemainingImages(newList);
      };


    
  
      
    




  return (
    <>
      <section className='w-full lg:w-11/12 lg:mx-auto'>

            <div className='font-semibold text-xl mb-3 flex justify-between'>
              {/* --------------Left Side Content -------------------*/}
                 {
                    (checkedImages.length === 0)? <h2>Gallery</h2> : <h2><FaCheck className='inline text-blue-600'/> {checkedImages.length} Files Selected</h2>
                 }

              {/* ------------------Right Side Content---------------------- */}
                  <div>
                      {
                        (checkedImages.length === 0)? <> </> : 
                        (checkedImages.length === 1 )? <p className='text-red-600 hover:cursor-pointer hover:underline '  onClick={handleDelete}>Delete file</p> : <p className='text-red-600 hover:cursor-pointer hover:underline'  onClick={handleDelete}>Delete files</p>
                      }
                  </div>
            </div>
            <hr />

            <CardsContainer IMGs={IMGs}  handleChange={handleChange} handleDragStart={handleDragStart} handleDragOver={handleDragOver} handleDrop={handleDrop}></CardsContainer>
      </section>
    </>
  )
}

export default App
