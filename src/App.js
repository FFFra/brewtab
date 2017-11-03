import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

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



  function Application(props) {
    return (

      <div className="tab">    
        <Header title={props.title}/>
        <div className="total-container">
          <div className="total-text">Total</div>  
        </div>  
        <div className="customers">
          {props.customers.map(function(customer) {
          return <Customer name={customer.name} quantity={customer.quantity} amount={customer.amount} key={customer.id} />
          })}

        </div>   
      </div> 
    );
  }



Application.propTypes = {
  customers: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    amount: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired
  })).isRequired,
  
}


function Header (props) {
  return(
    <div className="header">
      <h1>{props.title}</h1>
    </div>
  );
}

Header.propTypes = {
  title: PropTypes.string,   
};

Header.defaultProps = {
  title: "Viella's Brew Tab"
};


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



function Quantity(props){
  return(
    <div className="counter">
      <button className="counter-action decrement">-</button>
        <div className="counter-score"> {props.quantity} </div>
      <button className="counter-action increment">+</button>
    </div>
  );
}

Quantity.propTypes = {
  quantity: PropTypes.number.isRequired,
}


function Amount(props){
  return(
      <div className="amount-value">R${props.amount} </div>
  );
}

Amount.propTypes={
    amount: PropTypes.number.isRequired,
}


ReactDOM.render(<Application customers={CUSTOMERS}/>, document.getElementById('root'));
registerServiceWorker();
 
export default Application;
