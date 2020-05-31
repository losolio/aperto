import React, { Component } from "react";
import { render } from "react-dom";
import Heading from "./Heading";
import OpenBadge from "./OpenBadge";
import "./style.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "React",
      openStatus: false
    };

    const openingTimes = {
      monday: [
        { opens: "08:00", closes: "11:00" },
        { opens: "13:00", closes: "15:00" }
      ],
      tuesday: [{ opens: "09:00", closes: "17:30" }],
      wednesday: [{ opens: "09:00", closes: "03:00" }],
      thursday: [{ opens: "09:00", closes: "16:00" }],
      friday: [{ opens: "09:00", closes: "16:30" }],
      saturday: [{ opens: "09:00", closes: "16:30" }],
      sunday: [{ opens: "09:00", closes: "16:00" }]
    };
  }

  render() {
    return (
      <div>
        <Heading title="Er det åpent?" />
        <OpenBadge status={this.state.openStatus} />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
