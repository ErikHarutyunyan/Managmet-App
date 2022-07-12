import React from "react";
import { ReactComponent as HomeIcon } from "../../assets/svg/home.svg";
import { ReactComponent as DailyIcon } from "../../assets/svg/daily.svg";
import { ReactComponent as HandowerIcon } from "../../assets/svg/handower.svg";
import { ReactComponent as MemberIcon } from "../../assets/svg/member.svg";
import { ReactComponent as RosterIcon } from "../../assets/svg/roster.svg";
import { ReactComponent as SettingIcon } from "../../assets/svg/setting.svg";
import { FiUsers } from 'react-icons/fi';
export const SidebarData = [
  {
    title: "Main Page",
    path: "/dashboard",
    icon: <HomeIcon className="logo_home" />,
    cName: "nav-text",
  },
  {
    title: "Handover Logsheet",
    path: "/reports",
    icon: <HandowerIcon className="logo_handower" />,
    cName: "nav-text",
  },
  {
    title: "Roster Management",
    path: "/products",
    icon: <RosterIcon className="logo_roster" />,
    cName: "nav-text",
  },
  {
    title: "Daily Workflow",
    path: "/team",
    icon: <DailyIcon className="logo_daily" />,
    cName: "nav-text",
  },
  {
    title: "Member Management",
    path: "/messages",
    icon: <FiUsers size="30px" color="#64748B" className="logo_member" />,
    cName: "nav-text",
  },
  {
    title: "Setting",
    path: "/dashboard/setting",
    icon: <SettingIcon className="logo_setting" />,
    cName: "nav-text",
  },
];
