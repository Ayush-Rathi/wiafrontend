import React from 'react'
import { Alert } from 'react-bootstrap'
import axios from 'axios';
import { ProductTable } from './ProductTable'
//import await from 'await';

export default class Quotation extends React.Component {

  constructor(props) {
    super(props);

    //  this.state.products = [];
    this.state = {};
    this.state.filterText = "";
    this.state.products = [
      {
        salesPartNumber: " ",
        quantity: '',
        unitPrice: '',
        totalPrice: '',
      }
    ];

  }
  handleUserInput(filterText) {
    this.setState({ filterText: filterText });
  };
  handleRowDel(product) {
    var index = this.state.products.indexOf(product);
    this.state.products.splice(index, 1);
    this.setState(this.state.products);
  };

  handleAddEvent(evt) {
    var id = (+ new Date() + Math.floor(Math.random() * 999999)).toString(36);
    var product = {
      id: id,
      name: "",
      price: "",
      category: "",
      qty: 0
    }
    this.state.products.push(product);
    this.setState(this.state.products);

  }

  handleProductTable(evt) {
    var item = {
      id: evt.target.id,
      name: evt.target.name,
      value: evt.target.value
    };
    var products = this.state.products.slice();
    var newProducts = products.map(function (product) {

      for (var key in product) {
        if (key == item.name && product.id == item.id) {
          product[key] = item.value;

        }
      }
      return product;
    });
    this.setState({ products: newProducts });
    //  console.log(this.state.products);
  };
  render() {

    return (
      <div id="content" className="content">
        <form /* onSubmit={this.handleSubmit} onChange={this.handleChange} */ >
          <div className="row" style={{ marginTop: 20 }}>
            <div className="col-sm-1"></div>
            <div className="col-sm-10">
              <div className="card">
                <div className="card-header text-center">Customer No:110400 (KJM)</div>
                <br /><br /><br />
                <div className="card-body">
                  <div className="row">
                    <label className="required">&nbsp;Wanted Delivery Date:</label>&nbsp;&nbsp;&nbsp;
                            <input type="date" width="10" name="date" id="date" 
                            /* className="form-control" */
                      placeholder="Enter Date" />&nbsp;&nbsp;
                  </div>
                  <ProductTable onProductTableUpdate={this.handleProductTable.bind(this)}
                    onRowAdd={this.handleAddEvent.bind(this)} onRowDel={this.handleRowDel.bind(this)}
                    products={this.state.products} filterText={this.state.filterText} />
                </div>
                <div className="card-footer">
                  <div className="row">
                    <button type="submit" className="">
                      Create Sales Quotation</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <button type="submit" className="">
                      Reset</button></div>
                </div>
              </div>
            </div>
            <div className="col-sm-1"></div>
          </div>
        </form>
      </div>
    );

  }

}
