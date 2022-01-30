import './App.css';
import BarChart from './BarChart';
import axios from 'axios'
import { useEffect, useState } from 'react';
import Example from './Example';

function App() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/subregion/europe').then((response)=>{
      setCountries(response.data)
      console.log(response.data);
    })
  }, []);
  
  return (
    <div className="App">
      <BarChart countries={countries}/>
      <h2 style={{fontSize: '36px'}}>Line Chart Example</h2>
      <Example countries={countries}/>
    </div>
  );
}

export default App;
