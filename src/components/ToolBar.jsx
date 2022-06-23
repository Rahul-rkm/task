import React from "react";
import hamburger from "./icons/hamburger.svg";
import TooBarItem from "./TooBarItem";
import add from "./icons/addIcon.svg";
import tag from "./icons/tag.svg";
import user from "./icons/user.svg";

function ToolBar({ toggler }) {
  return (
    <div className="top-tool-bar">
      <div className="right-tool-set">
        <TooBarItem source={add} text={`add-icon`} />
        <TooBarItem source={tag} text={`tag-icon`} />
        <TooBarItem source={user} text={`user-icon`} />

        <select name="language" className="language">
          <option value="English">English</option>
          <option value="Hindi">हिन्दी</option>
        </select>
      </div>
      <TooBarItem
        toggler={toggler}
        source={hamburger}
        text={`hamburger-icon`}
      />
    </div>
  );
}

export default ToolBar;
