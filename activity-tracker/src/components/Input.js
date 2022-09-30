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

  handleToggle = (id, name) => {
    let activities = this.state.activities;

    activities.forEach((activity) => {
      if (activity.name === name) {
        activity.days.forEach((day) => {
          if (day.id === id) {
            day.isDone = !day.isDone;
          }
        });
      }
    });
    this.setState({
      activities: activities,
    });
  };

  handleChange = ({ target }) => {
    this.setState({
      inputValue: target.value,
    });
  };

  handleSubmit = (event, index) => {
    event.preventDefault();
    let input = this.state.inputValue;
    let activityArray = [...this.state.activities];

    if (event.target.name === "delete") {
      activityArray.splice(index, 1);
      this.setState({
        activities: [...activityArray],
      });
      return;
    }

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
            <Activity
              data={activity}
              index={index}
              handleDelete={this.handleSubmit}
              handleToggle={this.handleToggle}
            />
          ))}
        </div>
      </>
    );
  }
}

export default Input;
