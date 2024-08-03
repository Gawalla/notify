import React from "react";
import {
  faBars,
  faComment,
  faFolderPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Sidebar = () => {
  return (
    <div className="bg-slate-900 text-xl flex flex-col items-center text-gray-500 w-20 h-screen pt-1">
      <div className=" w-max mb-5 flex flex-col items-center">
        <FontAwesomeIcon icon={faBars} />
      </div>
      <div className=" w-max mb-5 flex flex-col items-center">
        <FontAwesomeIcon icon={faComment} />chat
      </div>
      <div className="w-max mb-5 flex flex-col items-center">
        <FontAwesomeIcon icon={faFolderPlus} />add
      </div>
    </div>
  );
};

export default Sidebar;
