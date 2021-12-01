import wildfires from '../img/wildfires.svg'
import volcanoes from '../img/volcanoes.svg'
import ice from '../img/ice.svg'
import storms from '../img/storms.svg'


const EventIcon = ({lat, lng, onClick, type, focused}) => {
    return (
        <div 
            className={focused ? 'focused location-marker' : 'location-marker'} 
            onClick={onClick}
        >
            {type === 'wildfires' && <img src={wildfires} alt='wildfire' className='location-icon' />}
            {type === 'volcanoes' && <img src={volcanoes} alt='volcano' className='location-icon' />}
            {type === 'severeStorms' && <img src={storms} alt='storm' className='location-icon' />}
            {type === 'seaLakeIce' && <img src={ice} alt='ice' className='location-icon' />}
        </div>
    )
}

export default EventIcon;