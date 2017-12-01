import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import API from "../../utils/API";
import NewNav from "../../components/NewNav";
import { Input, FormBtn } from "../../components/Form";
import Footer from "../../components/Footer";
import "./Detail.css";
import Quiz from "../../components/Quiz";

class Detail extends Component {
  state = {
    restaurant: {}
  };

  // When this component mounts, grab the restaurant with the _id of this.props.match.params.id
  // e.g. localhost:3000/restaurants/599dcb67f0f16317844583fc
  componentDidMount() {
    API.getRestaurant(this.props.match.params.id)
      .then(res => this.setState({ restaurant: res.data }))
      .catch(err => console.log(err));
  }


  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.name && this.state.phone && this.state.partysize) {
      API.saveUser({
        name: this.state.name,
        phone: this.state.phone,
        partysize: this.state.partysize,
        checkinto: this.state.restaurant.name

      })
        .then(res => this.loadUsers())
        .catch(err => console.log(err));
    }
  };

  render() {
    console.log(this.state)
    return (
      <div>
          <Container fluid>
            <Row>
              <Col size="md-4">
                <div>
                  <h1>Please Check In</h1>
                </div>
                <form>
                  <Input
                    value={this.state.name}
                    onChange={this.handleInputChange}
                    name="name"
                    placeholder="Name (required)"
                  />
                  <Input
                    value={this.state.partysize}
                    onChange={this.handleInputChange}
                    name="partysize"
                    placeholder="How many people are in your party? (required)"
                  />
                  <Input
                  value={this.state.phone}
                  onChange={this.handleInputChange}
                  name="phone"
                  placeholder="Phone Number(required)"
                  />
                  <FormBtn
                    disabled={!(this.state.name && this.state.phone && this.state.partysize)}
                    onClick={this.handleFormSubmit}
                  >
                    Check In
                  </FormBtn>
                </form>
              </Col>
              {/*<Col size="md-4">
              // For testing
                <div>
                  <h1>Waiting List</h1>
                </div>
                {this.state.users.length ? (
                  <List>
                    {this.state.users.map(user => (
                      <ListItem key={user._id}>
                        <Link to={"/users/" + user._id}>
                            Name: {user.name} <br/>
                            Party Size: {user.partysize} <br/>
                            Phone: {user.phone}<br/>
                            Checked Into: {user.checkinto}
                        </Link>
                        <DeleteBtn onClick={() => this.deleteUser(user._id)} />
                      </ListItem>
                    ))}
                  </List>
                ) : (
                  <h3>No Results to Display</h3>
                )}
              </Col>*/}

            </Row>
          </Container>
        <Footer />
      </div>
    );
  }
}


export default Detail;
