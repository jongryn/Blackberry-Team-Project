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
<<<<<<< HEAD
              <Col size="sm-12 md-12 lg-12 homespacing">
=======
              <Col size="sm-12 md-12" className='homespacing'>
>>>>>>> 44a67f3c911e52b91b954a2a49c97074036f3f3c
                <div>
                </div>
                {this.state.restaurants.length ? (
                  <List>
                    {this.state.restaurants.map(restaurant => (
<<<<<<< HEAD
                      <Col size="sm-10 md-10 lg-10" key={restaurant._id}>
                      <ListItem key={restaurant._id}>
                        <Row>
                          <Col size="sm-6 md-6 lg-6">
                            <Link to={"/checkin/" + restaurant._id}>
                              <img alt='res' src={restaurant.img} />
                            </Link>
                          </Col>
                          <Col size="sm-6 md-6 lg-6 right">
=======
                      <Col size="md-12" key={restaurant._id}>

                        <Row className="homerow">
                          <Col className="homeimages" size="xs-8 sm-6 md-6">
                          <Link to={"/checkin/" + restaurant._id}>
                              <img alt='res' className="homeimg" src={restaurant.img} />
                            </Link>
                          </Col>
                          <Col size="xs-4 sm-6 md-6" className="homedetails">
>>>>>>> 44a67f3c911e52b91b954a2a49c97074036f3f3c
                            <Link to={"/checkin/" + restaurant.name}>
                              {restaurant.name}
                              <br />
                              {restaurant.category}
                              <br />
                              {restaurant.city}, {restaurant.zip}
                              <br />
                              Est. Wait Time: {restaurant.waittime} min.
                              <br/><br/>
                            </Link>
                          </Col>
                        </Row>
                       <hr/>

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
