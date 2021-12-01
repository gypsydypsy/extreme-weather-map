import { Icon } from '@iconify/react';
import { useState, useEffect } from 'react'
import { useGlobalContext } from '../context';
import Filters from './Filters';
import Search from './Search';
import ModeSwitcher from './ModeSwitcher';
import EventList from './EventList'
import FilterReminder from './FilterReminder';
import About from './About';
import Settings from './Settings'

const Aside = () => {

    const [isMobileDevice, setIsMobileDevice] = useState(null)
    const [isOpened, setIsOpened] = useState(null)
    const [contentDisplay, setContentDisplay] = useState(null)

    const { searchTerm, minDate, maxDate, eventTypes, setCurrentEvent}= useGlobalContext()

    const showContent = (e) => {
        setIsOpened(true)
        setContentDisplay(e.currentTarget.dataset.content)
        isMobileDevice && setCurrentEvent(null)
    }

    const hideContent = () => {
        setIsOpened(false); 
    }

    useEffect(() => {
        const handleResize = () => {
            const width = window.document.body.clientWidth
            setIsMobileDevice(width > 576 ? false : true)   
        }
        window.addEventListener('resize', handleResize)
        handleResize()
    }, [])

    return (
       <>
            <aside className="side-menu">
                <ul>
                    <li className={(isOpened && contentDisplay === "search") ? 'active' : undefined}>
                        <Icon onClick={showContent} data-content='search' icon="akar-icons:search" />
                        {searchTerm.length > 0 && <FilterReminder/>}
                    </li>
                    <li className={(isOpened && contentDisplay === "filters") ? 'active' : undefined}> 
                        <Icon onClick={showContent} data-content='filters' icon="bi:filter" />
                        {(minDate > 2001 || maxDate < new Date().getFullYear() || eventTypes.length < 4 ) && <FilterReminder/>}
                    </li>
                    <li className={(isOpened && contentDisplay === "about") ? 'active' : undefined}> 
                        <Icon onClick={showContent} data-content='about' icon="ant-design:question-outlined" />
                    </li>
                    <li className={(isOpened && contentDisplay === "settings") ? 'active mob' : 'mob'}> 
                        <Icon onClick={showContent} data-content='settings' icon="ci:settings-filled" />
                    </li>
                </ul>
                <ModeSwitcher/>
            </aside>
            <section 
                className={isOpened ? 'side-content slide-in' : isOpened !== null ? 'side-content slide-out' : 'side-content' }
                style={{
                    left: !isMobileDevice ? !isOpened ? '-400px' : '48px' : '0',
                    bottom: isMobileDevice ? !isOpened ? 'calc(-65vh - 70px)' : '-10px' : '0'

                }}>
                <div className='side-content-header'>
                    <Icon onClick={hideContent} icon="akar-icons:cross"/>
                </div>
                {contentDisplay === 'search' && 
                    <section className='search'>
                        <Search/> 
                        <EventList/>
                    </section>
                }
                {contentDisplay === 'filters' && 
                    <Filters/>
                }
                {contentDisplay === 'about' &&
                    <About />
                }
                {contentDisplay === 'settings' &&
                    <Settings />
                }
            </section>
       </>
    )
}

export default Aside;