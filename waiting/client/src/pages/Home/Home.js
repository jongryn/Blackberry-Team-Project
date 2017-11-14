import React, { Component } from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";
import NewNav from "../../components/NewNav";
import Footer from "../../components/Footer";
import "./Home.css";


const Home = () =>
<div>
{/* <NewNav />  we dont need header*/}
<div className="container-fluid">
    <h1>WAITING</h1>
    <h4>Welcome to a new dining experience!</h4>
</div>
{/* <Footer /> we dont need footer */}
</div>
export default Home;