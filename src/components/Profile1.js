import React, { Component } from "react";
import User1post from "./users/User1post";
import User1info from "./users/User1info";
import User1series from "./users/User1series";
import './Profile.css';
import { Users } from "../datas/users";

const menuList = {
  0: <User1post />,
  1: <User1info />,
  2: <User1series />,
};

class Profile1 extends React.Component{
  

  constructor(props) {
    super();

    this.state = {
      menu: 0,
    };
  }

  changeMenu = (menuIndex) =>{
    this.setState({menu : menuIndex});
  }



  render(){
    return(
      <div className="wrap">
        프로필
        <div className="menuBar">
          <ul className="tabs">
            <li className={`${this.state.menu === 0? 'active': ''}`} onClick={() => this.changeMenu(0)}>글</li>
            <li className={`${this.state.menu === 1? 'active': ''}`} onClick={() => this.changeMenu(1)}>시리즈</li>
            <li className={`${this.state.menu === 2? 'active': ''}`} onClick={() => this.changeMenu(2)}>소개</li>
          </ul>
        </div>
        <div className="contentArea">
          {menuList[this.state.menu]}
        </div>
      </div>
    )
  }
}


export default Profile1;
