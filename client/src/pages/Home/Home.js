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

              <Col size="md-12">
                <div>
                  <h1>Nearby Restaurants</h1>
                </div>
                {this.state.restaurants.length ? (
                  <List>
                    {this.state.restaurants.map(restaurant => (
                      <Col size="md-3">

                        <Link to={"/checkin/" + restaurant.name}>
                        <Row>
                            {restaurant.name}
                            {restaurant.category}
                        </Row>
                        <Row>
                            {restaurant.city}, {restaurant.zip}
                            {restaurant.waittime}
                            <br/><br/>
                            </Row>
                            <Row>

                            <img alt='res' src={restaurant.img}/>
                            </Row>
                        </Link>

                      </Col>
                    ))}
                  </List>
                ) : (
                  <h3>No Results to Display</h3>
                )}
              </Col>

          </Container>
        <Footer />
      </div>
    );
  }
}
export default Home;
