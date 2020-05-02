import React from "react";

interface IProps {
  toggle: any;
  namess: any;
  toggleTodo: any;
  handleRemove: ()=>void;
}
export class TodoItem extends React.Component<IProps> {
  render() {
    return (
      <li>
        <a
          className={this.props.toggle ? "todo-item todo-done" : "todo-item"}
          onClick={this.props.toggleTodo}
        >
          <i className={this.props.toggle ? "fa fa-check" :  "fa fa-circle-o"}></i>
          
          {this.props.namess}
        </a>
    
        <i  onClick={this.props.handleRemove} className=" fa fa-times text-danger"></i>
      </li>
    );
  }
}
