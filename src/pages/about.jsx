import React from "react";
import Hero from "../components/Hero/hero";
import Jumbo from "../components/Jumbotron/jumbo";

const About  = () => {

    return (
        <div>
            <Hero backgroundImage="https://images.unsplash.com/photo-1544552866-49ce864ff896?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60">
            </Hero>
            <Jumbo
            titleName="display-4"
            name="Mikel Rodriguez"
            message="Hi, my name is Mikel Rodriguez. I'm a Software Engineer and Spanish Linguist with a Master's degree in Iberian Linguistics. Welcome to my personal website!"
            text="Please refer to the buttons below to access my online resume and portfolio page"
            href1="/"
            href2="https://drive.google.com/file/d/1FXT9ZzMn6tvFQcJbAZbvFK_7vAgi1Cir/view"
            button1="See my projects"
            button2="Online Resume"
            messagecss="lead"
            >
            </Jumbo>
        </div>
    )
    }
    export default About