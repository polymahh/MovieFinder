import "./Card.css"

function Card(props) {
  return (
    
      
  <div className="card-grid-space">
    <a className="card" href="https://codetheweb.blog/2017/10/06/html-syntax/" style={{backgroundImage:`url(${props.movie.Poster})`}}>
      <div className="titleBox">
        <h3>{props.movie.Title}</h3>
        <div className="date">{props.movie.Year}</div>
        <div className="tags">
          <div className="tag">{props.movie.Type}</div>
        </div>
      </div>
    </a>
  </div>
  );
}

export default Card;