import React, {useEffect, useState} from 'react';
import axios from 'axios';

//Components
import { NavBar } from './components/AppComponents';

//Resources
import logo from './nasa-logo.svg';

//Env variables
const NASA_ENDPOINT = process.env.REACT_APP_NASA_ENDPOINT;
const NASA_API_KEY = process.env.REACT_APP_NASA_API_KEY;


function App() {

  //State for result
  const [ Data, setData ] = useState({});

  //UseEffect to fecth the API
  useEffect(() => {
    const requestAPI = () => {
      axios.get(`${NASA_ENDPOINT + 'api_key=' + NASA_API_KEY}`)
      .then( function (response) {
        setData(response.data);
      });
    }

    requestAPI();
  }, []);


  // API FETCH IS OK!!!
  console.log(Data);
  
  return (
    <>
    <div className="container">
      <NavBar>
          <div className="title">
            <img src={logo} alt="logo" height="120px"/>
            <span>apod api</span>
          </div>
        </NavBar>
      </div>
    </>
  );
}

export default App;
