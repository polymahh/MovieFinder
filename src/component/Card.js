import "./Card.css"
import {Link} from "react-router-dom"

function Card(props) {
  return (
    
      
  <div className="card-grid-space">
    <Link to={`/moviefinder/${props.movie.imdbID}`}>
    <div className="card"  style={{backgroundImage:`url(${props.movie.Poster})`}}>
      <div className="titleBox">
        <h3>{props.movie.Title}</h3>
        <div className="date">{props.movie.Year}</div>
        <div className="tags">
          <div className="tag">{props.movie.Type}</div>
        </div>
      </div>
    </div>
    </Link>
  </div>
  );
}

export default Card;