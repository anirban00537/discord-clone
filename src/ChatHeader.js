import React from "react";
import "./ChatHeader.css";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import EditLocationRoundedIcon from "@material-ui/icons/EditLocationRounded";
import PeopleAltRoundedIcon from "@material-ui/icons/PeopleAltRounded";
import SearchRoundedIcon from "@material-ui/icons/SearchRounded";
import SendRoundedIcon from "@material-ui/icons/SendRounded";
import HelpRoundedIcon from "@material-ui/icons/HelpRounded";
import { useSelector } from "react-redux";
import { selectchannelName } from "./features/appSlice";
const ChatHeader = () => {
  const channelName = useSelector(selectchannelName);
  return (
    <div className="chatHeader">
      <div className="chatHeader__left">
        <h3>
          <span className="chatHeader__hash">#</span>
          {channelName}
        </h3>
      </div>
      <div className="chatHeader__right">
        <EditLocationRoundedIcon />
        <NotificationsActiveIcon />
        <PeopleAltRoundedIcon />
        <div className="chatHeader__search">
          <input placeholder="Search" />
          <SearchRoundedIcon />
        </div>
        <SendRoundedIcon />
        <HelpRoundedIcon />
      </div>
    </div>
  );
};

export default ChatHeader;
