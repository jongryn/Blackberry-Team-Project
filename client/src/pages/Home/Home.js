import React, { Component } from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import "./Home.css";


class Home extends Component {
  state = {
    restaurants: [],
    name: "",
    zip: "",
    img: "",
    waittime: "",
  };

  componentDidMount() {
    this.loadRestaurants();
  }

  loadRestaurants = () => {
    API.getRestaurants()
      .then(res =>
        this.setState({ restaurants: res.data, name: "", category: "", city: "", zip: "", img: "", waittime: ""  })
      )
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
      <Nav />
          <Container fluid>
          <Row>
              <Col size="md-12">
                <div>
                  <input type="text" name="search" placeholder="Search..."/>
                  <h1>Nearby Restaurants</h1>
                </div>
                {this.state.restaurants.length ? (
                  <List>
                    {this.state.restaurants.map(restaurant => (
                      <Col size="md-4" key={restaurant._id}>
                      <ListItem key={restaurant._id}>
                        <Link to={"/detail/" + restaurant._id}>
                        <Row>
                            <Col size="md-6">{restaurant.name}</Col>
                            <Col size="md-6">{restaurant.category}</Col>
                        </Row>
                        <Row>
                        <Col size="md-4">
                        <img alt='res' src= {restaurant.img} /></Col>
                        </Row>
                        <Row>
                            <Col size="md-6">{restaurant.city}, {restaurant.zip}</Col>
                            <Col size="md-6">{restaurant.waittime}</Col>
                            <br/><br/>
                            </Row>
                        </Link>
                      </ListItem>
                      </Col>
                    ))}
                  </List>
                ) : (
                  <h3>No Results to Display</h3>
                )}
              </Col>
            </Row>
          </Container>
        <Footer />
      </div>
    );
  }
}
export default Home;
