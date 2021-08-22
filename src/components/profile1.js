import React from "react";
import { Link, useLocation } from "react-router-dom";
import SidebarItem from "./SidebarItem";
import './Profile.css';

function Profile1() {
    const pathName = useLocation().pathname;
  const menus = [
    { name: "글", path: "/profile1" },
    { name: "시리즈", path: "/User1series" },
    { name: "소개", path: "/User1info" }
  ];

  return (
    <div className="sidebar">
      {menus.map((menu, index) => {
        return (
          <Link to={menu.path} key={index}>
            <SidebarItem
              menu={menu}
              isActive={pathName === menu.path ? true : false}
            />
          </Link>
        );
      })}
    </div>
  );
}

export default Profile1;