import React, { useState } from 'react';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'; // from react-icons

const HeartIcon = () => {
    const [liked, setLiked] = useState(false);

    const toggleLike = () => {
        setLiked(!liked);
    };

    return (
        <button onClick={toggleLike} className="text-2xl transition duration-300 ease-in-out">
            {liked ? (
                <AiFillHeart className="text-red-500 hover:scale-110" />
            ) : (
                <AiOutlineHeart className="text-gray-500 hover:text-red-500 hover:scale-110" />
            )}
        </button>
    );
};

export default HeartIcon;
