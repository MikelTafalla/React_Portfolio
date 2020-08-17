import React from "react";
import Hero from "../components/Hero/hero";
import Card from "../components/Card/card";

const Projects  = () => {
    return (
        <div>
            <Hero backgroundImage="https://images.unsplash.com/photo-1461730278450-19cc1863601c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60">
                <h1>Mikel Rodriguez</h1>
                <h2>Welcome to my portfolio!</h2>
            </Hero>
            <Card 
                image="https://knowpathology.com.au/app/uploads/2018/07/Happy-Test-Screen-01-825x510.png"
            />

        </div>
    );
}

export default Projects;
