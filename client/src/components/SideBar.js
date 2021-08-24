/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import "./SideBar.css";
import MenuItem from "./MenuItem";

const menuItems = [
  {
    name: "Teamcenter ECI Owners",
    to: "/eci-home/environment-owners",
  },
  { name: "Environment Types", to: "/eci-home/environment-types" },
  { name: "Architecture Diagram", to: "/eci-home/diagram" },
  { name: "Data Available", to: "/eci-home/data" },
  {
    name: "Environment Admin",
    to: "/eci-home/environment-admin",
    subMenu: [
      {
        name: "Staging Environment",
        to: "/eci-home/environment-admin/staging",
      },
      {
        name: "Production Environment",
        to: "/eci-home/environment-admin/production",
      },
    ],
  },
  {
    name: "Environment communication",
    to: "/eci-home/env-comm",
  },
  { name: "FAQ", to: "/eci-home/faq" },
  { name: "Login", to: "/eci-home/login" },
];
function SideBar(props) {
  const [inactive, setInactive] = useState(false);

  useEffect(() => {
    if (inactive) {
      document.querySelectorAll(".sub-menu").forEach((el) => {
        el.classList.remove("active");
      });
    }
    props.onCollapse(inactive);
  }, [inactive]);

  return (
    <div className={`sidebar ${inactive ? "inactive" : ""}`}>
      <div className="top-section">
        <div className="sidebar-dashboard">
          <i class="nav-icon fas fa-tachometer-alt"></i>
        </div>

        <div onClick={() => setInactive(!inactive)} className="toggle-arrow">
          <i
            class={`${
              inactive
                ? "bi bi-arrow-right-square-fill"
                : "bi bi-arrow-left-square-fill"
            }`}
          ></i>
        </div>
      </div>

      <div className="search-box">
        <div className="search-btn">
          <i class="bi bi-search"></i>
        </div>
        <input type="text" placeholder="search"></input>
      </div>

      <div className="divider"></div>

      <div className="main-menu">
        <ul>
          {menuItems.map((menuItem, index) => (
            <MenuItem
              key={index}
              name={menuItem.name}
              to={menuItem.to}
              subMenu={menuItem.subMenu || []}
              onClick={() => {
                if (inactive) {
                  setInactive(false);
                }
              }}
            />
          ))}
          {/* <li>
            <a className="menu-item">
              <div className="menu-icon">
                <i class="bi bi-circle"></i>
              </div>
              <span>Teamcenter ECI Owners</span>
            </a>
          </li>
          <li>
            <a className="menu-item">
              <div className="menu-icon">
                <i class="bi bi-circle"></i>
              </div>
              <span>Environment Types</span>
            </a>
          </li>
          <li>
            <a className="menu-item">
              <div className="menu-icon">
                <i class="bi bi-circle"></i>
              </div>
              <span>Architecture Diagram</span>
            </a>
          </li>
          <li>
            <a className="menu-item">
              <div className="menu-icon">
                <i class="bi bi-circle"></i>
              </div>
              <span>Data Available</span>
            </a>
          </li>
          <MenuItem
            name={"Environment Admin"}
            subMenu={[
              { name: "Staging Environment" },
              { name: "Production Environment" },
            ]}
          /> */}
          {/* <li>
            <a className="menu-item">
              <div className="menu-icon">
                <i class="bi bi-circle"></i>
              </div>
              <span>Environment Admin</span>
            </a>
            <ul className="sub-menu">
              <li>
                <a>Staging Environment</a>
              </li>
              <li>
                <a>Production Environment</a>
              </li>
            </ul>
          </li> */}
        </ul>
      </div>

      <div className="footer">
        <div className="avatar">
          <i class="bi bi-person-circle"></i>
        </div>
        <div className="user-info">
          <h4>User Name</h4>
          <p>user.name@gmail.com</p>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
