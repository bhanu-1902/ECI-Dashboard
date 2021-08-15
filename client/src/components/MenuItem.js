/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function MenuItem(props) {
  const { name, subMenu, onClick, to } = props;
  const [expand, setExpand] = useState(false);

  return (
    <li onClick={props.onClick}>
      <NavLink
        to={to}
        onClick={() => setExpand(!expand)}
        className={`menu-item`}
      >
        <div className="menu-icon">
          <i class="bi bi-circle"></i>
        </div>
        <span>{name}</span>
      </NavLink>
      {subMenu && subMenu.length > 0 ? (
        <ul className={`sub-menu ${expand ? "active" : ""}`}>
          {subMenu.map((menu, index) => (
            <li key={index}>
              <NavLink to={menu.to}>{menu.name}</NavLink>
            </li>
          ))}
        </ul>
      ) : null}
    </li>
  );
}

export default MenuItem;
