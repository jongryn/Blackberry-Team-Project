import React, { Component } from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import "./Home.css";
import CheckInModal from "../../components/CheckInModal";
import Center from 'react-center';

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
                  <h1>Nearby Restaurants</h1>
                </div>
                {this.state.restaurants.length ? (
                  <List>
                    {this.state.restaurants.map(restaurant => (
                      <Col size="md-6">
                      <ListItem key={restaurant._id}>
                        <Link to={"/restaurants/" + restaurant._id}>
                            {restaurant.name} <br/>
                            {restaurant.category} <br/>
                            {restaurant.city}, {restaurant.zip} <br/>
                            Current wait time: {restaurant.waittime} <br/>
                            <img alt='res' src= {restaurant.img} />
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
