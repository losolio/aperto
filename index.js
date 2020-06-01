import React, { Component } from "react";
import { render } from "react-dom";
import moment from "moment-timezone"
import Heading from "./Heading";
import OpenBadge from "./OpenBadge";
import "./style.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      nameOfPlace: "Leiligheta",
      openNow: false,
      nextOpen: Date.now()
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
    const title = `Er ${this.state.nameOfPlace} åpen`;
    var locale = window.navigator.userLanguage || window.navigator.language;
    moment.locale(locale);

    return (
      
      <div>
        <Heading title={title} />
        <OpenBadge status={this.state.openNow} />
        <p>Locale: {locale}</p>
        <p>Now: {moment(Date.now()).format('DD.MM.YYYY HH:MM')}</p>
        <p>{moment(this.props.nextOpen).format('DD.MM.YYYY HH:MM')}</p>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
