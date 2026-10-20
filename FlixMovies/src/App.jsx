import { useState, useEffect } from 'react'
// import heroImg from './assets/hero.png'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
import Search from './components/Search.jsx'
import './App.css'




const App = () => {

const [searchTerm, setSearchTerm]= useState('');

  return ( 
    <main>
      <div className="pattern">
        <div className = "wrappper"/>
          <header> 
            <img src={"./hero.png"} alt="hero" className="hero" />
            <h1>Find all of your favourite <span className ="text-gradient">Movies</span> tailored for you!
            </h1>
          </header>
          <Search searchTerm =  {searchTerm} setSearchTerm = {setSearchTerm}/> 

        </div>
      {/* </div> */}
    </main>
 
  )
  
 
}

export default App
