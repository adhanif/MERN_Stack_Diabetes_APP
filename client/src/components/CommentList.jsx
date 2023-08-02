import { useState, useEffect } from "react";
//import CardArticle from "./CardArticle";
import axiosClient from "../axiosClient";
import CommentDetail from "./CommentDetail";
import { useParams } from "react-router-dom";

export default function CommentList({ theme, comments }) {
  const { id } = useParams();

  return (
    <div className={`${theme} bg-skin-fill fluid flex flex-wrap`}>
      {comments &&
        comments.map((comment, index) => {
          return (
            <CommentDetail
              key={comment._id}
              theme="theme-pink"
              comment={comment}
            />
          );
        })}
    </div>
  );
}
