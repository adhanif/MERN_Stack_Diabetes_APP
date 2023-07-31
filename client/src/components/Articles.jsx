import React from "react";
import CardArticle from "./CardArticle";
import { articles, paragraph } from "../articles/welcome";

function Articles({ theme }) {
  return (
    <section
      className={`${theme} fluid flex flex-col items-center bg-skin-fill pt-5`}
    >
      <h2 className="text-7xl text-center font-extrabold my-4">Articles</h2>
      <p className="px-24 lg:px-52 text-xl text-center my-6">{paragraph}</p>
      <div
        className={`${theme} w-3/4 flex flex-wrap overflow-y-auto justify-center bg-skin-fill mt-5 pb-10 h-[850px] lg:h-[750px]`}
      >
        {articles.map((article) => {
          return <CardArticle theme="theme-secondary" article={article} />;
        })}

        {/* <Card theme='theme-secondary' person={adnan} />
        <Card theme='theme-secondary' person={elvis} /> */}
      </div>
    </section>
  );
}

export default Articles;
