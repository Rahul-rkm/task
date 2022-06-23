import React from "react";
import Card from "./shared/Card";
// import './navPanel.css'
import NavItem from "./NavItem";
import dashboard from "./icons/dashboard.svg";
import picture from "./icons/picture.svg";
import tag from "./icons/tag.svg";
import list from "./icons/list.svg";
import box from "./icons/box.svg";
import notebook from "./icons/notebook.svg";
import user from "./icons/user.svg";
import chart from "./icons/chart.svg";
import sun from "./icons/sun.svg";
import powerIcon from "./icons/powerOnOff.svg";

const NavPanel = ({ collapse }) => {
  return (
    <div className={`nav-panel ${collapse && "hide"}`}>
      <Card>
        <div className="nav-item app-item">
          <img className="app-logo" src={picture} alt="app-logo" />
          <div className={`nav-item-text ${collapse && "hidden"}`}>LAUNDRY</div>
        </div>
        <NavItem collapse={collapse} icon={dashboard} text={`Dashboard`} />
        <NavItem collapse={collapse} icon={tag} text={`Pos`} />
        <NavItem collapse={collapse} icon={box} text={`Orders`} />
        <NavItem
          collapse={collapse}
          icon={list}
          text={`Orders Status Screen`}
        />
        <NavItem collapse={collapse} icon={notebook} text={`Expenses`} />
        <NavItem collapse={collapse} icon={user} text={`Customers`} />
        <NavItem collapse={collapse} icon={tag} text={`Services`} />
        <NavItem collapse={collapse} icon={chart} text={`Reports`} />
        <NavItem collapse={collapse} icon={sun} text={`Tools`} />
        <NavItem collapse={collapse} icon={powerIcon} text={`Log out`} />
      </Card>
    </div>
  );
};

export default NavPanel;
