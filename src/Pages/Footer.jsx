import React from "react";
import "../index.css";
import logo from "../assets/kingsukh.png";
import { FaHome, FaBuilding, FaHotel, FaPhoneAlt } from "react-icons/fa";
import { MdContactEmergency } from "react-icons/md";
import { BsChatRightQuoteFill } from "react-icons/bs";
import { IoMail } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";

const Footer = () => {
    return (
        <div style={{ backgroundColor: "#222" }} className="text-white p-10">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                <div>
                    <div className="vanity flex items-center text-white cursor-pointer transition-all hover:text-brown mb-5">
                        <img src={logo} alt="" width={100} />
                        <div className="ml-3">
                            <span className="text-4xl"> King Sukh </span>
                            <br /> <span className="barlow-condensed-thin">GUEST HOUSE</span>
                        </div>
                    </div>
                    <div className="h-24 w-52"><a href="#_" class="flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-gray-500 whitespace-no-wrap bg-white border-2 border-transparent rounded-full shadow-sm hover:bg-transparent hover:text-white hover:border-white focus:outline-none">
                        Book Now
                    </a></div>


                </div>

                <div>
                    <h1 className="text-xl gilda-display-regular mb-5">Service Links</h1>
                    <div className="flex items-center space-x-3 my-2">
                        <FaHome />
                        <p className="hover:underline underline-offset-4 decoration-brown transition-all">
                            Home
                        </p>
                    </div>
                    <div className="flex items-center space-x-3 my-2">
                        <FaBuilding />
                        <p className="hover:underline underline-offset-4 decoration-brown transition-all">
                            About
                        </p>
                    </div>
                    <div className="flex items-center space-x-3 my-2">
                        <BsChatRightQuoteFill />
                        <p className="hover:underline underline-offset-4 decoration-brown transition-all">
                            Service
                        </p>
                    </div>
                    <div className="flex items-center space-x-3 my-2">
                        <FaHotel />
                        <p className="hover:underline underline-offset-4 decoration-brown transition-all">
                            Room
                        </p>
                    </div>
                    <div className="flex items-center space-x-3 my-2">
                        <MdContactEmergency />
                        <p className="hover:underline underline-offset-4 decoration-brown transition-all">
                            Gallery
                        </p>
                    </div>
                </div>
                <div>
                    <h1 className="text-xl gilda-display-regular mb-5">Information</h1>
                    <div className="flex items-center my-2">
                        <FaPhoneAlt />
                        <p className="ml-3">
                            +91 9007062180
                        </p>
                    </div>
                    <div className="flex items-center my-2">
                        <IoMail />
                        <p className="ml-3">kkghosh0099@gmail.com</p>
                    </div>
                    <div className="flex items-center my-2">
                        <CiLocationOn />
                        <a href="https://www.google.com/maps/place/Kingsukh+Guest+House/@23.5862406,86.8597371,17z/data=!4m6!3m5!1s0x39f6e3fdd3ff9ebb:0x517a57e3f93c1807!8m2!3d23.5863324!4d86.8597904!16s%2Fg%2F11srygxjp6?entry=tts" className="ml-3">
                            Beside Barshal Water Tank,
                            <br /> Manpur, Barhanti, West Bengal 723156
                            {/* Beside Barshal Water Tank, Manpur, Barhanti, West Bengal 723156 */}
                        </a>
                    </div>
                </div>
                <div>
                    <h1 className="text-xl gilda-display-regular mb-5">Newsletter</h1>
                    <div className="flex flex-col">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="p-2 rounded mb-2 text-shadow-white"
                        />
                        <button className="bg-white text-black p-2 rounded transition-all hover:bg-amber-100 hover:text-brown">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>
            <p className="text-center mt-10 text-sm text-gray-400">
                © 2025 Kingsukh Guest House. All rights reserved.
            </p>
        </div>
    );
};

export default Footer;
