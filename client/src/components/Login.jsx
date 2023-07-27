import React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import google from '../assets/Google_Logo1.svg';
import login from '../assets/Login-amico1.svg';
import facebook from '../assets/facebook.svg';
import TypeOne_black from '../assets/TypeOne_black.png';
import PrimaryBtn from './buttons/PrimaryBtn';
import axiosClient from '../axiosClient';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Login() {
  const navigate = useNavigate();
  const navigateToSignUp = useNavigate();
  const notify = () => toast.success('The form has been submitted');
  const notifyError = () => toast.error('The form has not submitted');

  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = (data) => {
    axiosClient
      .post('/login', data)
      .then((res) => {
        notify();
        navigate('/');
      })
      .catch((err) => {
        // console.log(err.response);
        if (err.response) {
          if (err.response.status === 404) {
            setEmailError(err.response.data);
            setPasswordError('');
          } else if (err.response.status === 401) {
            setEmailError('');
            setPasswordError(err.response.data);
          }
        }
        // notifyError();
        console.log(err);
      });
  };

  return (
    <>
      <div>
        <ToastContainer
          position='top-right'
          autoClose={500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme='dark'
        />
      </div>
      <div className='container flex flex-row  mx-auto justify-center md:justify-center my-10 md:space-x-40'>
        <div className='w-1/2 max-w-md hidden lg:flex'>
        <img src='/src/images/woodenDoor2.jpg' alt='' />
          {/* <img src={login} alt='' /> */}
        </div>
        <div className='w-full max-w-md  lg:w-1/2'>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className='bg-white border shadow-md rounded px-8 pt-6 pb-8 '
            style={{ boxShadow: '0 4px 6px -1px #BDB2C9' }}
          >
            <img
              src={TypeOne_black}
              alt=''
              className='object-contain h-14 w-full mx-auto mb-6  lg:hidden'
            />

            <h1 className='max-w-2xl text-center md:text-left lg:text-left text-3xl font-bold mb-7'>
              Sign in
            </h1>

            <p className='text-neutral-500 dark:text-neutral-200 text-sm font-bold mb-6'>
              New User?{' '}
              <a
                className='inline-block align-baseline font-bold text-sm text-blue-500 hover:underline hover:text-blue-800'
                href='#'
                to=''
                onClick={(handleNavigate) => {
                  navigateToSignUp('/signUp');
                }}
              >
                Create account
              </a>
            </p>
            <div className='mb-4'>
              <label className='block text-gray-700 text-sm font-bold mb-2'>
                {' '}
                Email
              </label>
              <input
                {...register('email', {
                  required: 'Please enter an email address.',
                  maxLength: { value: 30, message: 'Maximum length is 30' },
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: 'Please enter a valid email address.',
                  },
                })}
                type='email'
                placeholder='Email'
                // className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                  errors.email ? 'border-red-500' : ''
                }`}
              />
              <p style={{ color: 'red' }}>
                {errors.email?.message || emailError}
              </p>
            </div>

            <div className='mb-10'>
              <label className='block text-gray-700 text-sm font-bold mb-2'>
                Password
              </label>
              <input
                {...register('password', {
                  required: 'Please enter the password.',
                  minLength: { value: 6, message: 'Minimum length is 6' },
                })}
                type='password'
                // type="password"
                placeholder='Password'
                className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                  errors.password ? 'border-red-500' : ''
                }`}
              />
              <p style={{ color: 'red' }}>
                {errors.password?.message || passwordError}
              </p>
            </div>
            <div className='flex flex-col items-center justify-between mb-5'>
              <button
                className='p-2 w-32   font-bold text-white rounded-full  hover:bg-red-500  hover:scale-110 mb-8  '
                type='submit'
                style={{ backgroundColor: '#383740' }}
              >
                {' '}
                Login
              </button>
              {/* <PrimaryBtn text="Login" /> */}

              <button className='flex items-center justify-center p-1 w-80 border shadow font-bold text-black  rounded-full  hover:border-blue-500  mb-3 text-sm'>
                {' '}
                <img src={google} alt='' className=' w-10 h-10' />
                Sign in with Google
              </button>
              <button className='flex items-center justify-center p-1 w-80 border shadow font-bold text-black  rounded-full  hover:border-blue-500   text-sm '>
                {' '}
                <img src={facebook} alt='' className=' w-12 h-10' />
                Sign in with Facebook
              </button>
            </div>

            {/* <PrimaryBtn text="Submit" /> */}
            {/* <input type="submit" /> */}
          </form>
        </div>
      </div>
    </>
  );
}
