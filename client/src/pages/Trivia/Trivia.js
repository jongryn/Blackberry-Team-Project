import React from "react";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import Quiz from "../../components/Quiz";
import Ads from "../../components/Ads";
import "./Trivia.css";

const Trivia = () =>

<div className="wrapper">
    <div className="nav">
        <Nav />
    </div>
    <div className="container-fluid">
        <a href="/Trivia">
        <h1>Lets Play Trivia!</h1>
        </a>
        <Quiz />
    </div>
    <div className="Ads">
    <Ads />
    </div>
    <Footer />

</div>
export default Trivia;
