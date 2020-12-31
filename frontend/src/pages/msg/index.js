import React, { useState } from "react";
import "./index.css";
import settings from "../../images/settings.png";
import ahegao from "../../images/ahegao.jpg";

function Msg() {
  const [options, setOptions] = useState();
  console.log(setOptions);
  return (
    <div className="msg">
      <div className="header1">
        <div className="user">
          <img
            src={ahegao}
            className="userpic"
            alt="userpic"
            onClick={() => setOptions(true)}
          ></img>
          <div className="options">
            <h6>Change picture</h6>
            <h6>Log Out</h6>
          </div>
        </div>
        <h2 className="label1">Chats</h2>
        <div className="settings">
          <img src={settings} alt="settingsicon" className="settingsicon" />
          <div className="options">
            <h6>Clear message history</h6>
            <h6>Delete account</h6>
          </div>
        </div>
      </div>

      <div className="header2">
        <h3>Friend Name</h3>
      </div>
      <div className="conversations">
        <form className="search">
          <input type="text" placeholder="Search" />
          <button type="submit"></button>
        </form>
        <div className="conversationlist">
          <div className="conversation">
            <h5 className="friendname">Name</h5>
            <p className="messagepreview">message preview</p>
            <hr />
          </div>
          <div className="conversation">
            <h5 className="friendname">Name</h5>
            <p className="messagepreview">message preview</p>
            <hr />
          </div>
          <div className="conversation">
            <h5 className="friendname">Name</h5>
            <p className="messagepreview">message preview</p>
            <hr />
          </div>
          <div className="conversation">
            <h5 className="friendname">Name</h5>
            <p className="messagepreview">message preview</p>
            <hr />
          </div>
          <div className="conversation">
            <h5 className="friendname">Name</h5>
            <p className="messagepreview">message preview</p>
            <hr />
          </div>
          <div className="conversation">
            <h5 className="friendname">Name</h5>
            <p className="messagepreview">message preview</p>
            <hr />
          </div>
          <div className="conversation">
            <h5 className="friendname">Name</h5>
            <p className="messagepreview">message preview</p>
            <hr />
          </div>
          <div className="conversation">
            <h5 className="friendname">Name</h5>
            <p className="messagepreview">message preview</p>
            <hr />
          </div>
          <div className="conversation">
            <h5 className="friendname">Name</h5>
            <p className="messagepreview">message preview</p>
            <hr />
          </div>
          <div className="conversation">
            <h5 className="friendname">Name</h5>
            <p className="messagepreview">message preview</p>
            <hr />
          </div>
          <div className="conversation">
            <h5 className="friendname">Name</h5>
            <p className="messagepreview">message preview</p>
            <hr />
          </div>

          <div className="conversation">
            <h5 className="friendname">Name</h5>
            <p className="messagepreview">message preview</p>
            <hr />
          </div>
          <div className="conversation">
            <h5 className="friendname">Name</h5>
            <p className="messagepreview">message preview</p>
            <hr />
          </div>
        </div>
      </div>
      <div className="dialog">
        <div className="input">input message</div>
        <div className="output">output message</div>
      </div>
      <div className="footer1">
        <h3>moonchat</h3>
      </div>
      <div className="footer2">
        <hr />
        <form className="sending">
          <input className="type" placeholder="Enter to send" />
          <button type="submit" className="send"></button>
        </form>
      </div>
    </div>
  );
}
export default Msg;
