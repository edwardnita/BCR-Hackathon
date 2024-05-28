import React, { useState, useRef, useCallback } from 'react';
import Webcam from 'react-webcam';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [facialRec, setFacialRec] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [formIsValid, setFormIsValid] = useState(false);
  const [showCamera, setShowCamera] = useState(false);
  const webcamRef = useRef(null);
  const [imgSrc, setImgSrc] = useState(null);
  let navigate = useNavigate();

  function toggleFacialRec() {
    setFacialRec(!facialRec);
  }

  const handleMailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const toggleShowCamera = () => {
    setShowCamera(false);
  };

  async function loginUser() {
    setFormIsValid(false);
    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!facialRec) {
      setFormIsValid(email.match(regex) && password.trim() != '');
      if (formIsValid) {
        let user_data = {
          email: email,
          password: password,
        };
        const response = await fetch('http://127.0.0.1:5000/auth-by-pass', {
          method: 'POST',
          body: JSON.stringify(user_data),
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const data = await response.json();
        if (data['logged-in']) {
          navigate('/landing', { state: data });
        }
      }
    } else {
      setFormIsValid(email.match(regex));
      if (formIsValid) {
        setShowCamera(true);
        const interval = setInterval(async function () {
          let imageSrc = webcamRef.current.getScreenshot();
          imageSrc = imageSrc.substring(23);
          setImgSrc(imageSrc);
          if (webcamRef != null) {
            let user_data_face = {
              email: email,
              image: imageSrc,
            };
            const response = await fetch('http://127.0.0.1:5000/auth-by-img', {
              method: 'POST',
              body: JSON.stringify(user_data_face),
              headers: {
                'Content-Type': 'application/json',
              },
            });
            const data = await response.json();
            if (data['logged-in'] == true) {
              navigate('/landing', { state: data });
              clearInterval(interval);
            }
          }
        }, 2000);
      }
    }
  }

  return (
    <div className="main">
      <div className="top">
        <div className="top_element">
          <img src="https://i.imgur.com/izJHULq.png" className="image"></img>
        </div>
      </div>
      <div className="content">
        <div className="form">
          <div className="welcome">
            <p className="welcome_text">Bine ai revenit!</p>
          </div>

          {showCamera && (
            <Webcam height={300} ref={webcamRef} className="welcome" />
          )}
          <div className="username">
            <div className="username_input">
              <input
                onChange={handleMailChange}
                placeholder="Username"
                className="username_input_field"
                value={email}
              ></input>
            </div>
          </div>

          {!facialRec && (
            <div className="password">
              <div className="password_input">
                <input
                  onChange={handlePasswordChange}
                  placeholder="Password"
                  className="password_input_field"
                  value={password}
                  type="password"
                ></input>
              </div>
            </div>
          )}
          {!showCamera && (
            <div className="change_login">
              <a onClick={toggleFacialRec} className="change_anchor">
                {!facialRec
                  ? 'Utilizează recunoașterea facială'
                  : 'Inapoi la login cu parola'}
              </a>
            </div>
          )}
          {!showCamera && (
            <div className="button_login">
              <button
                className={facialRec ? 'button_wide' : 'button'}
                onClick={loginUser}
              >
                {!facialRec ? 'Login' : 'Login facial'}
              </button>
            </div>
          )}
          {showCamera && (
            <div className="button_login">
              <button className="button" onClick={toggleShowCamera}>
                Inapoi
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
