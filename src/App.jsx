

import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './components/CoffeeCard'
function App() {
  const coffees = useLoaderData()
 
  return (
    <div className='m-24'>
      <h2 id='font-main' className='text-4xl font-normal text-[#374151] text-center mb-10 '> Hot Coffee : {coffees.length}</h2>
      <div className='grid md:grid-cols-2 gap-6'>
        {
          coffees.map(coffee => <CoffeeCard key={coffee._id} coffee={coffee}></CoffeeCard>)
        }
     </div>

    </div>
  )
}

export default App
