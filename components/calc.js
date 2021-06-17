import React from 'react'

export class CalcForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('A name was submitted: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Total Price:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <label>
            Downpayment Amount:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <label>
            Mortgage Amount:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <label>
            Interest Rate (%):
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <label>
            Mortgage period (years):
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <div className="totals">
            <div>Total cost of morgage: {}</div>
            <div>Monthy cost: {}</div>  
          </div>
        </form>
        <style jsx>{`
            form {
              display: flex;
              flex-wrap: wrap;
              max-width: 622px;
              width: 100%;
            }
            input {
              display: block;
              margin-top: 8px;
              padding: 6px 14px;
              border-radius: 4px;
              border: 1px solid black;
              max-width: 160px;
            }
            label {
              margin: 0 20px 20px 0;
            }
            .totals {
              display: block;
            }
            `}</style>
        </div>
      );
    }
  }