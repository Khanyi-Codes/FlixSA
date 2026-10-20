import { useState, useEffect } from 'react'
// import heroImg from './assets/hero.png'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
import '../App.css'

// Use effect and useState hooks to manage the state of the card component

const Search= (searchTerm, setSearchTerm) => {
    // Do no mutate props
return(
    <div className="search">{searchTerm}
    <div>
    <img src = "./white-search-icon.png" alt= "search"/>
    <input
    type = "text"
    placeholder='Search through thousands of movies'
    value={searchTerm}
    onChange={(event)=>setSearchTerm(event.target.value)}/>
    </div></div>
)
 
}

export default Search
