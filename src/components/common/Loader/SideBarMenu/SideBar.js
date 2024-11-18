import React from "react";
import "./SideBar.css";
import { FaHome } from "react-icons/fa";

const SideBarMenu = () => {
  return (
    <div className="sidebar-menu">
      <nav className="menu">
        <div className="menu-item">
          <FaHome size={24} className="menu-icon" />
        </div>
        {/* Add other icons/menu items here if needed */}
      </nav>
    </div>
  );
};

export default SideBarMenu;
