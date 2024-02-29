import React from "react";
import Card from "./Card";


function Added({ addedMovies }) {
    return (
        <div>
            <h2>Added Movies</h2>
            <ul>
                {addedMovies.map((movie, index) => (
                    <li key={index}>{movie.title}</li>
                ))}
            </ul>
        </div>
    );
}
export default Added;