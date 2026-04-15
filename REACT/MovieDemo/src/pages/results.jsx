import React, {useEffect, useState} from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Col, Container, Row} from "react-bootstrap";
import MovieCard from "../components/moviecard.jsx";

function Results() {

    const [movies, setMovies] = useState([])
    const [searchMovie, setSearchMovie] = useState("")

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_TOKEN}`
        }
    };

    useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)
            .then(res => res.json())
            .then(parsedResponse => {
                console.log(parsedResponse.results)
                setMovies(parsedResponse.results)
            })
            .catch(err => console.error(err));
    }, [])

    const handleChange = (event) => {
        event.preventDefault()
        setSearchMovie(event.target.value)
        console.log(event.target.value)

        fetch(`https://api.themoviedb.org/3/search/movie?query=${searchMovie}&include_adult=false&language=en-US&page=1`, options)
            .then(res => res.json())
            .then(parsedResponse => {
                console.log(parsedResponse.results)
                setMovies(parsedResponse.results)
            })
            .catch(err => console.error(err));

    }

    return (
        <Container py-4="true">
            <h1>Results Page</h1>

            <form action="">
                <label>
                    <input type="text"
                           placeholder="Enter a movie title"
                           value={searchMovie}
                           onChange={handleChange}/>
                </label>

                <button type="submit">Submit</button>
            </form>

            <Row xs={1} md={2} lg={4} className="g-4">
                {movies.map((movie) => (
                    <Col key={movie.id} className="d-flex">
                        {/* We use d-flex to ensure the card fills the column height */}
                        <MovieCard data={movie}/>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default Results;