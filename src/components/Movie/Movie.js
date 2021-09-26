import React from 'react';
import './Movie.css'

const Movie = (props) => {
    const {thamnail, name, details, description, director, rating, subscription} = props.movie
    return (
        <div className = 'movie-body'>
            <img src={thamnail} alt="" />
            <br /> <br />
            <h6 className = 'text-primary'>{name}</h6>
            <p>{details}</p>
            <p>Director: {director}</p>
            <p>Rating {rating}</p>
            <p>Subscription Charge: ${subscription}</p>
            <p className = 'socal-media-icon'><i className="fab fa-facebook-square"></i> <i className="fab fa-instagram-square"></i></p>
            <button onClick = { () => props.handleSubscription(props.movie)} className = 'btn btn-danger w-75'>Subscribe</button>
        </div>
    );
};

export default Movie;