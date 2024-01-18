import { useEffect, useState } from "react"
import logo from './logo.svg';
import './App.css';

import { URL} from "./constants/api.constants"
import axios from "axios"

function App() {

  const [message, setMessage ] = useState("")
  const [error, setError] = useState("")
  useEffect(() => {
    axios.get(`${URL}/test`)
    .then((res) => {
      console.log(res.data)
      setMessage(res?.data)
    })
    .catch(err => {
      console.log(err)
      setError(err)
    }) 
  }, [])
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h4>This is dockerized application !</h4>
        <h3>{message}</h3>
       {error && ( <h4 
        style={{color:"red"}}
        >{JSON.stringify(error)}</h4>)}
      </header>
    </div>
  );
}

export default App;