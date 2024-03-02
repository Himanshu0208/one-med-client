"use client"

// import {motion} from "framer-motion"
import  { links } from "@/components/data/data"
import Link from "next/link";
import { FiMoon } from "react-icons/fi";
import { FiSun } from "react-icons/fi";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import clsx from "clsx"

export default function Header() {
  const [active, setActive] = useState<string>("Home");
  const [mounted, setMounted] = useState(false);
  const {setTheme, theme} = useTheme();

  useEffect(() => setMounted(true), [])
  if(!mounted) return null;

  return(
    <header className="fixed w-screen z-[--z-navbar] bg-white dark:bg-[--dark-mode-back-ground] bg-opacity-80  backdrop-blur-[0.5rem]"> 
        <div className="flex w-full justify-between py-3 max-w-[1000px] mx-auto">
          <h1 className="md:text-md font-bold text-[#C147E9] py-1"><Link href="#home">OneMed</Link></h1>
            <ul className="md:flex w-4/12 justify-between text-md font-semibold hidden md:w-4/12 max-w-[680px]">
              {
                links.map(link => (
                  <li key={link.hash} className={clsx(
                    "hover:text-[--color-purple-light] py-1",
                    {
                      "text-[--color-purple-light]" : active === link.name
                    }
                    )}

                    onClick={() => setActive(link.name)}
                  >

                    <Link href={link.hash}>
                      {link.name}
                    </Link>
                  </li>
                ))
              }
            </ul>

            <ul className="flex text-md font-semibold gap-[20px]">

              {
                theme === "light" ? <span onClick={() => setTheme("dark")} className="w-[18px] hover:text-[--color-purple-light] py-1"><FiMoon size={24}/></span> : <span onClick={() => setTheme("light")} className="w-[18px] hover:text-[--color-purple-light] py-1"><FiSun size={24}/></span>
              }
              <Link href="/sign-in">
                <li className="py-1">Login</li>
              </Link>
              <Link href="/sign-up">
                <li className="bg-slate-700 text-sm px-2 py-1 rounded-xl text-white">Signup</li>
              </Link>
            </ul>

        </div>
    </header>
  )
}