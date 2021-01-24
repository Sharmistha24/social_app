import React, { useContext } from "react";

import { Comment } from "../../components";
import { storage, db } from "../../firebase";
import CommentInput from "../../components/commentInputs";
import { UserContext } from "../../contexts/user";

import "./style.css";

export default function Post({
    profileUrl,
    username,
    id,
    photoURl,
    caption,
    comments,
}) {
    const [user, setUser] = useContext(UserContext).user;
    const deletePost = () => {
        // delete the image from firebase storage
        var imageRef = storage.refFromURL(photoURl);
        imageRef
            .delete()
            .then(function () {
                console.log("delete successfull");
            })
            .catch(function (error) {
                console.log(`Error ${error}`);
            });

        db.collection("social")
            .doc(id)
            .delete()
            .then(function () {
                console.log("delete post info successfull");
            })
            .catch(function (error) {
                console.log(`Error post info delete ${error}`);
            });
    };
    return (
        <div className="post">
            <div className="postHeader">
                <div className="postHeaderLeft">
                    <img className="postProfilePic" src={profileUrl} />
                    <p style={{ marginLeft: "8px" }}>{username}</p>
                </div>
                <button onClick={deletePost} className="postDelete">
                    Delete
        </button>
            </div>

            <div className="postCenter">
                <img className="postPhotoUrl" src={photoURl} />
            </div>

            <div>
                <p>
                    <span style={{ fontWeight: "500", marginRight: "4px" }}>
                        {username}
                    </span>
                    {caption}
                </p>
            </div>

            {comments ? (
                comments.map((comment) => (
                    <Comment username={comment.username} caption={comment.comment} />
                ))
            ) : (
                    <></>
                )}

            {user ? <CommentInput comments={comments} id={id} /> : <></>}
        </div>
    );
}
