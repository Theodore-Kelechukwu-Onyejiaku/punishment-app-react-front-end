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
    axios.get('https://punishee.herokuapp.com/punishments/')
      .then(response => {
        setTimeout(()=>{this.setState({ punishments: response.data, isLoading: false})}, 1500)
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deletePunishment(id) {
    axios.delete('https://punishee.herokuapp.com/punishments/'+id)
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
      <div className="container">

        {this.state.isLoading ? <div style={{"text-align": "center"}}><img src={Loader} alt="loader" /></div>  
        : 
        <div  className="table-responsive-sm">
          <h5 className="text-center text-info">Feel free to add yours</h5>
          <h3>Punishment List</h3>
        <table className="table table-sm table-dark table-hover">
          <thead className="thead-light">
            <tr>
              <th   scope="col">Name</th>
              <th   scope="col">Description</th>
              <th   scope="col">Duration</th>
              <th   scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
                <td>Oyindamola</td>
                <td>No punishment for you</td>
                <td>Forever</td>
                <td>
                  <button className="btn btn-info" onClick={()=>{alert("You can't edit this one it's Theodore's, create yours and edit if you desire")}}>edit</button><a href="#" className="btn btn-danger" onClick={() => { alert("You can't delete this, it's Theodore's. Create yours and delete as desired")}}>delete</a>
                </td>
            </tr>
            <tr>
                <td>Nonso</td>
                <td>For what you did, buy me card!</td>
                <td>1 Decade</td>
                <td>
                  <button className="btn btn-info" onClick={()=>{alert("You can't edit this one it's Theodore's, create yours and edit if you desire")}}>edit</button><a href="#" className="btn btn-danger" onClick={() => { alert("You can't delete this, it's Theodore's. Create yours and delete as desired")}}>delete</a>
                </td>
            </tr>
            <tr>
                <td>Chidera</td>
                <td>For eyeing Rejoice, go to oblivion</td>
                <td>Till we see you again</td>
                <td>
                  <button className="btn btn-info" onClick={()=>{alert("You can't edit this one it's Theodore's, create yours and edit if you desire")}}>edit</button><a href="#" className="btn btn-danger" onClick={() => { alert("You can't delete this, it's Theodore's. Create yours and delete as desired")}}>delete</a>
                </td>
            </tr>
            <tr>
                <td>Stephanie</td>
                <td>Call me elder Theodore</td>
                <td>at least for once</td>
                <td>
                  <button className="btn btn-info" onClick={()=>{alert("You can't edit this one it's Theodore's, create yours and edit if you desire")}}>edit</button><a href="#" className="btn btn-danger" onClick={() => { alert("You can't delete this, it's Theodore's. Create yours and delete as desired")}}>delete</a>
                </td>
            </tr>
            <tr>
                <td>Paul</td>
                <td>For the scam, sell free data</td>
                <td>Until after lockdown</td>
                <td>
                  <button className="btn btn-info" onClick={()=>{alert("You can't edit this one it's Theodore's, create yours and edit if you desire")}}>edit</button><a href="#" className="btn btn-danger" onClick={() => { alert("You can't delete this, it's Theodore's. Create yours and delete as desired")}}>delete</a>
                </td>
            </tr>
            <tr>
                <td>Theodora</td>
                <td>For not remembering</td>
                <td>I will always call you Theo</td>
                <td>
                  <button className="btn btn-info" onClick={()=>{alert("You can't edit this one it's Theodore's, create yours and edit if you desire")}}>edit</button><a href="#" className="btn btn-danger" onClick={() => { alert("You can't delete this, it's Theodore's. Create yours and delete as desired")}}>delete</a>
                </td>
            </tr>
            <tr>
                <td>Nigerian Students</td>
                <td>Pick two, General, hold-on</td>
                <td>After Lockdown</td>
                <td>
                  <button className="btn btn-info" onClick={()=>{alert("You can't edit this one it's Theodore's, create yours and edit if you desire")}}>edit</button><a href="#" className="btn btn-danger" onClick={() => { alert("You can't delete this, it's Theodore's. Create yours and delete as desired")}}>delete</a>
                </td>
            </tr>
            <tr>
                <td>Martins</td>
                <td>For refusing, you are now a village boy</td>
                <td>After Lockdown</td>
                <td>
                  <button className="btn btn-info" onClick={()=>{alert("You can't edit this one it's Theodore's, create yours and edit if you desire")}}>edit</button><a href="#" className="btn btn-danger" onClick={() => { alert("You can't delete this, it's Theodore's. Create yours and delete as desired")}}>delete</a>
                </td>
            </tr>
            <tr>
                <td>Benedicta</td>
                <td>Chai, no punishment for you</td>
                <td>Always</td>
                <td>
                  <button className="btn btn-info" onClick={()=>{alert("You can't edit this one it's Theodore's, create yours and edit if you desire")}}>edit</button><a href="#" className="btn btn-danger" onClick={() => { alert("You can't delete this, it's Theodore's. Create yours and delete as desired")}}>delete</a>
                </td>
            </tr>
            { this.punishmentList() }
          </tbody>
        </table>
        <div className="text-info">
          <h5>Feel Free to add yours by clicking <Link to="/how" className="text-danger" style={{"text-decoration": "underline"}}>How to use?</Link></h5>
        </div>
        </div>
        } 
                  
      </div>
    )
  }
}