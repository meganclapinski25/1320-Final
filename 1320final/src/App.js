import logo from './logo.svg';
import './App.css';
import Header from './Header';
import { useEffect, useState } from 'react';
import Card from './Card';
import Button from 'react-bootstrap/Button';
import Added from './Added';
import Footer from './Footer';

import ActionMovies from './ActionMovies';



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

    const [Amovies, AsetMovies] = useState([]);
    const [Cmovies, CsetMovies] = useState([]);
    const [Dmovies, DsetMovies] = useState([]);
   

  useEffect(() => {
    const fetchActionMovies = async () => {
        const response = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=8d71ca6f81c3534fc992573c6aba6e23&language=en-US&sort_by=popularity.desc&with_genres=28&page=1&include_adult=false');
        const data = await response.json();
        AsetMovies(data.results);
    };

    fetchActionMovies();
}, []);

useEffect(() => {
    const fetchComidies = async () => {
        const response = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=8d71ca6f81c3534fc992573c6aba6e23&language=en-US&sort_by=popularity.desc&with_genres=35&page=1&include_adult=false');
        const data = await response.json();
        CsetMovies(data.results);
    };

    fetchComidies();
}, []);
  
    
    
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
        
        <div className='row'>
            {movies.map((movie)=>(
                <Card {...movie} onAdd={() => handleAddMovie(movie)}/>
            ))}
            
        </div>
        <h2>Action Movies</h2>
        <div className='row'>
            {Amovies.map((movie) =>(
                <Card {...movie}onAdd={() => handleAddMovie(movie)}/>
                
            ))}
        </div>
        <h2>Comidies</h2>
        <div className='row'>
            {Cmovies.map((movie) =>(
                <Card {...movie}onAdd={() => handleAddMovie(movie)}/>
                
            ))}
        </div>
        <h2>Dramas</h2>
        <div>
            
            <Added addedMovies={addedMovies} onDelete={handleDeleteMovie}/>

        </div>
        
        <Footer />
    </div>
        
    
/*<div className="row flex-nowrap overflow-auto">
        {Amovies.map((movie) => (
          <div key={movie.id} className="col-4"></div>
          </div>
          */
  );
}

export default App;