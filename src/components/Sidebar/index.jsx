import React, { useState } from "react";
import { Link } from "react-router-dom";
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
        <ul >
          {SidebarData.map((item, index, arr) => {
            return index + 1 !== arr.length ? (
              <li
                key={index}
                className={sidebar ? item.cName + " active" : item.cName}
                onMouseEnter={menuIconClick}
                onMouseLeave={menuIconClick}
              >
                <Link to={"#"}>
                  {item.icon}
                  {/* {
                  
                    sidebar ? (<span>{item.title}</span>) : null
                  } */}
                  <span>{item.title}</span>
                </Link>
              </li>
            ) : null;
          })}
        </ul>
        <ul>
          <li>
            {
              <li
                className={
                  sidebar
                    ? sideBarLastItem.cName
                    : sideBarLastItem.cName + " active"
                }
                onClick={menuIconClick}
              >
                <Link to={sideBarLastItem.path}>
                  {sideBarLastItem.icon}
                  <span>{sideBarLastItem.title}</span>
                </Link>
              </li>
            }
          </li>
        </ul>
      </nav>
    </SidebarWrapper>
  );
}

export default Sidebar;
