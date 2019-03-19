import React from 'react';

class NewInvestorForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: ""
    }

    this.textChange = this.textChange.bind(this);
    this.registerationClick = this.registerationClick.bind(this);

  }

  textChange(event) {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  registerationClick(event) {
    this.props.newInvestor(this.state);
  }


  render() {
    const { name, email } = this.state;
    const { newInvestor } = this.props;
    return (
      <div className="form">
        <form>
          <label> Name: <br/> </label>
            <input id="name" onChange={this.textChange} value={name}></input>
          <label> Name: <br/> </label>
            <input id="email" onChange={this.textChange} value={email}></input>
        </form>
        <button onClick={this.registerationClick}> Submit </button>
      </div>
    );
  }
}

export default NewInvestorForm;