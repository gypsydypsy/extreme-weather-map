import '../styles/modeswitcher.css'
import { Icon } from '@iconify/react';
import { useGlobalContext } from '../context';

const ModeSwitcher = () => {

    const {darkMode, setDarkMode} = useGlobalContext()

    const updateMode = () => {
        setDarkMode(!darkMode)
    }

    return (
        <div className="switch">
            <input onChange={updateMode} type="checkbox"/>
            <span className="slider"/>
            <Icon icon="bx:bxs-moon"/>
            <Icon icon="bx:bxs-sun" />
        </div>
    )
}

export default ModeSwitcher