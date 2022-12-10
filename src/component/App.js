import { useEffect, useState } from "react";
import { useTitleContext } from "../titleContext";
import Card from "./Card";
import "./Card.css"
import Search from "./Search";


function App() {
  
  const [movies,setMovies] = useState([])
  const [title, setTitle] = useState('')
  const {title:mTitle,handleTitle} = useTitleContext()

  const itemsUrl = "https://www.omdbapi.com?apikey=20ed66a7"
  
  const getMovies = async (title) => {
    let result = await fetch(`${itemsUrl}&s=${title}`)
    let items = await result.json();
    console.log(items.Search)
    setMovies(items.Search)
  }

  
  useEffect(()=>{
    getMovies(mTitle)
  },[])

  const inputTitle = (e)=>{
    
    setTitle(e.target.value)
    handleTitle(e.target.value)
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
