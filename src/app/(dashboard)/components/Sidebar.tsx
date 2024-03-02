"use client"
// import { BrowserRouter as Router, Link } from 'react-router-dom';
import Link from "next/link"
import { IoHomeOutline,IoPersonOutline  } from "react-icons/io5";
import { FiFile } from "react-icons/fi";
import { MdOutlineGroup } from "react-icons/md";
import { IoIosLogOut } from "react-icons/io";

const Sidebar = () => {
  const sections = [
    { name: 'Records', icon: <FiFile size={25} />, link: '/records' },
    { name: 'Family', icon: <MdOutlineGroup size={25} />, link: '/family' },
    { name: 'Profile', icon: <IoPersonOutline size={25} />, link: '/profile' },
    { name: 'Logout' , icon : <IoIosLogOut size={25} />, link: '/logout' },
  ];

  return (
      <div className="shadow-md bg-slate-400">
        <div className="w-[130px] h-[512px] mx-10 flex flex-col items-start mt-24 bg-slate-400">
        {sections.map((section, index) => (
          <Link href={section.link} key={index} className="my-4 flex flex-row items-center gap-4">
            {section.icon}
            <div className="font-semibold text-xl">{section.name}</div>
          </Link>
        ))}
      </div>
      </div>
  )
}

export default Sidebar;