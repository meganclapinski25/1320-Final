import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Card from '../Card';


//API Key 8d71ca6f81c3534fc992573c6aba6e23
function MovieDetails(){
    const { id } = useParams(); 
    const [movies, setMovie] = useState([]);
    const [userRating, setUserRating] = useState('');
    const [userReview, setUserReview] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const API_KEY = '8d71ca6f81c3534fc992573c6aba6e23';
    const API_URL = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`; 
    
    useEffect(()=>{
        fetch(API_URL)
        .then(res => res.json())
        .then(data => setMovie(data))
        },[API_URL])
        const API_IMG = "https://image.tmdb.org/t/p/w500/";
        const handleRatingChange = (e) => {
            setUserRating(e.target.value);
        };
    
        const handleReviewChange = (e) => {
            setUserReview(e.target.value);
        };

        const handleSubmit = (e) => {
            e.preventDefault();
            
            
            
            setSubmitted(true);
        };

    return(
        <div className="container mt-4">
            <div className="row">
                <div className="col-md-4">
                    <img src={`https://image.tmdb.org/t/p/w500/${movies.poster_path}`} alt={movies.title} className="img-fluid" />
                </div>
                <div className="col-md-8">
                    <h1>{movies.title}</h1>
                    <p><strong>Overview:</strong> {movies.overview}</p>
                    <p><strong>Vote Average:</strong> {movies.vote_average}</p>
                    <p><strong>Vote Count:</strong> {movies.vote_count}</p>
                    {submitted && (
                        <div>
                            <p><strong>Your Rating:</strong> {userRating}</p>
                            <p><strong>Your Review:</strong> {userReview}</p>
                            <button className="btn btn-primary">Edit</button>
                        </div>
                    )}
                    {!submitted && (
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="rating">Your Rating:</label>
                                <input type="number" className="form-control" id="rating" value={userRating} onChange={handleRatingChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="review">Your Review:</label>
                                <textarea className="form-control" id="review" rows="3" value={userReview} onChange={handleReviewChange}></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                    )}
                </div>
            </div>
        </div>
    )
};




export default MovieDetails;