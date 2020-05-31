import React from 'react'


import axios from 'axios';

export default class PartPriceSearch extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: ' ',
      email: ' ',
      searchResults: [
        { colorado: "", sydney: "", canton:  ""}
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
      const { colorado, sydney, canton} = student //destructuring
      return (
        <tr key={colorado}>
          <td>{colorado}</td>
          <td>{sydney}</td>
          <td>{canton}</td>
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
      name: this.state.name
    }
    this.setState({
      name: ''
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
                Part Number:
                    <input
                  name='name'
                  value={this.state.name}
                  onChange={e => this.handleChange(e)} />
              </label>
              <br/>
              <button onClick={(e) => this.onSubmit(e)}>Search</button>
            </div>
            <br/><br/>
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