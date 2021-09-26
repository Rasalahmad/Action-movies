import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import Movie from '../Movie/Movie';

import './Movies.css'

const Movies = () => {
    const [movies, setMovies] = useState([]);
    const [card, setCard] = useState([])
    useEffect( ()=> {
        fetch('./movies.JSON')
        .then(res => res.json())
        .then(data => setMovies(data))
    }, []);
    const handleSubscription = movie => {
        const newCard = [...card, movie];
        setCard(newCard)
    }
    return (
        <div className = 'movies-container container'>
            <div className = 'movie-container'>
                 {
                     movies.map(movie => <Movie
                     key = {movie.key}
                     movie = {movie}
                     handleSubscription = {handleSubscription}
                     ></Movie>)
                 }
            </div> 
            <div>
                <Card card = {card}></Card>
            </div>
        </div>
    );
};

export default Movies;