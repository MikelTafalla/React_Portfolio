import React from "react";
import Hero from "../components/Hero/hero";
import Jumbo from "../components/Jumbotron/jumbo";

const Contact  = () => {

    return (
        <div>
            <Hero backgroundImage="https://images.unsplash.com/photo-1567628065034-e547f2cc2309?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60">
            </Hero>
            <Jumbo
            titleName="text-center"
            name="Contact Me"
            message="Please, do not hesitate to contact me at mikel@fakegmail.com if you feel I may be of help to develop your project"
            button1="Send Email"
            href1="mailto:mikel362d@gmail.com"
            hide="hide"
            centered="center"
            messagecss="lead text-center"
            >
            </Jumbo>
        </div>
    )
    }
    export default Contact