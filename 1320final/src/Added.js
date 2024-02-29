import React from 'react';
import Card from './Card';
import Button from 'react-bootstrap/esm/Button';

const Added = ({ addedMovies, onDelete }) => {

    const API_IMG = "https://image.tmdb.org/t/p/w500/";

    return (
        <div>
            <h2>Added Movies</h2>
            <div className='added-movies'>
                {addedMovies.map((movie, index) => (
                    <div key={index}>
                        <div className="card">
                        <div className="poster">
                            <img src={API_IMG + movie.poster_path}/>
                        </div>
                        <div className="details">
                            <p className="title">{movie.title}</p>
                            <p className="rate">{movie.vote_average}</p>
                        </div>
                        
                        <div className="descript">
                            <h4 className="description">Description</h4>
                            <p>{movie.overview}</p>
                        </div>
                        
                    </div>
                        <Button onClick={() => onDelete(movie)}>Delete</Button>{' '}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Added;
