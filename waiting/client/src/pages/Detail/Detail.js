import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import NewNav from "../../components/NewNav";
import Footer from "../../components/Footer";
import "./Detail.css";

class Detail extends Component {
  state = {
    book: {}
  };
  // When this component mounts, grab the book with the _id of this.props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  componentDidMount() {
    API.getBook(this.props.match.params.id)
      .then(res => this.setState({ book: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
      <NewNav />
      <Container fluid>
        <Row>
          <Col size="md-12">
            <div>
              <h1>
                {this.state.book.title} for {this.state.book.author}
              </h1>
            </div>
          </Col>
        </Row>
        <Row>
          <Col size="md-10 md-offset-1">
            <article>
              <h1>Play Trivia!</h1>
              {/* <p>
                {this.state.book.synopsis}
              </p> */}
            </article>
          </Col>
        </Row>
        {/* BACK TO HOME BUTTON (DONT NEED)
        <Row>
          <Col size="md-2">
            <Link to="/">← Back to Authors</Link>
          </Col>
        </Row> 
        */}
      </Container>
      <Footer />
      </div>
    );
  }
}

export default Detail;
