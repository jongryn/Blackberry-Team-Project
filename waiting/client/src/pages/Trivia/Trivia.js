
import React from "react";
import Footer from "../../components/Footer";
import TrvBtn from "../../components/TrvBtn";

const Trivia = () =>
<div>
    <div className="container-fluid">
        <a href="/waitlist">
            <h1>WAITLIST</h1>
        </a>
        <h4>Play Trivia!</h4>
        <TrvBtn />
    </div>
    <Footer /> 
</div>
export default Trivia;