import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";

function App() {
  // State for application
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState('');
  const [message, setMessage] = useState('');
  //general calculator
  

  const [digit1, setdigit1] = useState(0);
  const [digit2, setdigit2] = useState(0);
  const [result, setresult] = useState(0);
  const [operation, setOperation] = useState('');

  // Logic to calculate BMI
  let calcBmi = (e) => {
    e.preventDefault();
    
    if (weight <= 0 || height <= 0) {
      alert('Please enter valid values');
    } else {
      let bmi = (weight / (height * height)) * 703;
      setBmi(bmi.toFixed(1));

      if (bmi < 25) {
        setMessage('You are underweight');
      } else if (bmi >= 25 && bmi < 30) {
        setMessage('You are at a healthy weight');
      } else {
        setMessage('You are overweight');
      }
    }
  };

  // Reload the page
  let reload = () => {
    window.location.reload();
  };


  
  // Logic calculator
  const calculator = (e) => {
    e.preventDefault();

    

    switch (operation) {
      case 'add':
        setresult((digit1 + digit2).toFixed(1));
        break;
      case 'subtract':
        setresult((digit1 - digit2).toFixed(1));
        break;
      case 'multiply':
        setresult((digit1 * digit2).toFixed(1));
        break;
      case 'divide':
        
          setresult((digit1 / digit2).toFixed(1));
       
        break;
      default:
        setresult('Please select an operation');
    }


  }
  return (
    <div className="App">
      <div className="container">
        <h2>BMI Calculator</h2>
        <form onSubmit={calcBmi}>
          <div>
            <label>Weight</label>
            <input
              type='text'
              placeholder="Enter weight value"
              value={weight}
              onChange={(e) => setWeight(Number(e.target.value))}
            />
          </div>
          <div>
            <label>Height</label>
            <input
              type='text'
              placeholder="Enter height value"
              value={height}
              onChange={(e) => setHeight(Number(e.target.value))}
            />
          </div>
          <div>
            <button className="btn" type="submit">Submit</button>
            <button className="btn btn-outline" type="button" onClick={reload}>Reload</button>
          </div>
          <div className='center'>
            <h3>Your BMI is: {bmi}</h3>
            <p>{message}</p>
          </div>
        </form>
      </div>


      <h3>General Calculator</h3>
      <form onSubmit={calculator}>
        <input
          type='number'
          placeholder="Enter first digit"
          value={digit1}
          onChange={(e) => setdigit1(e.target.value)}
        />
        <input
          type='number'
          placeholder="Enter second digit"
          value={digit2}
          onChange={(e) => setdigit2(e.target.value)}
        />
        <button type="submit">Calculate</button>
      </form>
      <div>
        <button onClick={() => setOperation('add')}>+</button>
        <button onClick={() => setOperation('subtract')}>-</button>
        <button onClick={() => setOperation('multiply')}>*</button>
        <button onClick={() => setOperation('divide')}>/</button>
      </div>
      <div className='center'>
        <h3>Result: {result}</h3>
      </div>
    

      </div>

      


  );
}

export default App;

