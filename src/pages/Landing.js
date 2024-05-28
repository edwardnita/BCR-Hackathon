import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Landing.css';

const Landing = () => {
  const { state } = useLocation();
  const name = state['user']['name'];
  const message = state['message'];
  const sold = state['user']['sold'];
  const [question, setQuestion] = useState('');
  const [askedQuestion, setAskedQuestion] = useState(false);
  const [answer, setAnswer] = useState('');
  const [showCurent, setShowCurent] = useState(false);
  const [showEconomies, setShowEconomies] = useState(false);
  const [showCredit, setShowCredit] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [soldCurent, setSoldCurent] = useState(sold['curent']);
  const [soldEconomii, setSoldEconomii] = useState(sold['economii']);
  let navigate = useNavigate();

  const logout = () => {
    navigate('/login');
  };

  async function askHelp() {
    setAskedQuestion(true);
    let user_data = {
      user: state['user'],
      text: question,
    };
    const response = await fetch('http://127.0.0.1:5000/ans-q', {
      method: 'POST',
      body: JSON.stringify(user_data),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    setAnswer(data['predict']);
    setSoldCurent(data['curent']);
    setSoldEconomii(data['economii']);
  }

  const handleQuestionChange = (event) => {
    setQuestion(event.target.value);
  };

  const toggleShowCurent = () => {
    setShowCurent(!showCurent);
  };

  const toggleShowEconomies = () => {
    setShowEconomies(!showEconomies);
  };

  const toggleShowCredit = () => {
    setShowCredit(!showCredit);
  };

  useEffect(() => {
    let recognition;

    const startListening = () => {
      setIsListening(true);
      recognition = new window.webkitSpeechRecognition();
      recognition.lang = 'ro-RO';

      recognition.start();
      recognition.onresult = handleSpeechRecognitionResult;
    };

    const stopListening = () => {
      setIsListening(false);
      recognition.stop();
      recognition.onresult = null;
    };

    const handleSpeechRecognitionResult = async (event) => {
      const result = event.results[event.results.length - 1];
      const text = result[0].transcript;
      const text_nou = text.replace('buchet', 'buget');
      setQuestion(text_nou);
      setAskedQuestion(true);
      let user_data = {
        user: state['user'],
        text: text_nou,
      };
      const response = await fetch('http://127.0.0.1:5000/ans-q', {
        method: 'POST',
        body: JSON.stringify(user_data),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      setAnswer(data['predict']);
    };

    if (isListening) {
      const recognitionTimeout = setTimeout(() => {
        stopListening();
      }, 6000);

      startListening();

      return async () => {
        clearTimeout(recognitionTimeout);
        stopListening();
      };
    }
  }, [isListening]);

  return (
    <div className="main">
      <div className="top" onClick={logout}>
        <img
          className="logout_zone"
          src="https://i.imgur.com/H9qijgJ.png"
        ></img>
        <div className="top_element_landing">
          <img src="https://i.imgur.com/izJHULq.png" className="image"></img>
        </div>
      </div>
      <div className="content_landing">
        <div className="form_landing">
          <div className="welcome_landing">
            <p className="welcome_text">Bună, {name}!</p>
            <p className="status_text">{message}</p>
          </div>
          <div className="username_landing">
            <div className="username_input_landing">
              <input
                placeholder="Cu ce te pot ajuta?"
                className="username_input_field"
                value={question}
                onChange={handleQuestionChange}
              ></input>
            </div>
            <div
              className="icons_right"
              onClick={() => setIsListening(true)}
              disabled={isListening}
            >
              <div className="voice_control">
                <img
                  src="https://i.imgur.com/AvAYCLG.png"
                  className="voice_logo"
                ></img>
              </div>
              <div className="send">
                <img
                  onClick={askHelp}
                  src="https://i.imgur.com/XoJ1DUc.png"
                  className="send_logo"
                ></img>
              </div>
            </div>
          </div>
          {askedQuestion && (
            <div className="response">
              <div className="response_input_landing" id="response_field">
                <div className="test">Răspuns:</div>
                <div className="test">{answer}</div>
              </div>
            </div>
          )}
          <div className="lower_part_landing">
            <div className="footer">
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
            {!showCurent && !showEconomies && !showCredit && (
              <div className="second_page" id="scroll">
                <div className="title_second_page">Conturile tale:</div>
                <div className="account_container">
                  <div className="account_zone_1" onClick={toggleShowCurent}>
                    <div className="account_holder_1">
                      <div className="account_info_1">
                        <div className="account_name_1">Cont curent</div>
                        <div className="account_sold_pozitiv_1">
                          {soldCurent},<p id="smaller">00 RON</p>
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

                  <div className="account_zone_2" onClick={toggleShowEconomies}>
                    <div className="account_holder_2">
                      <div className="account_info_2">
                        <div className="account_name_2">Cont economii</div>
                        <div className="account_sold_pozitiv_2">
                          {soldEconomii},<p id="smaller">00 RON</p>
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

                  <div className="account_zone_3" onClick={toggleShowCredit}>
                    <div className="account_holder_3">
                      <div className="account_info_3">
                        <div className="account_name_3">Cont credit</div>
                        <div className="account_sold_negativ_3">
                          {sold['credit']},<p id="smaller">00 RON</p>
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
            )}
            {showCurent && (
              <div className="third_page">
                <div className="title_third_page">Contul tău:</div>
                <div className="big_account_container">
                  <div className="big_account_zone">
                    <div className="big_account_holder">
                      <div className="account_info_1">
                        <div className="account_name_1">Cont curent</div>
                        <div className="account_sold_pozitiv_1">
                          {soldCurent},<p id="smaller">00 RON</p>
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
                <div
                  className="button_login_landing"
                  onClick={toggleShowCurent}
                >
                  <button className="button_landing">Inapoi</button>
                </div>
              </div>
            )}

            {showEconomies && (
              <div className="third_page">
                <div className="title_third_page">Contul tău:</div>
                <div className="big_account_container">
                  <div className="big_account_zone">
                    <div className="big_account_holder">
                      <div className="account_info_1">
                        <div className="account_name_1">Cont curent</div>
                        <div className="account_sold_pozitiv_1">
                          {soldEconomii},<p id="smaller">00 RON</p>
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
                <div className="button_login" onClick={toggleShowEconomies}>
                  <button className="button">Inapoi</button>
                </div>
              </div>
            )}

            {showCredit && (
              <div className="third_page">
                <div className="title_third_page">Contul tău:</div>
                <div className="big_account_container">
                  <div className="big_account_zone">
                    <div className="big_account_holder">
                      <div className="account_info_1">
                        <div className="account_name_1">Cont curent</div>
                        <div className="account_sold_negativ_3">
                          {sold['credit']},<p id="smaller">00 RON</p>
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
                <div className="button_login" onClick={toggleShowCredit}>
                  <button className="button">Inapoi</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
