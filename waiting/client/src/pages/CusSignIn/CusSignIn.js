import React, { Component } from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { Input, FormBtn } from "../../components/Form";
import { List, ListItem } from "../../components/List";
import DeleteBtn from "../../components/DeleteBtn";
import Footer from "../../components/Footer";
import "./CusSignIn.css";


class CusSignIn extends Component {
    state = {
      users: [],
      name: "",
      phone: "",
      guest: "",
    };

    componentDidMount() {
      this.loadUsers();
    }

    loadUsers = () => {
      API.getUsers()
        .then(res =>
          this.setState({ users: res.data, name: "", phone: "", guest: ""})
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
      if (this.state.name && this.state.phone && this.state.guest) {
        API.saveUser({
          name: this.state.name,
          phone: this.state.phone,
          guest: this.state.guest
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
                      value={this.state.phone}
                      onChange={this.handleInputChange}
                      name="phone"
                      placeholder="Phone Number (required)"
                    />
                    <Input
                    value={this.state.img}
                    onChange={this.handleInputChange}
                    name="guest"
                    placeholder="Number of Guest(required)"
                    />
                    <FormBtn
                      disabled={!(this.state.name && this.state.phone && this.state.guest)}
                      onClick={this.handleFormSubmit}
                    >
                      Submit Name
                    </FormBtn>
                  </form>
                </Col>
                // For submit validation
                <Col size="md-4">
                  <div>
                    <h1>Near By Restaurants</h1>
                  </div>
                  {this.state.users.length ? (
                    <List>
                      {this.state.users.map(user => (
                        <ListItem key={user._id}>
                          <Link to={"/users/" + user._id}>
                            <strong>
                              {user.name} - {user.phone} - {user.guest}
                            </strong>
                          </Link>
                          <DeleteBtn onClick={() => this.deleteUser(user._id)} />
                        </ListItem>
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

  export default CusSignIn;
