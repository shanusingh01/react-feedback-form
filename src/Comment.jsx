import { useState } from "react";
import "./Comment.css";
import CommentsForm from "./CommentsForm";

export default function Comment(){
    let [comments, setComments] = useState([{
        username: "@ss",
        remark : "great job!",
        rating : 4
    }]);

    let addNewComment = (comment) => {
        setComments((currComments) => [...currComments, comment]);
        console.log("added a comment");
    }

    return (
    <>
        <div>
            <h3>All comments</h3>
            {comments.map((comment,idx) => (

                <div className = "comment" key = {idx}>
                
                <span>{comment.remark}</span>
                &nbsp;
                <span>(Rating = {comment.rating})</span>
                &nbsp;
                <p>-{comment.username}</p>

            </div>

            ))}
            
        </div>
        <br/>
        <CommentsForm addNewComment = {addNewComment}/>
    </>
    );
}
