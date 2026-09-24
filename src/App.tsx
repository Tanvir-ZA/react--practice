
import Nav from './components/nav'
import  './index.css'
import Banner  from './components/Banner'
import Players from './components/players/Players'
import { Suspense } from 'react'
import type { Iplayer } from './types/playerType'



const playersFetch = async (): Promise<Iplayer[]> => {
  const res = await fetch("/public/data.json")
  const data = await res.json()
  return data;
}

function App() {

  const playersPromise = playersFetch();
  

  return (
    <>
      <Nav />
      <Banner />
      <Suspense fallback={<div>Loading...</div>}>
        <Players playersPromise={playersPromise} />

      </Suspense>
      


      
    </>
  )
}

export default App
