import React, { useEffect, useState } from "react";

export default function EventDetailCard() {
  return (
    <div
      className={`${theme} bg-skin-fill shadow-2xl rounded-xl relative m-auto my-6 flex h-full w-[65%] flex-col bg-clip-border`}
    >
      <div
        className="relative bg-center flex h-96 max-w-[1200px] justify-center rounded-t-xl"
        style={{
          backgroundImage: "url(" + banner.image + ")",
          backgroundRepeat: banner.repeat,
          backgroundSize: banner.size,
        }}
      >
        {/* //Profile picture (separate div for future positioning) */}
        {/* <div className='absolute -bottom-12 flex h-[95px] w-[95px] items-center justify-center rounded-full border-[4px] border-white'>
      <img className='h-full w-full rounded-full' src={profilePic} alt='' />
    </div> */}
      </div>

      {/* //General info */}
      <div className="mt-6 flex  px-4 gap-2 flex-col">
        <h4 className="text-xl lg:text-2xl font-bold p-1">{title}</h4>

        <div className="flex gap-3 lg:text-lg p-1">
          {tags.map((tag, index) => (
            <div
              className="bg-gray-200 rounded-xl  px-3 py-0.5 border-2"
              key={index}
            >
              {tag}
            </div>
          ))}
        </div>

        <div className="w-full flex justify-around p-1">
          <div className="lg:text-xl">{text}</div>
        </div>
        <div className="flex justify-between text-gray-400 w-full p-1 text-base">
          <p className="">Author: {author}</p>
          <p className="">Updated: {date}</p>
        </div>
      </div>
    </div>
  );
}
