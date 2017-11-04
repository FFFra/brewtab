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
    console.log('onQuantityChange', index, delta);
    this.state.customers[index].quantity += delta;
    this.setState(this.state);
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


function Customer(props){
  return(
  <div className="customer">
    <div className="customer-name">
     {props.name}
    </div>
    <div className="customer-score">
      <Quantity quantity={props.quantity} onChange={props.onQuantityChange}/>            
    </div>
    <div className="amount-field">
      <Amount amount={props.amount}/>
    </div>
  </div>  
  );
}

Customer.propTypes = {
  name: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  onQuantityChange: PropTypes.func.isRequired,
}


function Quantity (props) {
  return(
      <div className="counter">
        <button className="counter-action decrement" onClick={function(){props.onChange(-1);}}>-</button>
          <div className="counter-score"> {props.quantity} </div>
        <button className="counter-action increment" onClick={function(){props.onChange(+1);}}>+</button>
      </div>
  );
}

Quantity.propTypes = {
  quantity: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
}


function Amount(props){
  return(
      <div className="amount-value">R${props.amount} </div>
  );
}

Amount.propTypes={
    amount: PropTypes.number.isRequired,
}


ReactDOM.render(<Application initialCustomers={CUSTOMERS}/>, document.getElementById('root'));
registerServiceWorker();
 
export default Application;
