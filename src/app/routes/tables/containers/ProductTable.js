import React from 'react'
import {ProductRow} from './ProductRow'
export class ProductTable extends React.Component {

  render() {
    var onProductTableUpdate = this.props.onProductTableUpdate;
    var rowDel = this.props.onRowDel;
    var filterText = this.props.filterText;
    var product = this.props.products.map(function(product) {
      return (<ProductRow onProductTableUpdate={onProductTableUpdate} product={product} onDelEvent={rowDel.bind(this)} key={product.id}/>)
    });
    return (
      <div>


      <button type="button" onClick={this.props.onRowAdd} >Add</button>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Sales Part Number</th>
              <th>Quantity</th>
              <th>UnitPrice</th>
              <th>TotalPrice</th>
            </tr>
          </thead>

          <tbody>
            {product}

          </tbody>

        </table>
      </div>
    );

  }

}