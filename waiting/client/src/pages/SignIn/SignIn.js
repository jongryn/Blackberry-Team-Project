import React, { Component } from "react";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { Input, FormBtn } from "../../components/Form";
import Footer from "../../components/Footer";
import "./SignIn.css";


class SignIn extends Component {
    state = {
      restaurants: [],
      title: "",
      author: "",
      synopsis: ""
    };

    componentDidMount() {
      this.loadRestaurants();
    }

    loadRestaurants = () => {
      API.getRestaurants()
        .then(res =>
          this.setState({ restaurants: res.data, title: "", author: "", synopsis: "" })
        )
        .catch(err => console.log(err));
    };

    deleteRestaurant = id => {
      API.deleteRestaurant(id)
        .then(res => this.loadRestaurants())
        .catch(err => console.log(err));
    };

    handleInputChange = event => {
      const { name, value } = event.target;
      this.setState({
        [name]: value
      });
    };

    handleFormSubmit = event => {
      event.preventDefault();
      if (this.state.title && this.state.author) {
        API.saveRestaurant({
          title: this.state.title,
          author: this.state.author,
          synopsis: this.state.synopsis
        })
          .then(res => this.loadRestaurants())
          .catch(err => console.log(err));
      }
    };

    render() {
      console.log(this.state)
      return (
        <div>
            <Container fluid>
              <Row>
                <Col size="md-12">
                  <div>
                    <h1>Restaurant Signup</h1>
                  </div>
                  <form>
                    <Input
                      value={this.state.name}
                      onChange={this.handleInputChange}
                      name="name"
                      placeholder="Name (required)"
                    />
                    <Input
                      value={this.state.address}
                      onChange={this.handleInputChange}
                      name="author"
                      placeholder="Address (required)"
                    />
                    <Input
                    value={this.state.synopsis}
                    onChange={this.handleInputChange}
                    name="synopsis"
                    placeholder="Phone Number (required)"
                    />
                    <FormBtn
                      disabled={!(this.state.author && this.state.title)}
                      onClick={this.handleFormSubmit}
                    >
                      Submit Name
                    </FormBtn>
                  </form>

                </Col>
              </Row>
            </Container>
          <Footer />
        </div>
      );
    }
  }

  export default SignIn;
