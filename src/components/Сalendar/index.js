import React, { Component } from 'react';
import Calendar from 'react-calendar';

import './style.css';
 
class Calend extends Component {
  state = {
    date: new Date(),
  }
 
  onChange = date => this.setState({ date })

  onClickDay = date => {
    
    const dateFormat = this.props.parseDate(date)

    this.props.getPicture(dateFormat);

    const todayDate = new Date();
    const todayDateFormat = this.props.parseDate(todayDate);
  
    if(dateFormat !== todayDateFormat){
      localStorage.setItem('date', dateFormat);
    }else {
      localStorage.removeItem('date')
    }
    
  }

  render() {
    return (
      <div className="calendar">
        <Calendar
          onChange={this.onChange}
          value={this.state.date}
          onClickDay={this.onClickDay}
        />
      </div>
    );
  }
}

export default Calend;