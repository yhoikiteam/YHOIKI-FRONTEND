"use client";

import { usePathname } from 'next/navigation';
import Link from "next/link";

import Button from "../Button";
import Search from "../Search";
import { FaUser } from 'react-icons/fa';
import { BiChevronUp, BiChevronDown } from 'react-icons/bi';
import { IoNotifications } from 'react-icons/io5';
import { RiMessage3Fill } from 'react-icons/ri';
import { useState } from 'react';
import { logoutUser } from '@/hooks/auth';
import { FaPowerOff } from 'react-icons/fa6';

export default function Navbar() {
    const pathname: string = usePathname();
    interface subMenu {
        label: string;
        path: string;
    }
    const sub: subMenu[] = [
        {label: "Dashboard", path: "/dashboard"},
        {label: "Service", path: "/Service"},
        {label: "Course", path: "/Course"},
        {label: "Programs", path: "/Programs"},
        {label: "Community", path: "/Community"},
    ]
    const [ Logout, BukaLogout ] = useState<boolean>(false);
    const bukaTutupLogout = () => {
        BukaLogout(buka => !buka)
    }
    return(
        <nav className="w-full flex items-center justify-between px-8 py-4 border-b shadow-xl bg-white">
            <Link href="/" id="logo" className="flex space-x-3 items-center"><img className="w-7" src="https://i.ibb.co.com/0DhSzYN/Yhoiki.png" alt="logo" /><h1 className="text-gray-700 font-bold text-xl">Yhoiki</h1></Link>
            <div id="sub" className="list-none text-gray-600 flex space-x-10">
                {sub.map((item, index) => (
                    <li key={index}>
                        <Link href={item.path} className={`font-medium duration-300 bg-gradient-to-r from-color1 to-color2 bg-clip-text hover:text-transparent ${pathname === item.path ? "text-transparent" : ""}`}>
                            {item.label}
                        </Link>
                    </li>
                ))}
            </div>
            <div id="auth" className="flex items-center space-x-3">
                <Search/>
                <div id="bahasa"><button className="font-semibold mx-5 text-gray-600">ENG</button></div>
                <div className="text-3xl text-gray-600">
                    <button onClick={bukaTutupLogout}>{Logout ? <BiChevronUp/> : <BiChevronDown/>}</button>
                    {Logout ? 
                    <div className="absolute text-red-500 bg-white rounded-xl border border-gray-200 p-2 text-lg z-40"><button onClick={()=> logoutUser()} className="flex items-center space-x-2"><FaPowerOff/><p>Logout</p></button></div> : <></>}
                </div>
                <h1 className="text-gray-600">Username</h1>
                <div id="profilimage" className="w-10 h-10 bg-gray-200 rounded-full text-gray-400 text-xl flex justify-center items-center">
                    <FaUser/>
                </div>
                    <div className="absolute flex space-x-3 right-6 top-24">
                    <div className="text-gray-400 text-3xl bg-white border border-gray-200 rounded-full p-2 shadow-xl"><IoNotifications/></div>
                    <div className="text-gray-400 text-3xl bg-white border border-gray-200 rounded-full p-2 shadow-xl"><RiMessage3Fill/></div>
                </div>
            </div>
        </nav>
    )
};