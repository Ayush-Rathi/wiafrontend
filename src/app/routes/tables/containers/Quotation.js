import React from 'react'

import { Alert } from 'react-bootstrap'

import axios from 'axios';
import DatePicker from "react-datepicker";
//import await from 'await';

export default class Quotation extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      taskList: [{ index: Math.random(), projectName: "", task: "", taskNotes: "", taskStatus: "" }],
      name: '5',
      quantity: ' ',
      startDate: new Date(),
      unitPrice:'',
      searchResults: [
        { Sales: "", Quantity: "", UnitPrice:  "", TotalPrice: "" }
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
      const { Sales, Quantity, UnitPrice, TotalPrice        
       } = student //destructuring
      return (
        <tr key={Sales}>
          <td>{name}</td>
          <td>{quantity}</td>
          <td>{unitPrice}</td>
          <td>{TotalPrice}</td>
        </tr>
      )
    })
  }
  handleChange = date => {
    this.setState({
      startDate: date
    });
  };
  handleChange = (e) => {
    console.log("hi "+ e.target +"quantity "+ e.target.value);
    this.setState({
      [e.target.name]: e.target.value,
      quantity: e.target.value,
      unitPrice: 10
    });
    console.log("sales "+ this.state.name);
    console.log("quantity "+ this.state.quantity);
    console.log("unitPrice "+ this.state.unitPrice);
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
      <div id="content" className="content">
      <form /* onSubmit={this.handleSubmit} onChange={this.handleChange} */ >
      <div className="row" style={{ marginTop: 20 }}>
      <div className="col-sm-1"></div>
      <div className="col-sm-10">
          <div className="card">
              <div className="card-header text-center">Customer No:110400 (KJM)</div>
              <br/><br/><br/>
              <div className="card-header"> <button type="submit" 
              className="btn btn-primary">
              Add Row</button></div>
              <br/><br/>
              <div className="card-body">
                  <div className="row">
                      <div className="col-sm-4">
                          <div className="form-group ">
                              <label className="required">Wanted Delivery Date:</label>
                              <input type="date"  name="date" id="date" className="form-control" 
                              placeholder="Enter Date" />
                          </div>
                      </div>
                  </div>
                  <table className="table table-bordered">
                      <thead>
                          <tr>
                              <th className="required" >Sales Part Number</th>
                              <th className="required" >Quantity</th>
                              <th>Unit Price</th>
                              <th>Total Price</th>
                          </tr>
                      </thead>
                      <tbody>
                      <tr>
                    <td>
                      <input type="text"  name="salesPartNumber" data-id={1} id="1" 
                      className="form-control " />
                    </td>
                    <td>
                      <input type="text"  name="quantity" id="2" data-id={2} 
                      className="form-control " />
                    </td>
                    <td>
                      <input type="text" name="unitPrice" id= "3" data-id={3} 
                      className="form-control"/>
                    </td>
                    <td>
                      <input type="text" name="totalPrice" id= "3" data-id={3} 
                      className="form-control"/>
                    </td>
                    <td>
                      <button onClick={()=>props.add()} type="button" 
                      className="btn btn-primary text-center"><i className="fa fa-plus-circle" 
                      aria-hidden="true"></i></button>
                      <button className="btn btn-danger" onClick={(() => props.delete(val))} >
                      <i className="fa fa-minus" aria-hidden="true"></i></button>
                    </td>
                  </tr >
                   {/* <TaskList add={this.addNewRow} delete={this.clickOnDelete.bind(this)} 
                  taskList={taskList} /> */}
                      </tbody>
                  </table>
              </div>
              <div className="card-footer text-center"> <button type="submit" 
              className="btn btn-primary text-center">
              Create Sales Quotation</button></div>
          </div>
      </div>
      <div className="col-sm-1"></div>
  </div>
        </form>
        </div>

          )
        }
}