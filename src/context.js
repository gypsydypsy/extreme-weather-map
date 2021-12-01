import React, { useContext, useState, useEffect } from "react";

const Context = React.createContext();

const ContextProvider = ({children}) => {

    const [eventData, setEventData] = useState([])
    const [matchEvents, setMatchEvents] = useState([])
    const [loading, setLoading] = useState(false)
    const [darkMode, setDarkMode] = useState(false)
    const [currentEvent, setCurrentEvent] = useState(null)
    const [currentFocus, setCurrentFocus] = useState(null)

    /* Filter states */
    const [eventTypes, setEventTypes] = useState(['wildfires', 'volcanoes', 'severeStorms', 'seaLakeIce'])
    const [searchTerm, setSearchTerm] = useState('')
    const [minDate, setMinDate] = useState(2001);
    const [maxDate, setMaxDate] = useState(new Date().getFullYear());


    //Fetch all events
    useEffect (() => {
      const fetchEvents = async () => {
        setLoading(true)
        try {
          const res = await fetch('https://eonet.gsfc.nasa.gov/api/v3/events')
          const data = await res.json();
          let { events } = data
          setEventData(events);
          setLoading(false)
        }
        catch (error){
          console.log(error)
          setLoading(false)
        }
      } 
      fetchEvents();
    }, [])
    
    //FilterEvents
    useEffect (() => {
        let events = eventData;

        if (eventTypes.length < 4){
          events = events.filter(evt => eventTypes.indexOf(evt.categories[0].id) !== -1)
        }

        if (searchTerm.length > 0){
          events = events.filter(evt => evt.title.toLowerCase().indexOf(searchTerm) !== -1)
        }

        if(minDate > 2000){
          events = events.filter(evt => new Date(evt.geometry[0].date).getFullYear() >= minDate )
        }

        if(maxDate < new Date().getFullYear()){
          events = events.filter(evt => new Date(evt.geometry[0].date).getFullYear() <= maxDate )
        }

        setMatchEvents(events)
        
    }, [eventData, eventTypes, searchTerm, minDate, maxDate])

    return (
        <Context.Provider value={{
            matchEvents,
            loading,
            eventTypes, setEventTypes, 
            searchTerm, setSearchTerm,
            minDate, setMinDate,
            maxDate, setMaxDate, 
            darkMode, setDarkMode,
            currentEvent, setCurrentEvent,
            currentFocus, setCurrentFocus
        }}>
            {children}
        </Context.Provider>
    )
}

const useGlobalContext = () => {
    return useContext(Context)
}

export { Context, ContextProvider, useGlobalContext }