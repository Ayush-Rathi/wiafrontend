import React from 'react'
export default class EditableCell extends React.Component {
  render() {
      if (this.props.cellData.tag === "textarea")
          return (
              <td>
                  <textarea style={this.props.cellData.style} name={this.props.cellData.type} id={this.props.cellData.id} 
                      value={this.props.cellData.value} onChange={this.props.onProductTableUpdate}
                  />
              </td>
          )
      return (
          <td>
              <input style={this.props.cellData.style} type='text' name={this.props.cellData.type} id={this.props.cellData.id} 
                  value={this.props.cellData.value} onChange={this.props.onProductTableUpdate}
              />
          </td>
      )

  }
}