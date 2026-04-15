import Card from "react-bootstrap/Card";
import {Col, Row} from "react-bootstrap";

const MovieCard = ({data}) => {
    const imageUrl = data.poster_path
        ? `https://image.tmdb.org/t/p/w500${data.poster_path}`
        : "https://via.placeholder.com/500x750?text=No+Image+Available";

    return (

        <Card className="h-100 shadow-sm">
            <Card.Img
                variant="top"
                src={imageUrl}
                alt={`${data.title} poster`}
            />
            <Card.Body>
                <Card.Title>{data.title}</Card.Title>
                <Card.Text>
                    {data.overview ? data.overview.substring(0, 100) + "..." : "No description available."}
                </Card.Text>
                <Card.Text>
                    <strong>Score:</strong> {data.vote_average}
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default MovieCard;