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
          <div className="response">
            <div className="response_input_landing" id="response_field">
              <div className="test">Răspuns:</div>
            </div>
          </div>
          <div class="lower_part_landing">
            <div class="footer">
              <div className="text_footer">Mai multe informații</div>
            </div>
            <a href="#scroll">
              <div className="icon_footer">
                <img
                  src="https://i.imgur.com/NLmsoZv.png"
                  className="low_icon"
                ></img>
              </div>
            </a>
            <div className="second_page" id="scroll">
              <div className="title_second_page">Conturile tale:</div>
              <div className="account_container">
                <div className="account_zone_1">
                  <div className="account_holder_1">
                    <div className="account_info_1">1</div>
                    <div className="account_history_1">1</div>
                  </div>
                </div>
                <div className="account_zone_2">
                  <div className="account_holder_2">
                    <div className="account_info_2">2</div>
                    <div className="account_history_2">1</div>
                  </div>
                </div>
                <div className="account_zone_3">
                  <div className="account_holder_3">
                    <div className="account_info_3">3</div>
                    <div className="account_history_3">1</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
