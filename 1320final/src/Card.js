import React from "react";
import './Card.css'

function Card(props){

const API_IMG = "https://image.tmdb.org/t/p/w500/";


    return(
    <div className="cardContain">
        <div className="card">
            <div className="poster">
                <img src={API_IMG + props.poster_path}/>
            </div>
            <div className="details">
                <p className="title">{props.title}</p>
                <p className="rate">{props.vote_average}</p>
            </div>
        </div>
    </div>
    )
}
export default Card;