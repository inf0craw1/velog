import React from "react";
import './Profile.css';
function SidebarItem({ menu, isActive }) {
    return isActive === true ? (
      <div className="menu-item-active">
        <p>{menu.name}</p>
      </div>
    ) : (
      <div className="menu-item ">
        <p>{menu.name}</p>
      </div>
    );
  }

export default SidebarItem;