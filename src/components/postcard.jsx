import React from "react";
import LikeButton from "./likebutton";

const PostCard = ({ post }) => {
    return (
        <div className="container">
            <img src={post.profileImage} width={"200px"} height={"200px"}/>
            <p><strong>{post.username}</strong></p>
            <p>{post.content}</p>
            <LikeButton className="likebut" liked={post.isLiked} />
        </div>
    )
}

export default PostCard;