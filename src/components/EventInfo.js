import { Icon } from '@iconify/react';

const EventInfo = ({event, click}) => {
    
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']
    
    const info =  {
        title: event.title,
        type: event.categories[0].title,
        date: new Date(event.geometry[0].date),
        magnitude: event.geometry[0].magnitudeValue,
        unit: event.geometry[0].magnitudeUnit
    }
    
    const displayDate = `${months[info.date.getMonth()]} ${info.date.getDate()}, ${info.date.getFullYear()}`

    return (
        <div className='event-info'>
            <div className='event-info-header'>
                <h2>Event info</h2>
                <Icon onClick={click} icon="akar-icons:cross"/>
            </div>
            <ul>
                <li>
                    <h3>Title</h3> 
                    <span>{info.title}</span>
                </li>
                <li>
                    <h3>Type</h3> 
                    <span>{info.type}</span>
                </li>
                <li>
                    <h3>Last record</h3> 
                    <span>{displayDate}</span>
                </li>
                {info.magnitude && 
                    <li>
                        <h3>Magnitude</h3> 
                        <span>{info.magnitude}{info.unit}</span>
                    </li>
                }
            </ul>
        </div>
    )
}

export default EventInfo