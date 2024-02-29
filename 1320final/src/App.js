
import './App.css';
import Header from './Header';
import Recommmend from './Recommend';
import List from './components/List';
import Search from './Search';
import { useState } from 'react';

function App (){
  const [movies, setMovies] = useState([]);



  const getMovieRequest =  async () =>{
    const url = "http://www.omdbapi.com/?s = star wars&apikey=a96e3cb2"

    const response = await fetch(url)
    const responseJson = await response.json();

    console.log(responseJson);
  }
  return(
      <div className='App'>
              <Header />
              <Recommmend />
              <Search movies = {movies} />
              <List />
      </div>
  )
}



export default App;
