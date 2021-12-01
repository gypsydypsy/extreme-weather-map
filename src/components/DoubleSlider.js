import '../styles/dualslider.css'
import { useGlobalContext } from "../context"
import { useEffect } from "react"

const DoubleSlider = () => {

    const { minDate, setMinDate, maxDate, setMaxDate } = useGlobalContext()
    const gap = 1;
    const minRange = 2001
    const maxRange = new Date().getFullYear()

    const updateMinDate = (e) => {
        setMinDate(e.target.value)
    }

    const updateMaxDate = (e) => {
        setMaxDate(e.target.value)
    }

    useEffect( () => {
        if ((parseInt(maxDate) - parseInt(minDate)) < gap && maxDate < maxRange && minDate > minRange ){
            setMinDate(parseInt(maxDate) - gap)
            setMaxDate(parseInt(minDate) + gap) 
        }
    }, [minDate, maxDate, setMaxDate, setMinDate, maxRange])

    return (
        <div className='dual-slider'>  
            <div className='dual-slider-label'>
                <span>{minDate}</span> 
                <span>{maxDate} </span>
            </div>
            <input onChange={updateMinDate} value={minDate} className='min-slider' min={minRange} max={maxRange} step='1' type='range'/>
            <input onChange={updateMaxDate} value={maxDate}  className='max-slider' min={minRange} max={maxRange} step='1' type='range'/>
            <div className="slider">
                <div className='track'/>
                <div 
                    className='range'
                    style= {{
                        left: `${((minDate - minRange) * 100)/(maxRange-minRange)}%`, 
                        right:`${100-((maxDate - minRange) * 100)/(maxRange-minRange)}%` 
                    }}/>
                <div 
                    className='thumb left' 
                    style={{
                        left: `${((minDate - minRange) * 100)/(maxRange-minRange)}%`,
                    }}
                />
                <div 
                    className='thumb right'
                    style={{
                        right: `calc(100% - ${((maxDate - minRange) * 100)/(maxRange-minRange)}%)`
                    }}
                />
            </div>  
        </div>
    )
}

export default DoubleSlider