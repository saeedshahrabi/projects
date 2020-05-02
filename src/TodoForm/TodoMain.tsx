import React from "react";
import Header from "./TodoForm";
import { TodoItem } from "./TodoItem";

var currentid: any = 1;
interface IProps {
  inputValue: any;
  namess: any;
}

interface IState {
  todo: Array<{
    id: number;
    done: boolean;
    names: string;
  }>;
}

export class TodoMain extends React.Component<IProps, IState, any> {
  static defaultProps: IProps = {
    inputValue: "",
    namess: "",
  };
  state = {
    todo: [
      {
        names: "practice makes perfect",
        id: 0,
        done: false,
      },
    ],
  };
  // value of input (saeed)
  callback = (text: any): void => {
    this.setState({
      todo: [...this.state.todo, { names: text, done: false, id: currentid }],
    });
    currentid++;
  };
  //toggle Todo (saeed)
  toggle = (id: any): void => {
    let newArray = [...this.state.todo];
    for (let i = 0; i < newArray.length; i++) {
      if (newArray[i].id === id) {
        newArray[i].done = !newArray[i].done;
      }
    }
    this.setState({
      todo: newArray,
    });
  };

  handleRemove = (id: any) => {
    let removes = [...this.state.todo];
    const newTodo = removes.filter((item) => (item.id !== id ? item : null));
    console.log(newTodo);
    this.setState({
      todo: [...newTodo],
    });
  };

  //Delete all (saeed )
  DeleteAll = () => {
    this.setState({
      todo: [],
    });
  };

  render() {
    return (
      <div className="container">
        <div className="row m-5 row1">
          <div className="col-md-4 heights"></div>
          <div className="col-md-8 heights">
            <Header inputValue={this.callback} />
            <div>
              <button className="deleteall" onClick={this.DeleteAll}>
                Delete all
              </button>
            </div>
            <ul className="ul_todo">
              {this.state.todo.map((item) => (
                <TodoItem
                  key={item.id}
                  toggle={item.done}
                  namess={item.names}
                  toggleTodo={() => {
                    this.toggle(item.id);
                  }}
                  handleRemove={() => this.handleRemove(item.id)}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
