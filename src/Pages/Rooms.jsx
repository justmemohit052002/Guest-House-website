import React from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";
import Roomimg from '../assets/acroom.jpg'
import Roomimg1 from '../assets/acrooms1.jpg'
import HeartIcon from '../components/HeartIcon';


const Rooms = () => {
    return (
        <div id='rooms' className="py-16 bg-pink-50 flex  gap-4 items-center justify-center ">
            <Card className="mt-6 w-96">
                <CardHeader color="blue-gray" className="relative h-56">
                    <img
                        src={Roomimg}
                        alt="card-image"
                        className='w-full h-full object-cover rounded-lg'
                    />
                </CardHeader>
                <CardBody>
                    <Typography variant="h5" color="blue-gray" className="mb-2">
                        Non AC Room
                    </Typography>
                    <Typography>
                        The place is close to Barceloneta Beach and bus stop just 2 min by
                        walk and near to &quot;Naviglio&quot; where you can enjoy the main
                        night life in Barcelona.
                    </Typography>
                </CardBody>
                <CardFooter className="pt-0 scroll-pb-1.5">
                    <a href="#_" class="flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-black  border-2  rounded-full shadow-sm hover:bg-transparent hover:text-black hover:border-white focus:outline-none">
                        Book Now
                    </a>
                </CardFooter>
            </Card>

            <Card className="mt-6 w-96">
                <CardHeader color="blue-gray" className="relative h-56">
                    <img
                        src={Roomimg1}
                        alt="card-image"
                        className='w-full h-full object-cover rounded-lg'
                    />

                </CardHeader>
                <div className="relative bg-yellow-500 p-4">
                    <HeartIcon className="absolute top-2 right-2" />
                </div>

                <CardBody>
                    <Typography variant="h5" color="blue-gray" className="mb-2">
                        AC Room
                    </Typography>
                    <Typography>
                        The place is close to Barceloneta Beach and bus stop just 2 min by
                        walk and near to &quot;Naviglio&quot; where you can enjoy the main
                        night life in Barcelona.
                    </Typography>
                </CardBody>
                <CardFooter className="pt-0">
                    <a href="#_" class="flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap bg-black  border-2  rounded-full shadow-sm hover:bg-transparent hover:text-black hover:border-white focus:outline-none">
                        Book Now
                    </a>
                </CardFooter>
            </Card>
        </div>
    )
}

export default Rooms
