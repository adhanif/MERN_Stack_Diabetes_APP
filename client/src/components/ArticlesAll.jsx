import { useState, useEffect } from "react";
import CardArticle from "./CardArticle";
import axiosClient from "../axiosClient";

export default function ArticlesAll({ theme }) {
  const [articles, setArticles] = useState([]);
  const [path, setPath] = useState("/articles");

  useEffect(() => {
    axiosClient
      .get(path)
      .then((res) => {
        setArticles(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [path]);

  return (
    <div className={`${theme} bg-skin-fill flex fluid`}>
      {/* <div
        className='container justify-center mx-auto space-y-5 space-x-0 lg:flex-row lg:space-x-5 lg:space-y-0'
      ></div> */}
      <div className="flex flex-col md:flex-wrap lg:justify-center md:flex-row  px-2 py-5">
        {articles
          ? articles.map((article, index) => {
              return (
                <CardArticle
                  key={article._id}
                  theme="theme-secondary"
                  article={article}
                />
              );
            })
          : "no articles available"}
      </div>
    </div>
  );
}
