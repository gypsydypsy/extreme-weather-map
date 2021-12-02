import './App.css'
import Map from './components/Map'
import { useGlobalContext } from './context'
import Aside from './components/Aside'
import { useEffect } from 'react'

function App() {

  const { darkMode } = useGlobalContext()

   //Corrects 100vh problems on mobile
   useEffect ( () => {
    const appHeight = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--fullHeight', `${vh}px`);
    }
    window.addEventListener('resize', appHeight)
    appHeight()
  }, [])

  return (
    <div className={darkMode ?'container dark' : 'container'}>
      <Aside />
      <Map/>
    </div>
  )
}

export default App;


