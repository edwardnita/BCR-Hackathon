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
            <p className="status_text">Nu fi trist, maine intra slaarrul!</p>
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
                    <div className="account_info_1">
                      <div className="account_name_1">Cont curent</div>
                      <div className="account_sold_pozitiv_1">
                        999,<p id="smaller">99 RON</p>
                      </div>
                    </div>
                    <div className="account_history_1">
                      <div className="account_history_title">Tranzacții</div>
                      <div className="account_history_content">
                        <div className="pozitive_entry">+10 lei - Vlad</div>
                        <div className="negative_entry">-75 lei - Laur</div>
                        <div className="pozitive_entry">+23 lei - Laur</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="account_zone_2">
                  <div className="account_holder_2">
                    <div className="account_info_2">
                      <div className="account_name_2">Cont economii</div>
                      <div className="account_sold_pozitiv_2">
                        999,<p id="smaller">99 RON</p>
                      </div>
                    </div>
                    <div className="account_history_2">
                      <div className="account_history_title">Tranzacții</div>
                      <div className="account_history_content">
                        <div className="pozitive_entry">+10 lei - Vlad</div>
                        <div className="negative_entry">-75 lei - Laur</div>
                        <div className="pozitive_entry">+23 lei - Laur</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="account_zone_3">
                  <div className="account_holder_3">
                    <div className="account_info_3">
                      <div className="account_name_3">Cont credit</div>
                      <div className="account_sold_negativ_3">
                        -999,<p id="smaller">99 RON</p>
                      </div>
                    </div>
                    <div className="account_history_3">
                      <div className="account_history_title">Tranzacții</div>
                      <div className="account_history_content">
                        <div className="pozitive_entry">+10 lei - Vlad</div>
                        <div className="negative_entry">-75 lei - Laur</div>
                        <div className="pozitive_entry">+23 lei - Laur</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="third_page">
              <div className="title_third_page">Contul tău:</div>
              <div className="big_account_container">
                <div className="big_account_zone">
                  <div className="big_account_holder">
                    <div className="account_info_1">
                      <div className="account_name_1">Cont curent</div>
                      <div className="account_sold_pozitiv_1">
                        999,<p id="smaller">99 RON</p>
                      </div>
                    </div>
                    <div className="big_account_history">
                      <div className="big_account_history_title">
                        Tranzacții
                      </div>
                      <div className="big_account_history_content">
                        <div className="pozitive_entry">+10 lei - Vlad</div>
                        <div className="negative_entry">-75 lei - Laur</div>
                        <div className="pozitive_entry">+23 lei - Laur</div>
                        <div className="pozitive_entry">+23 lei - Laur</div>
                      </div>
                    </div>
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
