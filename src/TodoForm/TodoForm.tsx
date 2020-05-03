import React from "react";


             
interface IProps {
  inputValue: any;
}

interface IState {
  list: string;
}

export default class Header extends React.Component<IProps, IState> {
  static defaultProps: IProps = {
    inputValue: "",
  };

  state = {
    list: "",
  };
  //handeling input value (saeed)
  inputHandler = (e: any): void => {
    // return true;
    this.setState({
      list: e.target.value,
    });
  };
  //submit key (saeed)
  HandleSubmit = (e: any) => {
    if (this.state.list !== "") {
      this.props.inputValue(this.state.list);
    }
    this.setState({ list: "" });
  };
  //for enter key  (saeed)
  keyPressed = (event: any) => {
    if (this.state.list !== "") {
      if (event.keyCode === 13) {
        this.props.inputValue(this.state.list);
        this.setState({ list: "" });
      }
    }
  };
  render() {
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1 className="title">Change my life</h1>
              <div className="input-group inputs_name">
                <input
                  onKeyUp={this.keyPressed}
                  type="text"
                  className="form-control"
                  value={this.state.list}
                  onChange={this.inputHandler}
                  placeholder="Enter your task ..."
                />
                <div className="input-group-append">
                  <button
                    id="btns"
                    onClick={this.HandleSubmit}
                    className="fa fa-location-arrow btn_blue"
                  ></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
