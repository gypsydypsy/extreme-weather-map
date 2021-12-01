import { useGlobalContext } from "../context"
import EventIcon from "./EventIcon";

const EventList = () => {

    const {matchEvents, setCurrentFocus, setCurrentEvent} = useGlobalContext()

    return ( 
        <ul className="event-list">
            {matchEvents.map(ev => {
                return (
                    <li 
                        onMouseEnter={() => {setCurrentFocus(ev.id)}} 
                        onMouseLeave={() => {setCurrentFocus(null)}}
                        onClick={() => {
                            setCurrentEvent(ev)
                        }} 
                        key={ev.id}
                    >
                        <EventIcon type={ev.categories[0].id} /> 
                        <span>{ev.title}</span>
                    </li>
                )       
            })}
        </ul>
    )
}

export default EventList