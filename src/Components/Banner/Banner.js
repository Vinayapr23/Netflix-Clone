import React, { useEffect, useState } from 'react'
import './Banner.css'
import axios from '../../axios'
import {API_KEY,imageUrl} from '../../Constants/const'
function Banner() {

   const [movie, setMovie] = useState({})
   
  function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}
  
   useEffect(()=>{

     axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
            setMovie(response.data.results[randomIntFromInterval(0, 19)])
     })

   }, [])
    
    return (

        <div style={{backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path:""})`}} className='banner'>
            <div className="content">
                <h1 className="title">{movie.name|| movie.title}</h1>
                <div className="banner_buttons">
                    <button className="button">Play</button>
                    <button className="button">My list</button>
                </div>
                <div className="description">
                {movie? movie.overview:""}
                </div>
            </div>

        <div className="fade_bottom"></div>
        </div>
      
    )
}

export default Banner