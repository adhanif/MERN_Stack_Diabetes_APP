import React, { useEffect, useState, useContext } from 'react';
//import { articles } from "../articles/welcome";
import { useParams } from 'react-router-dom';
import axiosClient from '../axiosClient';
import CommentList from './CommentList';
import SecondaryBtn from './buttons/SecondaryBtn';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../context/AuthProvider';

export default function ArticleDetail({ theme }) {
  const { user } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { id } = useParams();
  const [article, setArticle] = useState();

  const [comments, setComments] = useState([]);

  useEffect(() => {
    axiosClient
      .get(`/articles/${id}`)
      .then((res) => {
        //console.log(res.data);
        setArticle(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  useEffect(() => {
    axiosClient
      .get(`/articles/${id}/comments`)
      .then((res) => {
        console.log(res.data);
        setComments(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  const onSubmit = (data) => {
    axiosClient
      .post(`/articles/${id}/comments`, data)
      .then((res) => {
        console.log(res.data);
        setComments([{ ...res.data, creator: user }, ...comments]);
        reset();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className={`${theme} bg-skin-fill`}>
      <div
        className={`bg-skin-fill shadow-2xl rounded-xl relative m-auto pt-6 mb-6 flex h-full w-[55%] flex-col bg-clip-border`}
      >
        {article && (
          <>
            <div
              className='relative min-h-[360px] bg-cover bg-no-repeat bg-center max-h-[320px] flex w-full justify-center rounded-t-xl'
              style={{
                backgroundImage: 'url(' + article.image + ')',
              }}
            ></div>
            {/* //General info */}

            <div className="mt-6 flex  px-12 gap-2 flex-col">
              <h4 className="text-xl lg:text-5xl font-bold p-1">

                {article.title}
              </h4>

              <div className='flex flex-wrap gap-3 lg:text-lg p-1'>
                {article.tags.map((tag, index) => (
                  <div
                    className='bg-gray-200 rounded-xl  px-3 py-0.5 border-2'
                    key={index}
                  >
                    {tag}
                  </div>
                ))}
              </div>

              <div className='w-full justify-around p-1 pt-4'>
                {/* <div className="lg:text-xl">{article.text}</div> */}
                {article?.text?.map((item, index) => {
                  //console.log(item);
                  if (item.type === 'h3') {
                    return (
                      <h3 key={index} className='text-xl font-bold mb-2 mt-3'>
                        {item.value}
                      </h3>
                    );
                  } else if (item.type === 'p') {
                    return (
                      <p key={index} className='mb-2'>
                        {item.value}
                      </p>
                    );
                  } else if (item.type === 'br') {
                    return (
                      <p key={index} className='mb-2'>
                        <br />
                        {item.value}
                      </p>
                    );
                  }
                })}
              </div>

              <div className="flex justify-between text-gray-400 w-full p-1 pb-2 text-base">
                <p className="">Author: {article.author.name}</p>
                <p className="">
                  Updated: {new Date(article.updated).toLocaleDateString()}
                </p>
              </div>
            </div>
          </>
        )}
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}

        className="items-center rounded-xl relative m-auto my-6 justify-between flex gap-4  w-[55%]"

      >
        <input
          {...register('text')}
          placeholder='Add your comment...'
          type='text'
          className='rounded-xl pl-4 w-full h-12 '
        />
        <SecondaryBtn text='Send' />
      </form>
      <CommentList theme='theme-pink' comments={comments} />
    </div>
  );
}
