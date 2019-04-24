import React from 'react';

class EnterMinutes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      minutes: 0,
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  handleOnSubmit(e) {
    e.preventDefault();
    let min = this.state.minutes;
    this.props.handleSubmit(min);
  }


  render() {
    const {
      minutes
    } = this.state;
    return (<div>
    <form onSubmit={this.handleOnSubmit}>
    <label>How many minutes?</label>
      <input type='text' name='minutes' value={minutes} onChange={this.handleChange} >
      </input>
      <input value='Submit' type='submit' name='submit'/>
    </form>
    </div>)
  }

}

export default EnterMinutes;