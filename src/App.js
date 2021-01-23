import React, {useEffect, useState} from 'react';
import axios from 'axios';

//Components
import { NavBar, Content } from './components/AppComponents';
import { Modal } from './components/ModalComponents';
import Loader from './components/UI/Loader';

//Resources
import logo from './nasa-logo.svg';

//Env variables
const NASA_ENDPOINT = process.env.REACT_APP_NASA_ENDPOINT;
const NASA_API_KEY = process.env.REACT_APP_NASA_API_KEY;


function App() {

  //State for result and hover effect
  const [ Data, setData ] = useState({});
  const [hover, setHover] = useState(false);
  const [modal, setModal] = useState(false);

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


    // Functions to handle hover effect on the picture
    const handleMouseOver = () => {
        setHover(true);
        return;
    }

    const handleMouseLeave = () => {
        setHover(false);
        return
    }

    // Function to handle the modal
    const handleClick = () => {
      setModal(!modal);
      return;
    }
  
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
                <div className="image" onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>
                  <div className="img">
                      <img src={Data.url} alt={Data.title}/>
                      <div className={`hover-div ${ hover ? '' : 'hidden'}`} onClick={handleClick} >
                        <p><i className="fas fa-image"></i></p>
                        <p>Full size</p>
                      </div>
                  </div>
                </div>
                <div className="info">
                  <h2>{Data.title}</h2>
                  <p className="date" >{Data.date}</p>
                  <p>{Data.explanation}</p>
                  <p><span class="copyright">Copyright:</span> {Data.copyright}</p>
                </div>

              </Content>
              
            }
        </div>

            {
              modal
              ?
                <Modal>
                  <div className="modal-header">
                    {/* <h2>Full size image</h2> */}
                    <button onClick={handleClick}><span><i class="fas fa-times"></i></span><h2>close</h2></button>
                  </div>
                  <div className="modal-body">
                    <a href={Data.hdurl} target="_blank"><img src={Data.hdurl} /></a>
                  </div>
                </Modal>
              :
              null
            }
      </div>
    </>
  );
}

export default App;
