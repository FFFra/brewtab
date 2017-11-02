import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import {Grid, Jumbotron} from 'react-bootstrap';

class App extends Component {
   constructor(props) {
    super(props);
  }

 

  render() {
    return (
      
        <div className="tab">
          
          <Header title={this.props.title}/>

          <div className="total-container">
            <div className="total-text">Total</div>  
          </div>  

          <div className="customers">
            <div className="customer">
              <div className="customer-name">
               Frá
              </div>
              <div className="customer-score">
                <div className="counter">
                  <button className="counter-action decrement">-</button>
                    <div className="counter-score"> 31 </div>
                  <button className="counter-action increment">+</button>
                </div>           
              </div>
              <div className="amount-field">
                <div className="amount-value"> R$43,00 </div>
              </div>
            </div>     
          </div>  


          <div className="customers">
            <div className="customer">
              <div className="customer-name">
               Random Drunk Guy
              </div>
              <div className="customer-score">
                <div className="counter">
                  <button className="counter-action decrement">-</button>
                    <div className="counter-score"> 11 </div>
                  <button className="counter-action increment">+</button>
                </div>
              </div>
              <div className="amount-field">
                <div className="amount-value"> R$52,00</div>
              </div>
            </div>   
          </div>  
        </div> 
    );
  }
}


Header.propTypes = {
  title: PropTypes.string.isRequired,
    
};

App.defaultProps = {

};

function Header (props) {
  return(
    <div className="header">
      <h1>{props.title}</h1>
    </div>
  );
}

export default App;
