import { useRef } from "react"
import { useGlobalContext } from "../context"

const Search = () => {

    const { searchTerm, setSearchTerm, matchEvents } = useGlobalContext()
    const searchRef = useRef()

    const searchEvents = () => {
        setSearchTerm(searchRef.current.value.toLowerCase())
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <form onSubmit={handleSubmit}>
            <input ref={searchRef} onChange={searchEvents} type='search' placeholder='Portugal, Indonesia...' value={searchTerm}/>
            <p>{matchEvents.length} results</p>
        </form>
    )
}

export default Search