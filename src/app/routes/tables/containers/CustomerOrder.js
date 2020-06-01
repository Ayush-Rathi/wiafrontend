import React from 'react'
import { ProductTable } from './ProductTable'
export default class CustomerOrder extends React.Component {

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
  handleChange(evt){
    /* console.log("quantity " + e.target.value);
    this.setState({
      [e.target.name]: e.target.value,
      quantity: e.target.value,
      unitPrice: 10
    });
    console.log("sales " + this.state.name);
    console.log("quantity " + this.state.quantity);
    console.log("unitPrice " + this.state.unitPrice); */
    console.log("Inside handle change ");
    var item = {
      id: evt.target.id,
      name: evt.target.name,
      value: evt.target.value
    };
    console.log("item.name "+item.name);
    var products = this.state.products.slice();
    var newProducts = products.map(function (product) {
      for (var key in product) {
        if (key == item.name && product.id == item.id) {
          console.log("product[key]  "+key+2 );
          if (key == "unitPrice"){
            product[key] = 10*5;
          }
          else{
          product[key] = item.value;
          }
        }
      }
      return product;
    });
    this.setState({ products: newProducts });
    console.log(this.state.products);
  }
  handleAddEvent(evt) {
    var id = (+ new Date() + Math.floor(Math.random() * 999999)).toString(36);
    var product = {
      id: id,
      salesPortNumber: "",
      quantity: "",
      unitPrice: 0,
      totalPrice: "",
    }
    this.state.products.push(product);
    this.setState(this.state.products);

  }

  handleProductTable(evt) {
    console.log("Inside handleProductTable");
    var item = {
      id: evt.target.id,
      name: evt.target.name,
      value: evt.target.value
    };
    var products = this.state.products.slice();
    var newProducts = products.map(function (product) {

      for (var key in product) {
        if (key == item.name && product.id == item.id) {
          if(key == "salesPartNumber"){
            handleChange(this);
          }
          product[key] = item.value;
        }
      }
      return product;
    });
    this.setState({ products: newProducts });
    console.log(this.state.products);
  };
  render() {

    return (
      <div id="content" className="content">
        <form /* onSubmit={this.handleSubmit} */>
          <div className="row" style={{ marginTop: 20 }}>
            <div className="col-sm-1"></div>
            <div className="col-sm-10">
              <div className="card">
                <div className="card-header text-center">Customer No:110400 (KJM)</div>
                <br /><br /><br />
                <div className="card-body">
                  <div className="row">
                    {/*  <div className="col-sm-4"> */}
                    {/*  <div className="form-group "> */}
                    <label className="required">&nbsp;Wanted Delivery Date:</label>
                    &nbsp;&nbsp;&nbsp;
                              <input type="date" width="10" name="date" id="date"
                      /* className="form-control" */
                      placeholder="Enter Date" />&nbsp;&nbsp;
                         {/*  </div>
                          <div className="form-group "> */}
                    <label className="required">Customer's PO No:</label>&nbsp;
                              <input type="text" name="po" id="date" className="" />
                  </div>
                  <ProductTable onProductTableUpdate={this.handleProductTable.bind(this)}
                    onRowAdd={this.handleAddEvent.bind(this)} onRowDel={this.handleRowDel.bind(this)}
                    products={this.state.products} filterText={this.state.filterText} />
                </div>
                <div className="card-footer">
                  <div className="row">
                    <button type="submit" className="">
                      Create Customer Order</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
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
