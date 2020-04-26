import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Loader from "./loader.gif"

const Punishment = props => (
  <tr>
    <td>{props.punishment.username}</td>
    <td>{props.punishment.description}</td>
    <td>{props.punishment.duration*60} hrs | {props.punishment.duration} days</td>
    <td>
      <Link className="btn btn-info" to={"/edit/"+props.punishment._id}>edit</Link><a href="#" className="btn btn-danger" onClick={() => { props.deletePunishment(props.punishment._id) }}>delete</a>
    </td>
  </tr>
)

export default class PunishmentsList extends Component {
  constructor(props) {
    super(props);

    this.deletePunishment = this.deletePunishment.bind(this)

    this.state = {punishments: [], isLoading: true};
  }

  componentDidMount() {
    axios.get('http://localhost:5000/punishments/')
      .then(response => {
        setTimeout(()=>{this.setState({ punishments: response.data, isLoading: false})}, 3000)
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deletePunishment(id) {
    axios.delete('http://localhost:5000/punishments/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
      punishments: this.state.punishments.filter(el => el._id !== id)
    })
  }

  punishmentList() {
    return this.state.punishments.map(currentpunishment => {
      return <Punishment punishment={currentpunishment} deletePunishment={this.deletePunishment} key={currentpunishment._id}/>;
    })
  }

  render() {
    return (
      <div>

        {this.state.isLoading ? <div style={{"text-align": "center"}}><img src={Loader} alt="loader" /></div>  
        : 
        <div>
          <h3>Registered Punishments</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Duration</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            { this.punishmentList() }
          </tbody>
        </table>
        </div>
        } 
                  
      </div>
    )
  }
}