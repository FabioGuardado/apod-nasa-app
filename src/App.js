import React, {useEffect, useState} from 'react';
import axios from 'axios';

//Components
import { NavBar, Content } from './components/AppComponents';
import Loader from './components/UI/Loader';

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
    <div className="wrapper container">
        <NavBar>
          <div className="title">
            <img src={logo} alt="logo"/>
            <span>apod api</span>
          </div>
        </NavBar>

        <div>
          {
            Object.keys(Data).length === 0 
            ?
              <Loader />
            :
              <Content>
                <div className="image">
                  <img src={Data.url} alt={Data.title}/>
                </div>
                <div className="info">
                  <h2>{Data.title}</h2>
                  <p className="date" >{Data.date}</p>
                  <p>{Data.explanation}</p>
                </div>
              </Content>
          }
        </div>

      </div>
    </>
  );
}

export default App;
