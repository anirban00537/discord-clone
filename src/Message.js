import { Avatar } from "@material-ui/core";
import React from "react";
import "./Message.css";
const Message = () => {
  return (
    <div className="message">
      <Avatar src="https://scontent.fjsr5-1.fna.fbcdn.net/v/t1.0-9/122100442_1815006385329563_4189722574407020260_o.jpg?_nc_cat=111&ccb=2&_nc_sid=09cbfe&_nc_ohc=Trc_zjyvVVIAX9n4Z3t&_nc_ht=scontent.fjsr5-1.fna&oh=72c08afd40100222faa02b1ccb4d3bc8&oe=5FCDCDBF" />
      <div className="message__info">
        <h4>
          anirban.jpeg{" "}
          <span className="message_timeStamp">this is a timestamp</span>
        </h4>

        <p>this is a message</p>
      </div>
    </div>
  );
};

export default Message;
