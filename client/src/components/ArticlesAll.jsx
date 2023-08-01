import { useState, useEffect } from 'react';
import CardArticle from './CardArticle';
import axiosClient from '../axiosClient';

export default function ArticlesAll({ theme }) {
  const [articles, setArticles] = useState([]);
  const [path, setPath] = useState('/articles');

  useEffect(() => {
    axiosClient
      .get(path)
      .then((res) => {
        console.log(res.data);
        setArticles(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [path]);

  return (
    <div className={`${theme} bg-skin-fill min-h-[80vh]`}>
      <div
        className={`container flex flex-col mx-auto lg:flex-row space-y-5 space-x-0 lg:space-x-5 lg:space-y-0`}
      >
        <div className='w-full sm:w-2/3 md:w-3/4  px-2 pt-5'>
          {articles
            ? articles.map((article, index) => {
                return (
                  <CardArticle
                    key={article._id}
                    theme='theme-secondary'
                    article={article}
                  />
                );
              })
            : 'no articles available'}
        </div>
      </div>
    </div>
  );
}
