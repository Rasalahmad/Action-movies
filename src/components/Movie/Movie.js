import React from 'react';
import Rating from 'react-rating';
import './Movie.css'

const Movie = (props) => {
    const {thamnail, name, details, director, rating, subscription} = props.movie;
    return (
        <div className = 'movie-body'>
            <img src={thamnail} alt="" />
            <br /> <br />
            <h6 className = 'text-primary'>{name}</h6>
            <p>{details}</p>
            <p>Director: {director}</p>
            <Rating
            initialRating={rating}
            emptySymbol="far fa-star icon-color"
            fullSymbol="fas fa-star icon-color"
            readonly/>
            <p>Subscription Charge: ${subscription}</p>
            <p className = 'socal-media-icon'><i className="fab fa-facebook-square"></i> <i className="fab fa-instagram-square"></i></p>
            <button onClick = { () => props.handleSubscription(props.movie)} className = 'btn btn-danger w-50'>Subscribe</button>
        </div>
    );
};

export default Movie;