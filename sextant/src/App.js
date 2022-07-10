
import './App.css';
import {useState,useEffect} from 'react'


function App() {
  const [ip, setIP] = useState('');

  //creating function to load ip address from the API
  const getData = async () => {
    const response = await fetch('https://api64.ipify.org?format=json')
    .then((response) => response.json())
    .then(data => console.log(data));
    console.log(response.data);
    setIP(response.data.IPV4);
    
  }
  
  useEffect( () => {
    //passing getData method to the lifecycle method
    getData()

  }, []);

  return (
    <div className="App">
      <h1>Sextant World</h1>
      <h3>You Are Welcome</h3>
      <h5>Your IP Address is</h5>
      <h6>{ip}</h6>
      
      
    </div>
    
  );
}

export default App;
