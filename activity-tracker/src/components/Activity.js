import React from "react";

class Activity extends React.Component {
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
            {this.props.data.name}
          </h2>
        </aside>
        <div className="flex-70 flex wrap flex-start">
          {this.props.data.days.map((day) => {
            return (
              <button
                onClick={this.props.handleToggle(day.id, this.props.data.name)}
                className={day.isDone ? "checked checkboxes" : "checkboxes"}
              >
                {day.id}
              </button>
            );
          })}
        </div>
        <button
          name="delete"
          onClick={(e) => this.props.handleDelete(e, this.props.index)}
          className="cross"
        >
          ❌
        </button>
      </div>
    );
  }
}

export default Activity;
