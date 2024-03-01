import Sidebar from "./components/Sidebar";
import TopBar from "./components/TopBar";
import React from 'react';



export default function DashBoard({
  children,
}: {
  children: React.ReactNode
}) {
  return(
    <div >
      <TopBar/>
      <div className="flex flex-row"> 
        <Sidebar />
          {children}
      </div>
    </div>
  );
};
