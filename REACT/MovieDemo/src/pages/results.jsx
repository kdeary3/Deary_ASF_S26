import React, {useEffect, useState} from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Col} from "react-bootstrap";

function Results() {

    const [movies, setMovies] = useState([])

    useEffect(
        () => {
            const options = {
                method: 'GET',
                headers: {
                    accept: 'application/json',
                    Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_TOKEN}`
                }
            };

            fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1', options)
                .then(res => res.json())
                .then(parsedResponse => {
                    console.log(parsedResponse.results)
                    setMovies(parsedResponse.results)
                })
                .catch(err => console.error(err));

        }, [])

    let displayMovies = movies.map(data => {
        return (
            <Card style={{width: '18rem'}}>
                <Card.Img variant="top" src="holder.js/100px180"/>
                <Card.Body>
                    <Card.Title>{data.title}</Card.Title>
                    <Card.Text>{data.overview}</Card.Text>

                </Card.Body>
            </Card>
        )
    })

    return (
        <>
            <h1>Results Page</h1>
            <Col>
                {displayMovies}
            </Col>
        </>
    );
};

export default Results;