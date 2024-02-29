import logo from './logo.svg';
import './App.css';
import Header from './Header';
import { useEffect, useState } from 'react';
import Card from './Card';
import Button from 'react-bootstrap/Button';
import Added from './Added';
import Footer from './Footer';




function App() {
    const API_URL = "https://api.themoviedb.org/3/movie/popular?api_key=8d71ca6f81c3534fc992573c6aba6e23&language=en-US";
    const [movies, setMovies] = useState([])
    const API_SEARCH ="https://api.themoviedb.org/3/search/movie?api_key=8d71ca6f81c3534fc992573c6aba6e23&query=";
    const [term, setTerm] = useState('')
    const [addedMovies, setAddedMovies] = useState([]);
    const handleAddMovie = (movie) => {
        setAddedMovies([...addedMovies, movie]);
    };
    const handleDeleteMovie = (movieToDelete) => {
        const updatedMovies = addedMovies.filter(movie => movie.id !== movieToDelete.id);
        setAddedMovies(updatedMovies);
    };
    

    useEffect(()=>{
    fetch(API_URL)
    .then(res => res.json())
    .then(data => setMovies(data.results))
    },[])


    console.log(movies);

    
    const handleSearch =(e)=>{
        e.preventDefault()

        fetch(API_SEARCH + term)
        .then(res => res.json())
        .then(data => {setMovies(data.results)})
    }

    
  return (
    <div>
        <Header />
        <div className="search">
            <form onSubmit={handleSearch}>
            <input  onChange={(e) => setTerm(e.target.value)}>
            </input>
            <button>Search</button>
            </form>
        </div>
        
        <h1>Top Movie Recommendations</h1>
        <div className='movies'>
            {movies.map((movie)=>(
                <Card {...movie} onAdd={() => handleAddMovie(movie)}/>
            ))}
            
        </div>
        <div>
            
            <Added addedMovies={addedMovies} onDelete={handleDeleteMovie}/>
            

        </div>
        <Footer />
    </div>
        
    

  );
}

export default App;