import { useGlobalContext } from "../context"

const Settings = () => {

    const {darkMode, setDarkMode} = useGlobalContext()

    return (
        <section className='settings mob'>
            <h2>Settings</h2>
            <div className='filter-element'>
                <input type='checkbox' id='darkMode' checked={darkMode} onChange={ () => setDarkMode(!darkMode)}/>
                <label htmlFor='darkMode'>Dark Mode</label>
            </div>
        </section>
    )
}

export default Settings