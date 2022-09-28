import React from "react";
import Activity from "./Activity";
import { emptyMonth, month } from "../data";
class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activities: [],
      inputValue: "",
    };
  }
  handleChange = ({ target }) => {
    this.setState({
      inputValue: target.value,
    });
  };

  handleSubmit = (event, index) => {
    event.preventDefault();
    let input = this.state.inputValue;
    // let activityArray = [...this.state.activities];

    if (input) {
      this.setState(
        (prevState) => {
          return {
            activities: prevState.activities.concat([
              {
                name: input,
                days: [...emptyMonth],
              },
            ]),
          };
        },
        () => {
          this.setState({ inputValue: "" });
        }
      );
    }
  };

  render() {
    console.table(this.state.activities);
    return (
      <>
        <div>
          <form className="flex">
            <input
              type="text"
              placeholder="e.g. Trekking"
              name="activity"
              value={this.state.inputValue}
              onChange={this.handleChange}
            />
            <button className="submit-btn" onClick={this.handleSubmit}>
              Add Activity
            </button>
          </form>
        </div>
        <div>
          {this.state.activities.map((activity, index) => (
            <Activity data={activity} index={index} />
          ))}
        </div>
      </>
    );
  }
}

export default Input;
