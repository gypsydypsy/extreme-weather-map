import { useGlobalContext } from '../context'
import DoubleSlider from './DoubleSlider'
import { Icon } from '@iconify/react'
const Filters = () => {

    const {setEventTypes, eventTypes, setMinDate, setMaxDate} = useGlobalContext()

    const updateEventTypes = (e) => {
        
        if(eventTypes.includes(e.target.value)){
            setEventTypes(eventTypes.filter(el => el !== e.target.value))
        }
        else {
            setEventTypes([...eventTypes, e.target.value])
        }
    }

    const resetFilters = () => {
        setEventTypes(['wildfires', 'volcanoes', 'severeStorms', 'seaLakeIce'])
        setMinDate(2001)
        setMaxDate(new Date().getFullYear())
    }

    return ( 
        <section className='filters'>                
            <h2>Filter by type</h2>
            <div className='filter-element'>
                <input 
                    type="checkbox" 
                    id="wildfires" 
                    name="wildfires" 
                    value='wildfires'        
                    checked={eventTypes.includes('wildfires') ? true : false} 
                    onChange={updateEventTypes}
                />
                <label htmlFor='wildfires'>Wildfires</label>
            </div>
            <div className='filter-element'>
                <input 
                    type="checkbox" 
                    id="volcanoes" 
                    name="volcanoes" 
                    value='volcanoes' 
                    checked={eventTypes.includes('volcanoes') ? true : false} 
                    onChange={updateEventTypes}
                />
                <label htmlFor='volcanos'>Volcanoes</label>
            </div>
            <div className='filter-element'>
                <input 
                    type="checkbox" 
                    id="severeStorms" 
                    name="severeStorms" 
                    value='severeStorms'
                    checked={eventTypes.includes('severeStorms') ? true : false} 
                    onChange={updateEventTypes}
                />
                <label htmlFor='severeStorms'>Severe storms</label>
            </div>
            <div className='filter-element'>
                <input 
                    type="checkbox" 
                    id="seaLakeIce" 
                    name="seaLakeIce" 
                    value='seaLakeIce'
                    checked={eventTypes.includes('seaLakeIce') ? true : false} 
                    onChange={updateEventTypes}
                />
                <label htmlFor='seaLakeIce'>Sea and Lake Ice</label>
            </div>
            <h2>Filter by date</h2>
            <DoubleSlider/>
            <button className='button' onClick={resetFilters}>
                <Icon icon="grommet-icons:power-reset"/>
                Reset filters
            </button>
        </section>
    )
}

export default Filters