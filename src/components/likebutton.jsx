
import React, { useState } from "react";

const LikeButton = ({liked}) => {
    const [isLiked, setIsLiked] = useState(liked);
    const toogleLike = () => {
        setIsLiked(!isLiked);
    };
    return (
        <button className={`like-button ${isLiked ? "liked" : ""}`}
        onClick={toogleLike}>
            {isLiked ? "Unlike" : "Like"}
        </button>
    )
}

export default LikeButton;