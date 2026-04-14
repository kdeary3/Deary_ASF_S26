import React from 'react';
import {useNavigate} from "react-router-dom";

const Landing = () => {

    const navigate = useNavigate()

    return (
        <>
            <h1>Landing Page</h1>
            <button onClick={() => navigate("/results")}>Now Playing</button>
        </>
    );
};

export default Landing;