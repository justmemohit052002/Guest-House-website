import React, { useEffect, useState, useRef } from "react";
import "../index.css";
import logo from "../assets/kingsukh.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@material-tailwind/react";


const DrawOutlineButton = ({ children, className = "", ...rest }) => {
    return (
        <button
            {...rest}
            className={`group relative px-4 py-2 font-medium text-slate-100 transition-colors duration-[400ms] hover:text-indigo-300 rounded-md overflow-hidden ${className}`}
        >
            <span>{children}</span>


            <span className="absolute left-0 top-0 h-[2px] w-0 bg-indigo-300 transition-all duration-100 group-hover:w-full" />


            <span className="absolute right-0 top-0 h-0 w-[2px] bg-indigo-300 transition-all delay-100 duration-100 group-hover:h-full" />


            <span className="absolute bottom-0 right-0 h-[2px] w-0 bg-indigo-300 transition-all delay-200 duration-100 group-hover:w-full" />


            <span className="absolute bottom-0 left-0 h-0 w-[2px] bg-indigo-300 transition-all delay-300 duration-100 group-hover:h-full" />
        </button>
    );
};

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);

    const handleSmoothScroll = (event) => {
        event.preventDefault();
        const targetId = event.target.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
            setIsOpen(false);
        }
    };

    useEffect(() => {
        const menuItems = document.querySelectorAll(".menu-items a");
        menuItems.forEach((item) => {
            item.addEventListener("click", handleSmoothScroll);
        });

        return () => {
            menuItems.forEach((item) => {
                item.removeEventListener("click", handleSmoothScroll);
            });
        };
    }, []);

    const toggleMenu = (event) => {
        event.stopPropagation();
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("click", handleClickOutside);

        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    return (
        <nav className="navbar-container px-4 py-2 m-2 z-40 flex items-center rounded-lg">

            <div className="vanity flex items-center cursor-pointer transition-all hover:text-brown">
                <img src={logo} alt="Kingsukh Logo" width={100} />
            </div>


            <div className="flex-grow"></div>


            <div className="hidden md:flex items-center space-x-6 ">
                <ul className="menu-items flex space-x-8 text-slate-100">
                    <li><DrawOutlineButton className="rounded-lg"><a href="#home" >HOME</a></DrawOutlineButton></li>
                    <li><DrawOutlineButton className="rounded-lg"><a href="#about">ABOUT</a></DrawOutlineButton></li>
                    <li><DrawOutlineButton className="rounded-lg"><a href="#rooms">ROOMS</a></DrawOutlineButton></li>
                    <li><DrawOutlineButton className="rounded-lg"><a href="#gallery">GALLERY</a></DrawOutlineButton></li>
                    <li><DrawOutlineButton className="rounded-lg"><a href="#contact">CONTACT</a></DrawOutlineButton></li>
                </ul>

                <div className="w-30"></div>
                <a href="#_" class="flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-gray-500 whitespace-no-wrap bg-white border-2 border-transparent rounded-full shadow-sm hover:bg-transparent hover:text-white hover:border-white focus:outline-none">
                    Book Now
                </a>

                <div className="w-10"></div>
            </div>


            <div className="md:hidden flex items-center ml-4">
                <button onClick={toggleMenu}>
                    <FontAwesomeIcon icon={faBars} size="lg" />
                </button>
            </div>


            {isOpen && (
                <div
                    className="absolute top-0 left-0 w-full h-full opacity-90 md:hidden"
                    ref={menuRef}
                >
                    <div className="menu-slide-in absolute top-0 pt-10 left-0 w-3/4 bg-white h-full z-10">
                        <div className="flex justify-end px-4">
                            <button onClick={toggleMenu}>
                                <FontAwesomeIcon icon={faTimes} size="lg" />
                            </button>
                        </div>
                        <ul className="menu-items flex flex-col items-center space-y-6 py-4">
                            <img src={logo} alt="" className="w-20 h-20" />
                            <li><a href="#home" onClick={() => setIsOpen(false)}>HOME</a></li>
                            <li><a href="#about" onClick={() => setIsOpen(false)}>ABOUT</a></li>
                            <li><a href="#services" onClick={() => setIsOpen(false)}>SERVICES</a></li>
                            <li><a href="#rooms" onClick={() => setIsOpen(false)}>ROOMS</a></li>
                            <li><a href="#gallery" onClick={() => setIsOpen(false)}>GALLERY</a></li>
                            <li><a href="#contact" onClick={() => setIsOpen(false)}>CONTACT</a></li>
                        </ul>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;