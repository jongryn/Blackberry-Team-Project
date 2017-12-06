import React, { Component } from "react";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, FormBtn } from "../../components/Form";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import "./Detail.css";

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
        this.setState({ users: res.data, name: "", partysize: "", phone: "", checkinto: "", userrequest: ""})
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
      this.state.restaurant.waittime=this.state.restaurant.waittime + 5;
      API.updateRestaurant(this.props.match.params.id, {
        waittime: this.state.restaurant.waittime

      })
        .then(res => {
          console.log*
          API.saveUser({
            name: this.state.name,
            phone: this.state.phone,
            partysize: this.state.partysize,
            userrequest: this.state.userrequest,
            checkinto: this.state.restaurant.name,
            userwait: this.state.restaurant.waittime,
            id: this.props.match.params.id
          })
          this.props.history.push('/Trivia')})

        .catch(err => console.log(err));
    }
  };

  render() {

    return (
      <div>
        <Nav />
          <Container fluid>
              <Col size="md-4 signinform">
              <Col size="sm-3 md-3 detailspacing">
                <div>
                  <h2>Please Check In</h2>
                </div>
                <form>
                Name
                  <Input
                    value={this.state.name}
                    onChange={this.handleInputChange}
                    name="name"
                    placeholder="Required"
                  />
                  Party Size
                  <Input
                    value={this.state.partysize}
                    onChange={this.handleInputChange}
                    name="partysize"
                    placeholder="Required"
                  />
                  Phone Number
                  <Input
                  value={this.state.phone}
                  onChange={this.handleInputChange}
                  name="phone"
                  placeholder="Required"
                  />
                  Special requests?
                  <Input
                  value={this.state.userrequest}
                  onChange={this.handleInputChange}
                  name="userrequest"
                  placeholder="Birthday, Highchair, Anniversary"
                  />

                  <FormBtn
                    disabled={!(this.state.name && this.state.phone && this.state.partysize)}
                    onClick={this.handleFormSubmit}
                  >
                    Check In
                  </FormBtn>

                </form>
              </Col>
              </Col>



              {/*<Col size="md-6">
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
                            Checked Into: {user.checkinto}<br/>
                            Special Request: {user.userrequest}
                        </Link>
                        <DeleteBtn onClick={() => this.deleteUser(user._id)}  />
                      </ListItem>
                    ))}
                  </List>
                ) : (
                  <h3>No Results to Display</h3>
                )}
              </Col>*/}


          </Container>
        <Footer />
      </div>
    );
  }
}


export default Detail;
