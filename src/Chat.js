import React, { useEffect, useState } from "react";
import "./Chat.css";
import ChatHeader from "./ChatHeader";
import Message from "./Message";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import CardGiftcardIcon from "@material-ui/icons/CardGiftcard";
import GifIcon from "@material-ui/icons/Gif";
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions";
import { useSelector } from "react-redux";
import { selectchannelId, selectchannelName } from "./features/appSlice";
import db from "./firebase";
import firebase from "firebase";
import { selectUser } from "./features/userSlice";

const Chat = () => {
  const user = useSelector(selectUser);
  const channelId = useSelector(selectchannelId);
  const channelName = useSelector(selectchannelName);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (channelId) {
      db.collection("channels")
        .doc(channelId)
        .collection("messages")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) => {
          setMessages(snapshot.docs.map((doc) => doc.data()));
        });
    }
  }, [channelId]);
  const sendMessage = (e) => {
    e.preventDefault();
    db.collection("channels").doc(channelId).collection("messages").add({
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      message: input,
      user: user,
    });
    setInput("");
  };

  return (
    <div className="chat">
      <ChatHeader />
      <div className="chat_message">
        {messages.map((message) => {
          return (
            <Message
              timeStamp={message.timestamp}
              message={message.message}
              user={message.user}
            />
          );
        })}
      </div>

      <div className="chat_input">
        <AddCircleIcon fontSize="large" />
        <form>
          <input
            value={input}
            disabled={!channelId}
            onChange={(e) => setInput(e.target.value)}
            placeholder={"Message to # " + channelName}
          />
          <button
            disabled={!channelId}
            className="chat_inputButton"
            type="submit"
            onClick={sendMessage}
          >
            Send Message
          </button>
        </form>
        <div className="chat_inputIcons">
          <CardGiftcardIcon fontSize="large" />
          <GifIcon fontSize="large" />
          <EmojiEmotionsIcon fontSize="large" />
        </div>
      </div>
    </div>
  );
};

export default Chat;
