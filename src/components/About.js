import EventIcon from "./EventIcon"

const About = () => {
    return (
        <section className='about'>
            <h2><EventIcon type='wildfires'/>WildFires</h2>
            <p>Wildfires includes all nature of fire, including forest and plains fires, as well as urban and industrial fire events. Fires may be naturally caused or manmade.</p>
            <h2><EventIcon type='volcanoes'/>Volcanoes</h2>
            <p>Related to both the physical effects of an eruption (rock, ash, lava) and the atmospheric (ash and gas plumes)</p>
            <h2><EventIcon type='severeStorms'/>Severe Storms</h2>
            <p>Related to the atmospheric aspect of storms (hurricanes, cyclones, tornadoes, etc.).</p>
            <h2><EventIcon type='seaLakeIce'/>Sea and Lake Ice</h2>
            <p>Related to all ice that resides on oceans and lakes, including sea and lake ice (permanent and seasonal) and icebergs.</p>
            <span>Powered by <a href='https://eonet.sci.gsfc.nasa.gov/' target='_blank' rel='noreferrer'>NASA EONET API</a></span>
        </section>
    )
}

export default About