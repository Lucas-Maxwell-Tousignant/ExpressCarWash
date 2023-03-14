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
      <div>

      </div>

      <h1>Express Car Wash</h1>
      <h2>El Paso, TX</h2>
      <h3>Click here to join our Mailing List!</h3>
      {/* <h4 className='washPicture'> <img src="https://lh3.googleusercontent.com/p/AF1QipNj1XODgi0LcbIPBikzQOFLHzGYzOm7O2-_AmxE=s680-w680-h510" alt="imgnotdisplayhing" /></h4> */}


    </div>
  )
}

export default App
