import React from 'react'

export default function CommentDetail({comment}) {
  return (
    <div>
        <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80" alt="profilpic" className='rounded-full w-24'/>
        <div>{comment.creator.name}</div>
        <div>{comment.text}</div>
        {console.log(comment)}
        <div>{comment.updatedAt.split("T")[0]}</div>
        {/* <div>Updated: {new Date(comment.updated).toLocaleDateString()}</div> */}
    </div>
  )
}
