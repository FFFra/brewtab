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

  render: function () {
    return (
      <div className="tab">    
        <Header title={this.props.title}/>
        <div className="total-container">
          <div className="total-text">Total</div>  
        </div>  
        <div className="customers">
          {this.state.customers.map(function(customer) {
          return <Customer name={customer.name} quantity={customer.quantity} amount={customer.amount} key={customer.id} />
          })}
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
      <Quantity quantity={props.quantity}/>            
    </div>
    <div className="amount-field">
      <Amount amount={props.amount}/>
    </div>
  </div>  
  );
}


function Quantity (props) {
  return(
      <div className="counter">
        <button className="counter-action decrement">-</button>
          <div className="counter-score"> {props.quantity} </div>
        <button className="counter-action increment">+</button>
      </div>
  );
}

Quantity.propTypes = {
  quantity: PropTypes.number.isRequired
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
