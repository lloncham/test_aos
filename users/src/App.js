import React, { Component } from 'react';
import './App.css';
import {BrowserRouter, Route, Link} from "react-router-dom";
import { Button, FormLabel, FormControl, FormGroup } from "react-bootstrap";

class App extends React.Component {
  render()  {
    return  (
      <BrowserRouter>
        <div>
          <ul>
            <li>
              <Link to="/">Log In</Link>
            </li>
          </ul>
          <hr />
          <div>
            <Route exact path="/" component={Login} />
            <Route exact path="/Success" component={Success} />
            <Route exact path="/Fail" component={Fail} />
          </div>
        </div>
      </BrowserRouter>
    );
  }

}

class Success extends Component {
  render() {
    return (
      <div>Success</div>
    )
  }
}

class Fail extends Component {
  render() {
    return (
      <div>Fail</div>
    )
  }
}

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { email: '', psw: ''};

    this.handleChangeemail = this.handleChangeemail.bind(this);
    this.handleChangepsw = this.handleChangepsw.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeemail(event) {
    this.setState({ email: event.target.value });
  }

  handleChangepsw(event) {
    this.setState({ psw: event.target.value });
  }

  handleSubmit(event) {
    fetch("http://localhost:4000/login",
      {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }, method: 'POST', body: JSON.stringify({ email: this.state.email, psw: this.state.psw })
      })
      .then(response => response.json())
      .then((data) => {
        if (data.status === "ok")
          this.props.history.push('/Success');
        if (data.status === "ko")
          this.props.history.push('/Fail');
      })
  }

  render() {
    return (
      <div className="Login">
      <FormGroup controlId="email" bsSize="large">
        <FormLabel>
          E-mail :
      <FormControl
            type="text"
            name="email"
            value={this.state.email}
            onChange={this.handleChangeemail} />
        </FormLabel>
        </FormGroup>
        <br />
        <FormGroup controlId="email" bsSize="large">
        <FormLabel>
          Password :
      <FormControl
            type="password"
            name="password"
            value={this.state.psw}
            onChange={this.handleChangepsw} />
        </FormLabel>
        </FormGroup>
        <br />
        <Button
          type="button"
          onClick={this.handleSubmit}>Envoyer</Button>
      </div>
    );
  }
}

export default App;
