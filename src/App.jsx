import { Suspense, useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Banner from './homepage/banner/Banner'
import Players from './homepage/Players/Players'




const fecthPlayer = async () => {
 const res = await fetch ('/PlayerData.json')
 return res.json() ;
}

function App() {
 
    const [coin, setCoin] = useState(500000)

const playerPromise = fecthPlayer()
  return (
    <>
   <Navbar coin={coin} ></Navbar>  
   <Banner></Banner>
   <Suspense fallback={<span className="loading loading-bars loading-xl "></span>}>
    <Players playerPromise={playerPromise} setCoin={setCoin} coin={coin} ></Players>
   </Suspense>
    </>
  )
}

export default App
