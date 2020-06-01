import React from 'react'
import EditableCell from './EditableCell'
export class ProductRow extends React.Component {
  onDelEvent() {
    this.props.onDelEvent(this.props.product);

  }
  render() {

    return (
      <tr className="eachRow">
        <EditableCell onProductTableUpdate={this.props.onProductTableUpdate} cellData={{
          "type": "salesPortNumber",
          value: this.props.product.salesPortNumber,
          id: this.props.product.id
        }}/>
        
        <EditableCell onProductTableUpdate={this.props.onProductTableUpdate} cellData={{
          type: "quantity",
          value: this.props.product.quantity,
          id: this.props.product.id
        }}/>
        <EditableCell onProductTableUpdate={this.props.onProductTableUpdate} cellData={{
          type: "unitPrice",
          value: this.props.product.unitPrice,
          id: this.props.product.id
        }}/>
        <EditableCell onProductTableUpdate={this.props.onProductTableUpdate} cellData={{
          type: "totalPrice",
          value: this.props.product.totalPrice,
          id: this.props.product.id
        }}/>
        <td className="del-cell">
          <input type="button" onClick={this.onDelEvent.bind(this)} value="X" className="del-btn"/>
        </td>
      </tr>
    );

  }

}