import React from "react";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import Quiz from "../../components/Quiz";
import "./Trivia.css";

const Trivia = () =>

<div>
  <Nav />
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
