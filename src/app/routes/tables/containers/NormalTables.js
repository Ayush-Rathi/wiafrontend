import React from 'react'

import { Alert } from 'react-bootstrap'

import { Stats, BigBreadcrumbs, WidgetGrid, JarvisWidget } from '../../../components'
import axios from 'axios';
//import await from 'await';

export default class NormalTables extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: ' ',
      email: ' ',
      searchResults: [
        { colorado: "", sydney: "", canton:  "", indaiatuba: "",carlisle: "",shanghai: "",manaus: "",guangdong: "",salesPartNumner: "",partDiscription: "" }
      ] 
     // searchResults:[]
    };
  }
  renderTableHeader() {
    //if (this.state.searchResults > 0){
    let header = Object.keys(this.state.searchResults[0])
    return header.map((key, index) => {
      return <th key={index}>{key.toUpperCase()}</th>
    })
  //}
  }

  renderTableData() {
    return this.state.searchResults.map((student, index) => {
      const { colorado, sydney, canton, indaiatuba,carlisle,shanghai,manaus,guangdong,salesPartNumner,partDiscription } = student //destructuring
      return (
        <tr key={colorado}>
          <td>{colorado}</td>
          <td>{sydney}</td>
          <td>{canton}</td>
          <td>{indaiatuba}</td>
          <td>{carlisle}</td>
          <td>{shanghai}</td>
          <td>{manaus}</td>
          <td>{guangdong}</td>
          <td>{salesPartNumner}</td>
          <td>{partDiscription}</td>
        </tr>
      )
    })
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onSubmit = (e) => {
    console.log(this.state.name);
    e.preventDefault();
    const form = {
      name: this.state.name,
      email: this.state.email
    }
    this.setState({
      name: '',
      email: ''
    })
    console.log(name);
  
 
    const response =  axios.post(
      'http://localhost:8080/stollepp',
      { id: "1" },
      { headers: { 'Content-Type': 'application/json' } }
    ).then(todos => {
      console.log(todos.data);
      this.setState({searchResults: todos.data.searchResults})
    })
    .catch(err => console.log(err))
  }
a


   getDataFromDatabase(){
    const response =  axios.post(
      'http://localhost:8080/stollepp',
      { id: "1" },
      { headers: { 'Content-Type': 'application/json' } }
    ).then(todos => {
      console.log(response);
      this.setState({searchResults: todos.data})
    })
    .catch(err => console.log(err))
    console.log(response.data);
    //this.setState({searchResults:response.data});
  } 
  render() {
    return (
      <div id="content">

        <div>
          <div className="widget-body">
            <div>
              <label>
                Name:
                    <input
                  name='name'
                  value={this.state.name}
                  onChange={e => this.handleChange(e)} />
              </label>
              <button value={this.state.email} onClick={(e) => this.onSubmit(e)}>Send</button>
            </div>

            <div className="table-responsive">
              <div>
                <h1 id='title'>React Dynamic Table</h1>
                <table id='students' className="table table-bordered">
                  <tbody>
                    <tr>{this.renderTableHeader()}</tr>
                    {this.renderTableData()}
                  </tbody>
                </table>
              </div>
              </div></div></div></div>

          )
        }
}