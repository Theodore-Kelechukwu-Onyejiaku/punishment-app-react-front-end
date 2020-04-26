import React, { Component } from 'react';
import axios from 'axios';

export default class CreateUser extends Component {
  constructor(props) {
    super(props);

    this.onChangePunishee = this.onChangePunishee.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: ''
    }
  }

  onChangePunishee(e) {
    this.setState({
      username: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const user = {
      username: this.state.username
    }

    console.log(user);

    axios.post('https://punishee.herokuapp.com/punishees/add', user)
      .then(res => console.log(res.data));

    this.setState({
      username: ''
    })

    window.location = "/"
  }

  render() {
    return (
      <div>
        <h3>Create New Punishee</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group"> 
            <label>Punishee Name: </label>
            <input  type="text"
                required
                className="form-control"
                value={this.state.username}
                onChange={this.onChangePunishee}
                />
          </div>
          <div className="form-group">
            <input type="submit" value="Create Punishee" className="btn btn-primary" />
          </div>
        </form>
      </div>
    )
  }
}