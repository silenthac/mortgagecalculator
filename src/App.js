import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [data,setData] = useState({
    principle : '',
    interest : '',
    years : ''
  })

  const [answer,setanswer] = useState('');

  const handleChange = (e)=>{
    setanswer('');
  console.log("HIII")


    setData({...data,[e.target.name]: e.target.value})


  }

  const calculateEmi = (e) =>{
    e.preventDefault();
    console.log("Hii")
    const principle = parseFloat(data.principle);
    const interest = parseFloat(data.interest);
    const years = parseFloat(data.years);
    if(!principle||!interest||!years)
    {
      alert("Hii Please Provide all the values");
      return;
    }

    const EMI = (principle * interest * Math.pow(1 + interest, years)) /
    (Math.pow(1 + interest, years) - 1);

    setanswer(EMI.toFixed(2))
    

  }

  return (
    <div className="App">
      <h1>Mortgage Calculator</h1>
      <div className='inputs'>
        <p>Principle Loan Amount:</p>
        <input type='number' name='principle' placeholder='Principle' required value={data.principle} onChange={handleChange}/>
        <p>Interest rate:</p>
        <input type='number' name='interest' placeholder='Interest Rate' value={data.interest} required onChange={handleChange}/>
        <p>Years:</p>
        <input type='number' name='years' placeholder='Years' value={data.years} required onChange={handleChange}/>
      
      </div>
      <div className='output'>
      <button onClick={calculateEmi}>Calculate</button>
      </div>
      <div className='output'>
       
        Your EMI is {answer}
      </div>

    </div>
  );
}

export default App;
