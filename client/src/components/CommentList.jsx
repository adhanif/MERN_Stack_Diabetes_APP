import { useState, useEffect } from "react";
//import CardArticle from "./CardArticle";
import axiosClient from "../axiosClient";
import CommentDetail from "./CommentDetail";
import { useParams } from "react-router-dom";

export default function CommentList({theme}) {
    const {id} = useParams();
    const [comments, setComments] = useState([]);
    const [path, setPath] = useState(`/articles/${id}/comments`);

    useEffect(() => {
        axiosClient
            .get(path)
            .then((res) => {
                console.log(res.data);
                setComments(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [path]);

   


    const createComment = () =>{
        axiosClient
        .post(path)
        .then((res) => {
            console.log(res.data);
            setComments(res.data);
        })
        .catch((err) => {
            console.log(err);
        });
    }

  return (
    <div className={`${theme} bg-skin-fill`}>
      <div
        className={`container flex flex-col mx-auto lg:flex-row space-y-5 space-x-0 lg:space-x-5 lg:space-y-0`}
      >
        <div className="w-full sm:w-2/3 md:w-3/4  px-2 pt-5">
          
          {comments && comments.map((comment, index) => {
            return <CommentDetail key={comment._id} theme="theme-pink" comment={comment} />;
          })}
        </div>
      </div>
    </div>
  )
}
