import React, { Component } from "react";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";

import { List, ListItem } from "../../components/List";
import { Input, FormBtn } from "../../components/Form";

import "./Detail.css";
import Quiz from "../../components/Quiz";
import DeleteBtn from "../../components/DeleteBtn";
import { Link } from "react-router-dom";

class Detail extends Component {
  state = {
    users: [],
    name: "",
    partysize: 0,
    restaurant: {},
    name: "",
    zip: "",
    img: "",
    waittime: "",
  };

  componentDidMount() {
    API.getRestaurant(this.props.match.params.id)
      .then(res => this.setState({ restaurant: res.data }))
      .catch(err => console.log(err));
      this.loadUsers();
  }

  loadUsers = () => {
    API.getUsers()
      .then(res =>
        this.setState({ users: res.data, name: "", phone: "", partysize: "", checkinto: ""})
      )
      .catch(err => console.log(err));

  };

  deleteUser = id => {
    API.deleteUser(id)
      .then(res => this.loadUsers())
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
    if (this.state.name && this.state.phone && this.state.partysize) {

      API.saveUser({
        name: this.state.name,
        phone: this.state.phone,
        partysize: this.state.partysize,
        checkinto: this.state.restaurant.name
      })
        .then(res => {
          this.state.restaurant.waittime=this.state.restaurant.waittime + 5;
          API.updateRestaurant(this.props.match.params.id, {
            waittime: this.state.restaurant.waittime
          })
          console.log(this.state.restaurant.waittime)
          this.loadUsers()})
        .catch(err => console.log(err));

    }
  };

  render() {
    return (
      <div>
          <Container fluid>
            <Row>
              <Col size="md-6">
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
              <Col size="md-6">
                <div>
                  <h2>For DB Validation</h2>
                  <h2>Detele when done</h2>
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
                        <DeleteBtn onClick={() => this.deleteUser(user._id)}  />
                      </ListItem>
                    ))}
                  </List>
                ) : (
                  <h3>No Results to Display</h3>
                )}
              </Col>

            </Row>
          </Container>
      </div>
    );
  }
}


export default Detail;
