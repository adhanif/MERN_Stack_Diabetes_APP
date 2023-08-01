import React from 'react';

export default function CommentDetail({ comment, theme }) {
  return (
    <div
      className={`${theme} bg-skin-fill shadow-2xl rounded-xl relative m-auto my-6 p-2 flex w-4/5 bg-clip-border`}
    >
      {/* ----- left side ------ */}
      <div>
        <img
          src='https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80'
          alt='profilpic'
          className='rounded-xl w-20'
        />
      </div>

      {/* ----- right side ------ */}
      <div className='pl-6 flex fluid flex-col w-full'>
        <div className='flex justify-between w-full'>
          <div>{comment.creator.name}</div>

          <p className='pr-6 text-gray-400'>
            Updated: {new Date(comment.updatedAt).toLocaleDateString()}
          </p>
        </div>

        <div className='pr-6'>{comment.text}</div>
        {/* {console.log(comment)} */}
      </div>
    </div>
  );
}
