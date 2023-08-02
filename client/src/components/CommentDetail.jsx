import React from "react";

export default function CommentDetail({ comment, theme }) {
  return (
    <div
      className={`${theme} bg-white shadow-2xl rounded-xl relative m-auto mb-6 p-4 flex w-[55%] bg-clip-border`}
    >
      {/* ----- left side ------ */}
      <div>
        <img
          src={
            comment.creator.image ||
            "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80"
          }
          alt="profilpic"
          className="rounded-xl w-20 h-20"
        />
      </div>

      {/* ----- right side ------ */}
      <div className="pl-6 flex fluid flex-col w-full">
        <div className="flex justify-between w-full">
          <div className="font-bold">{comment.creator.name}</div>

          <p className=" text-gray-400">
            Updated: {new Date(comment.updatedAt).toLocaleDateString()}
          </p>
        </div>

        <div className="pr-6">{comment.text}</div>
        {/* {console.log(comment)} */}
      </div>
    </div>
  );
}
