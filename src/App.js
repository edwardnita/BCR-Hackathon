import React from 'react';
import './style.css';

export default function App() {
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
          <div className="username">
            <div className="username_input">fiedk</div>
          </div>
          <div className="password">
            <div className="password_input">fiedk</div>
          </div>
          <div className="change_login">
            <a href="#">Utilizeaza recunoasterea faciala</a>
          </div>
          <div className="button_login">
            <div className="button">LOGIN</div>
          </div>
        </div>
      </div>
    </div>
  );
}
