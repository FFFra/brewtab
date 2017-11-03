import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import {Grid, Jumbotron} from 'react-bootstrap';


class App extends Component {

   constructor(props) {
    super(props);
  }


    CUSTOMERS = [

    {
      name : "Frá",
      quantity: 15,
      amount: 13.53,
    },
    {
      name : "Frá",
      quantity: 15,
      amount: 13.53,
    },  
    
  ]  


  render() {
    return (
      
      <div className="tab">
        
        <Header title={this.props.title}/>

        <div className="total-container">
          <div className="total-text">Total</div>  
        </div>  

        <div className="customers">
          <Customer name="whatever" quantity={55} amount={12.51}/> 
          <Customer name="whatever" quantity={55} amount={12.51}/> 
        </div>   
      </div> 
    );
  }

}

App.propTypes = {
  customers: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    amount: PropTypes.number.isRequired,
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

Customer.propTypes = {
  customers: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    quantity: PropTypes.number.isRequired,
    amount: PropTypes.number.isRequired,
  })).isRequired,
};


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



 
export default App;
