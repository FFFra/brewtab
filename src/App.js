import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import registerServiceWorker from './registerServiceWorker';

var createReactClass = require('create-react-class');

var CUSTOMERS = [

	{
		name : "Rodrigo",
		quantity: 7,
		amount: 12.33,
		id: 1,
	},
	{
		name : "Zé Branco",
		quantity: 16,
		amount: 23.13,
		id: 2,
	},
	{
		name : "Frá",
		quantity: 21,
		amount: 43.83,
		id: 3,
	},

];

var Application = createReactClass({

  propTypes:{
    title: PropTypes.string,
    initialCustomers: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      quantity: PropTypes.number.isRequired,
      amount: PropTypes.number.isRequired,
      id: PropTypes.number.isRequired
    })).isRequired,
  },

  getDefaultProps: function () {
    return {
      title: "Viella's Brew Tab"
    };
  },

  getInitialState: function () {
    return {
      customers: this.props.initialCustomers,
    };
  },

  onQuantityChange: function (index, delta) {
		const customers = this.state.customers
		customers[index].quantity += delta
    this.setState({ customers });
  },

  onAmountChange: function(index, delta) {
		const customers = this.state.customers
		customers[index].amount += delta
		this.setState({ customers })
    // console.log('onAmountChange', index, delta);
    // this.state.customers[index].amount += delta;
    // this.setState(this.state);
  },

  render: function () {
    return (
      <div className="tab">
        <Header title={this.props.title}/>
        <div className="total-container">
          <div className="total-text">Total</div>
        </div>
        <div className="customers">
          {this.state.customers.map(function(customer, index) {
          return (
          <Customer
          onQuantityChange = {function(delta) {this.onQuantityChange (index, delta)}.bind(this)}
          onAmountChange = {function(delta) {this.onAmountChange (index, delta)}.bind(this)}
          name={customer.name}
          quantity={customer.quantity}
          amount={customer.amount}
          key={customer.id}
          />
          );
          }.bind(this))}
        </div>
      </div>
    );
  },
});



function Header (props) {
  return(
    <div className="header">
      <h1>{props.title}</h1>
    </div>
  );
}

const Customer = createReactClass({

	propType: {
  	name: PropTypes.string.isRequired,
		quantity: PropTypes.number.isRequired,
		amount: PropTypes.number.isRequired,
  	onQuantityChange: PropTypes.func.isRequired,
  	onAmountChange: PropTypes.func.isRequired,
	},

	render () {
		const { name, quantity, amount, onQuantityChange, onAmountChange } = this.props

		return (
			<div className="customer">
				<div className="customer-name"> {name}
			</div>
			<div className="customer-score">
				<Quantity quantity={quantity} onChange={onQuantityChange} amountChange={onAmountChange}/>
			</div>
			<div className="amount-field">
				<Amount amount={amount} amountChange={onAmountChange}/>
			</div>
		</div>
		)
	}
})

const Quantity = createReactClass({
	propTypes: {
		quantity: PropTypes.number.isRequired,
		onChange: PropTypes.func.isRequired,
		amountChange: PropTypes.func.isRequired,
	},
	render () {
		const { onChange, amountChange, quantity } = this.props
		return (
			<div className="counter">
        <button className="counter-action decrement" onClick={function(){onChange(-1); {amountChange(-10)}}}>-</button>
          <div className="counter-score"> {quantity} </div>
        <button className="counter-action increment" onClick={function(){onChange(+1); {amountChange(+10)}}}>+</button>
      </div>
		)
	}
})


function Amount(props){
  return(
      <div className="amount-value">R${props.amount} </div>
  );
}

Amount.propTypes={
    amount: PropTypes.number.isRequired,
    amountChange: PropTypes.func.isRequired,
}


ReactDOM.render(<Application initialCustomers={CUSTOMERS}/>, document.getElementById('root'));
registerServiceWorker();

export default Application;
