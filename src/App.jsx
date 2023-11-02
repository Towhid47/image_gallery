import './App.css'
import CardsContainer from './Components/CardsContainer/CardsContainer'

function App() {

  return (
    <>
      <section className='w-full lg:w-11/12 lg:mx-auto'>
            <div className='font-semibold text-xl mb-3'>
                  <h2>Gallery</h2>
            </div>
            <hr />

            <CardsContainer></CardsContainer>
      </section>
    </>
  )
}

export default App
