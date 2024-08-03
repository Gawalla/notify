'use client'
import React from "react";
import { useState } from "react";
const FriendList = () => {
  const [Search,setSearch]=useState('')

  return (
    <div className="flex text-white w-2/5 h-screen bg-slate-800 p-4">
      <div className=" bg-slate-700 flex-grow flex ml-5 mr-5 h-7 rounded-xl  mx-auto">
        <input type="text" className="bg-slate-700 w-full rounded-xl p-2" onChange={(e)=>setSearch(e.target.value)} placeholder="search" value={Search} />
      </div>
    </div>
  );
};

export default FriendList;
