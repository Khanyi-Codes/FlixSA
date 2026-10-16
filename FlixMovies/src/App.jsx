import { useState, useEffect } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

// Use effect and useState hooks to manage the state of the card component

const App = () => {

  return ( 
    <main>
      <div className="pattern">
        <div className = "wrap">
          <header>
            <h1>Find all of your favourite <span className ="text-gradient">Movies</span> tailored for you!
            </h1>
          </header>
          <p>Search</p>

        </div>
      </div>
    </main>
 
  )
  
 
}

export default App
