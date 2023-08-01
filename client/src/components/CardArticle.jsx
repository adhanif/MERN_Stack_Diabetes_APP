import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function CardArticle({ theme, article }) {
  const navigate = useNavigate();
  // const { _id, title, banner, author, date, tag, textSum } = article;
  const { _id, image, title, author, updated, tags, textSum } = article;
  //   console.log(title);
  const handleClick=()=>{
      navigate(`/article/${_id}`)
  }
  return (
    <div
      className={`${theme} bg-skin-fill shadow-2xl rounded-xl relative m-5 flex h-auto flex-col bg-clip-border cursor-pointer lg:w-[45%]`}
    onClick={handleClick}
    >

      <div
        className="relative min-h-[320px] bg-cover bg-no-repeat max-h-[320px] flex w-full justify-center rounded-t-xl"
        style={{
          backgroundImage: "url(" + image + ")",
        }}
      >
      </div>

      {/* //General info */}
      <div className="mt-6 flex px-4 gap-2 flex-col">
        <h4 className="text-skin-base text-xl lg:text-2xl font-bold p-1">
          {title}
        </h4>

        <div className="flex flex-wrap gap-3 lg:text-lg p-1">
          {tags? tags.map((tag, index) => (
            <div
              className="bg-gray-200 rounded-xl  px-3 py-0.5 border-2"
              key={index}
            >
              {tag}
            </div>
          )) : (null)}
        </div>

      

      <div className="w-full flex justify-around p-1">
        <p className="text-denim italic lg:text-xl">{textSum}</p>
      </div>
      <div className="flex justify-between text-gray-400 w-full p-1 text-base">
        <p className="">Author: {author.name}</p>
        <p className="">Updated: {new Date(updated).toLocaleDateString()}</p>
      </div></div>
    </div>
  );
}


