import { useEffect, useState } from "react";
import Card from "./Card";
import "./Card.css"
import Search from "./Search";

// be00e222-cf34-485b-a10a-46d023064a81

function App() {
  
  const [movies,setMovies] = useState([])
  const [title, setTitle] = useState('')

  const itemsUrl = "https://www.omdbapi.com?apikey=20ed66a7"
  
  const getMovies = async (title) => {
    let result = await fetch(`${itemsUrl}&s=${title}`)
    let items = await result.json();
    console.log(items.Search)
    setMovies(items.Search)
  }
  const getFeaturedMovies = async () => {
    let result = await Promise.all([
      fetch(`${itemsUrl}&s=batman&page=1`),
      fetch(`${itemsUrl}&s=batman&page=2`),
    ])

     let resultItems = await Promise.all([
      result[0].json(),
      result[1].json()
    ]);

    let items = [...resultItems[0].Search,...resultItems[1].Search]
    console.log(items)
    setMovies(items)
  }
  
  useEffect(()=>{
    getFeaturedMovies()
  },[])

  const inputTitle = (e)=>{
    
    setTitle(e.target.value)
    console.log(title)
    
  }

  const searchTitle = (e)=>{
    e.preventDefault();
    console.log('working')
    getMovies(title)
  }

  return (
    <div className="App">
      <Search  onSubmit={searchTitle} title={title} onChange={inputTitle}/>
      <br></br>
      <section className="cards-wrapper">
      {movies.map(movie => 
        <Card key={movie.imdbID} movie={movie}/>
        )}
      </section>
    </div>
  );
}

export default App;
