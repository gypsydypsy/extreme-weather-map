import './App.css'
import Map from './components/Map'
import { useGlobalContext } from './context'
import Aside from './components/Aside'

function App() {

  const { darkMode } = useGlobalContext()

  return (
    <div className={darkMode ?'container dark' : 'container'}>
      <Aside />
      <Map/>
    </div>
  )
}

export default App;


