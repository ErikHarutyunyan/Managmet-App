import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import { SidebarWrapper } from "./Sidebar.styled";

function Sidebar() {
  const [sidebar, setSidebar] = useState(false);

  const menuIconClick = () => {
    //condition checking to change state from true to false and vice versa
    setSidebar(!sidebar);
  };
  const sideBarLastItem = SidebarData[SidebarData.length - 1];

  return (
    <SidebarWrapper className={sidebar ? "show" : "hide"}>
      <nav>
        <ul>
          {SidebarData.map((item, index, arr) => {
            return index + 1 !== arr.length ? (
              <li
                key={index}
              >
                <NavLink
                  to={item.path}
                  // onMouseEnter={menuIconClick}
                  // onMouseLeave={menuIconClick}
                >
                  {item.icon}
                  {/* {
                  
                    sidebar ? (<span>{item.title}</span>) : null
                  } */}
                  <span>{item.title}</span>
                </NavLink>
              </li>
            ) : null;
          })}
        </ul>
        <ul>
          <li>
            {
              <li
                // className={
                //   sidebar
                //     ? sideBarLastItem.cName + " active"
                //     : sideBarLastItem.cName
                // }
                // onClick={menuIconClick}
              >
                <NavLink
                  to={sideBarLastItem.path}
                  // onMouseEnter={menuIconClick}
                  // onMouseLeave={menuIconClick}
                >
                  {sideBarLastItem.icon}
                  <span>{sideBarLastItem.title}</span>
                </NavLink>
              </li>
            }
          </li>
        </ul>
      </nav>
    </SidebarWrapper>
  );
}

export default Sidebar;
