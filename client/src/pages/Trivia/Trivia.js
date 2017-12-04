import React from "react";
import Footer from "../../components/Footer";
import Quiz from "../../components/Quiz";
import "./Trivia.css";

const Trivia = () =>
<div>
    <div className="container-fluid">
        <a href="/">
            <h1>Test Your Knowledge!</h1>
        </a>
        <h4>Lets Play Trivia!</h4>
        <Quiz />
    </div>
    <Footer />
</div>
export default Trivia;
