import React,{useEffect,useState} from 'react'
import axios from '../../axios'
import {API_KEY,imageUrl} from '../../Constants/const'

import './RowPost.css'

function RowPost({url,title,isSmall}) {
   const [movies, setmovies] = useState([])
    useEffect(() => {
      
    axios.get(url).then((response)=>{
    
        setmovies(response.data.results)

    })
     
    }, [])
    
    return (
        <div className='row'>
            <h2>{title}</h2>
            <div className="posters">
                {
                    movies.map((obj)=>{

                  return(

                    <div>
                    <img className={isSmall?'smallPoster':'poster'} src={`${imageUrl+obj.backdrop_path}`} alt="post" />
                    <div className="posterTitle">{obj.name ||obj.title}</div>
                   </div>

                  )
                    
                    }
                   
                    )
                }
                
            </div>
        </div>
    )
}

export default RowPost