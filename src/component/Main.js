import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Main.css"


const Main = () => {

  let params = useParams()

  useEffect(()=>{
    fetchMovie()
    
  },[])

  const[movie,setMovie] = useState({})
  const [genre,setGenre] = useState([])
  const [actors,setActors] = useState([])

  const movieUrl = "https://www.omdbapi.com?apikey=20ed66a7"

  const fetchMovie = async ()=> {

    const result = await fetch(`${movieUrl}&i=${params.id}`)
    const movieDetail = await result.json()
    setMovie(movieDetail)
    setGenre(movieDetail.Genre.split(', '))
    setActors(movieDetail.Actors.split(', '))
    console.log(movieDetail)
  }


  
    return (
      <div className="main">
        <div className="description">
        <img src={movie.Poster} alt={movie.Title}/>
      
          <h1>{movie.Title}</h1>
          <ul className="genre">
            <li>{genre[0]}</li>
            <li>{genre[1]}</li>
            <li>{genre[2]}</li>
            
          </ul>
          <hr></hr>
          <p className="about">
            {movie.Plot}
          </p>
      
        <div className="ratings">
        <h3>Ratings:</h3>
          <div className="rating-bar-box">
            <div className="rating-bar"></div>
          </div>
            <div className="percentage">81%</div>
        </div>
          <ul className="additionalinfo">
            <li className="runtime"><p className="highlight">{movie.Runtime}</p><p className="label">Total Time</p> </li>
            <li className="rating">
              <p className="highlight">{movie.Rated}</p><p className="label">Rated</p> </li>
          </ul>

      
          <hr></hr>
          <div className="director">
            <h2>Directed By: </h2>
            <div className="user">
              <p className="name">{movie.Director}</p>
            </div>
          </div>
      
          <div className="cast double">
            <h2>Cast: </h2>
            {
              actors.map(actor => 
                  <div className="user">
                  <p className="name">{actor}</p>
                  </div>
              )
            }
          </div>
      
      </div>
      
    </div>
    );
  }
  
  export default Main;