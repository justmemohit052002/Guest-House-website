import React from 'react';
import {
    Card,
    CardHeader,
    CardBody,
    Typography,
} from "@material-tailwind/react";
import aboutImage from '../assets/king-sukh-hotel.png';

const About = () => {
    return (
        <div
            id="about"
            className="min-h-screen bg-cover bg-center flex items-center justify-center px-4 py-10"
        >
            <Card className="w-full max-w-[100rem] flex flex-col md:flex-row rounded-xl overflow-hidden shadow-md bg-transparent">
                <CardHeader
                    shadow={false}
                    floated={false}
                    className="flex items-center justify-center w-full md:w-2/5 bg-violet-400"
                >
                    <img
                        src={aboutImage}
                        alt="About us"
                        className="w-full h-full object-cover rounded-xl md:rounded-r-none"
                    />
                </CardHeader>

                <CardBody className="w-full md:w-3/5 p-6 md:p-10">
                    <Typography variant="h6" color="gray" className="mb-4 uppercase">
                        About Us -
                    </Typography>
                    <Typography variant="h4" color="blue-gray" className="mb-2">
                        Your Peaceful Stay - Begins Here
                    </Typography>
                    <Typography color="gray" className="mb-8 font-normal text-sm md:text-base">
                        Welcome to King Sukh Guest House, your serene escape nestled amid nature’s finest wonders. Surrounded by rolling hills, shimmering dams, and peaceful greenery, our guest house invites you to slow down and savor the moment.
                        <br /><br />
                        Wake up to birdsong, enjoy hearty homemade meals, and spend your days exploring scenic trails or simply relaxing in our lush garden courtyard. From sunrise views over tranquil waters to starlit evenings under the open sky, every moment here is crafted for comfort and calm.
                        <br /><br />
                        Whether you're seeking a quiet retreat or an adventurous getaway, King Sukh Guest House offers an experience where nature and hospitality come together in perfect harmony.
                    </Typography>
                    <Typography color='green' className="mb-4 font-medium text-sm md:text-base">
                        <strong>Location:</strong> Barshal Water Tank, Manpur, Barhanti, West Bengal 723156
                        <br />
                        <strong>Contact us:</strong> +91 9007062180
                    </Typography>

                    <div className="mt-4">
                        <a
                            href="#"
                            className="inline-block px-6 py-3 text-sm font-semibold text-white bg-zinc-800 rounded-full border-2 border-transparent hover:bg-transparent hover:text-black hover:border-black transition"
                        >
                            Book Now
                        </a>
                    </div>
                </CardBody>
            </Card>
        </div>
    );
};

export default About;