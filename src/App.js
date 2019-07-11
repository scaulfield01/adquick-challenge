import React, { Component } from 'react';
import './App.css';
import StartPage from './components/StartPage';
import NameEmailAddress from './components/NameEmailAddress';
import GeoMarket from './components/GeoMarket';
import BudgetDate from './components/BudgetDate';
import ThankYou from './components/ThankYou';

const emailValidation = /[a-zA-Z0-9]{0,}([.]?[a-zA-Z0-9]{1,})[@](gmail.com|hotmail.com|yahoo.com)/g;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      view:  "StartPage",
      currentViewArray: [ "NameEmailAddress", "GeoMarket", "BudgetDate"],
      arrayPostion: 0,
      name:"",
      company:"",
      email: "",
      market:"", 
      budget: "",
      date: "",
      error: false
    }; // StartPage, NameEmailAddress, GeoMarket, BudgetDate, ThankYou
    this.handleinitialStartClick = this.handleinitialStartClick.bind(this);
    this.handleNextClick = this.handleNextClick.bind(this);
    this.handleBackClick = this.handleBackClick.bind(this);
    this.onFormChange = this.onFormChange.bind(this);
    this.validateEmail = this.validateEmail.bind(this);
  }
  render(){
    let elementToShow = <StartPage handleinitialStartClick={this.handleinitialStartClick}/>;
    switch(this.state.view) {
      case "StartPage":
        elementToShow = <StartPage handleinitialStartClick={this.handleinitialStartClick}/>;
        break;
      case "NameEmailAddress":
        elementToShow = (
            <div>
              <NameEmailAddress onFormChange={this.onFormChange} email={this.state.email} company={this.state.company} email={this.state.email}/>
              <button onClick={this.handleNextClick}>next</button>
            </div>
          );
        break;
      case "GeoMarket":
        elementToShow = (
            <div>
              <GeoMarket onFormChange={this.onFormChange}/>
              <button onClick={this.handleBackClick}>back</button>
              <button onClick={this.handleNextClick}>next</button>
            </div>
          );
        break;
      case "BudgetDate":
        elementToShow = (
            <div>
              <BudgetDate onFormChange={this.onFormChange}/>
              <button onClick={this.handleBackClick}>back</button>
            </div>
          );
        break;
      case "ThankYou":
        elementToShow = <ThankYou />;
        break;
    }
    return (
      <div className="App">
        {elementToShow}
        {this.state.error && <h1>Please Enter a Valid Email</h1>}
      </div>

    )
  }
  handleinitialStartClick(e){
    e.preventDefault();
    this.setState({view: "NameEmailAddress"})
  }
  handleBackClick(e){
    e.preventDefault();
    let tempPosition = this.state.arrayPostion - 1;
    this.setState({arrayPostion: tempPosition, view: this.state.currentViewArray[tempPosition]})
  }
  handleNextClick(e){
    e.preventDefault();
    let tempPosition = this.state.arrayPostion + 1;
    this.setState({arrayPostion: tempPosition, view: this.state.currentViewArray[tempPosition]})
  }
  onFormChange(e){
    if(e.target.id === "email"){
      this.validateEmail();
    }
      this.setState({[e.target.id]: e.target.value});  
  }
  validateEmail(){
    if(this.state.email.match(emailValidation)){
      this.setState({error: false});
    } else {
      this.setState({error: true});
    }
  }
}

export default App;
