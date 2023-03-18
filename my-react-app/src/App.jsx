import { useState } from 'react'
import React from 'react'
import ReactDom from 'react-dom'
import './App.css'
import { Link } from 'react-router-dom';

// function HomePageButton() {
//   return (
//     <Link to="/">Home</Link>
//   );
// }

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className='mainBanner'>
        <h1>
          Express Car Wash
          <br />
          El Paso, TX
          <br />
          Click here to join our Mailing List!
        </h1>
      </div>
    </div>
  )
}

export default App
