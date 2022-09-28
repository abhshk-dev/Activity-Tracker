import React from "react";
import { emptyMonth, month } from "../data";
class Activity extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div
        className="container flex align-center"
        style={{
          backgroundColor: "#ebebeb",
          width: "1000px",
          height: "200px",
          margin: "24px auto",
        }}
      >
        <aside className=" flex-25">
          <h2 style={{ color: "rgb(50, 48, 48)", fontSize: "32px" }}>
            {this.props.data}
          </h2>
        </aside>
        <div className="flex-70">
          {this.props.data.days.map((day) => {
            return <button className="checkboxes">{day.id}</button>;
          })}
        </div>
      </div>
    );
  }
}

export default Activity;
