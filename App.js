
import './App.css';
import React,{useState} from 'react';

function App() {
  const[weight,setWeight] = useState(0);
  const[height,setHeight] = useState(0);
  const[bmi, setBmi] = useState('');
  const[message,setMessage] = useState('');

  let calcBmi = (e) => {
    
    e.preventDefault();
    if(weight ===0 || height ===0)
      {
      alert("Please enter valid weight & height");
    }
    else{
      let bmi = (weight/(height*height)*703)
      setBmi(bmi.toFixed(1))
      
      if(bmi<25){
        setMessage('You are under weight')
      }
      else if (bmi>=25 && bmi < 30){
        setMessage('You are a heavy Weight Person')
      }
      else{
        setMessage('You are Healthy weight')
      }
    }
  }

  let reload = () =>{
    window.location.reload()
  }

  return (
    <div className="App">

      <div class="container">
        <h2>BMI CALCULATOR</h2>
        <form onSubmit={calcBmi}>
          <div>
            <label>Weight (lbs)</label>
            <input type='text' placeholder='Enter weight value' value={weight}
            onChange={(e) => setWeight(e.target.value)} />
          </div>
          <div>
            <label>Height (inch)</label>
            <input type='text' placeholder='Enter height value' value={height} 
            onChange={(e) => setHeight(e.target.value)}/>
          </div>
          <div>
            <button class="btn" type="submit">Submit</button>
            <button class="btn btn-outline" onClick={reload} type='submit'>Reload</button>
          </div>
          <div class="center">
            <h3>Your BMI is:{bmi}</h3>
            <p>{message}</p>
          </div>

        </form>
      </div>

    </div>
  );
}

export default App;
