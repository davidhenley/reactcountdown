import React, { Component } from 'react';

class Clock extends Component {
  state = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  }

  componentWillMount() {
    this.getTimeUntil(this.props.deadline);
  }

  componentDidMount() {
    setInterval(() => {
      this.getTimeUntil(this.props.deadline);
    }, 1000);
  }

  componentWillReceiveProps(nextProps) {
    this.getTimeUntil(nextProps.deadline);
  }

  leading0(num) {
    return num < 10 ? '0' + num : num;
  }

  getTimeUntil(deadline) {
    const time = Date.parse(deadline) - Date.parse(new Date());

    const seconds = Math.floor((time/1000) % 60);
    const minutes = Math.floor((time/1000/60) % 60);
    const hours = Math.floor(time/(1000*60*60) % 24);
    const days = Math.floor(time/(1000*60*60*24));

    this.setState({
      days: this.leading0(days),
      hours: this.leading0(hours),
      minutes: this.leading0(minutes),
      seconds: this.leading0(seconds)
    });
  }

  render() {
    return (
      <div>
        <div className="Time">{this.state.days} day(s)</div>
        <div className="Time">{this.state.hours} hour(s)</div>
        <div className="Time">{this.state.minutes} minute(s)</div>
        <div className="Time">{this.state.seconds} second(s)</div>
      </div>
    );
  }
}

export default Clock;
