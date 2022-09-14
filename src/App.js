import React from 'react'
import NavBar from './Components/NavBar/NavBar'
import './App.css'
import Banner from './Components/Banner/Banner'
import RowPost from './Components/RowPost/RowPost'
import {original,action,horror} from './urls'




function App() {
  return (
    <div className='App'>

       <NavBar/>
       <Banner/>
       <RowPost url={original} title='Netflix Originals'/>
       <RowPost url={action} title='Action' isSmall={true}/>
       <RowPost url={horror} title='Horror' isSmall={true}/>
    </div>
  )
}

export default App