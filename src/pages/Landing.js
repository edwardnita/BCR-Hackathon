import React from 'react';
import './Landing.css';
const Landing = () => {
  return (
    <div className="main">
      <div className="top">
        <img
          src="https://i.imgur.com/H9qijgJ.png"
          className="logout_zone"
        ></img>
        <div className="top_element_landing">
          <img src="https://i.imgur.com/izJHULq.png" className="image"></img>
        </div>
      </div>
      <div className="content_landing">
        <div className="form_landing">
          <div className="welcome_landing">
            <p className="welcome_text">Bună, Ph0en1x!</p>
          </div>
          <div className="username_landing">
            <div className="username_input_landing">
              <input
                placeholder="Cu ce te pot ajuta?"
                class="username_input_field"
              ></input>
            </div>
            <div className="icons_right">
              <div className="voice_control">
                <img
                  src="https://i.imgur.com/AvAYCLG.png"
                  class="voice_logo"
                ></img>
              </div>
              <div className="send">
                <img
                  src="https://i.imgur.com/XoJ1DUc.png"
                  class="send_logo"
                ></img>
              </div>
            </div>
          </div>
          <div class="lower_part_landing">
            <div class="footer">
              <div className="text_footer">Mai multe informații</div>
            </div>
            <div className="icon_footer">
              <img
                src="https://i.imgur.com/NLmsoZv.png"
                className="low_icon"
              ></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
