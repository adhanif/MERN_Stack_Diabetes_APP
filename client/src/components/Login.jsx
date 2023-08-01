import React from 'react';
import { useState, useContext } from 'react';
import { useForm } from 'react-hook-form';
import google from '../assets/Google_Logo1.svg';
import login from '../assets/Login-amico1.svg';
import facebook from '../assets/facebook.svg';
import TypeOne_black from '../assets/TypeOne_black.png';
import SecondaryBtn from './buttons/SecondaryBtn';
import axiosClient from '../axiosClient';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//For Authorization
import { AuthContext } from '../context/AuthProvider';

export default function Login({ theme }) {
  const navigate = useNavigate();
  const navigateToSignUp = useNavigate();
  const notify = () => toast.success('The form has been submitted');
  const notifyError = () => toast.error('The form has not submitted');
  const { login } = useContext(AuthContext);

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
        // console.log('In then');
        // console.log(res.data);
        login(res.data);
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

      <div
        className={`${theme}  fluid mx-auto p-6 md:p-14 flex justify-center bg-transparent `}
      >
        <div className='container flex max-w-[1200px] justify-center'>
          {/* Left Side */}
          <div className='hidden bg-login-Image bg-center bg-cover lg:flex w-1/2 overflow-hidden lg:shadow-2xl rounded-l-[15px] '></div>

          {/* Right Side */}
          <div className='bg-white lg:w-1/2  max-w-[600px] h-fit lg:shadow-2xl rounded-[15px] lg:rounded-l-none flex flex-col justify-center '>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className='flex flex-col w-full px-12 pt-12 pb-20 h-full'
            >
              <img
                src={TypeOne_black}
                alt=''
                className='object-contain h-14 w-full mx-auto mb-6  lg:hidden'
              />

              <h1 className='max-w-2xl text-3xl font-bold mb-7 text-skin-inverted'>
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

              {/* Email */}
              <div className='mb-6'>
                <label className='text-sm md:text-base lg:text-xl font-bold text-skin-inverted'>
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
                  className='shadow appearance-none border rounded w-full py-2 px-3 text-skin-inverted leading-tight focus:outline-none focus:shadow-outline'
                />
                <p className='text-skin-form-error italic'>
                  {errors.email?.message || emailError}
                </p>
              </div>

              {/* Password */}
              <div className='mb-12'>
                <label className='text-sm md:text-base lg:text-xl font-bold text-skin-inverted'>
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
                  className='shadow appearance-none border rounded w-full py-2 px-3 text-skin-inverted leading-tight focus:outline-none focus:shadow-outline'
                />
                <p className='text-skin-form-error italic'>
                  {errors.password?.message || passwordError}
                </p>
              </div>
              <div className='flex flex-col items-center justify-between mb-5'>
                <SecondaryBtn text='Login' />

                <button className='mt-20 flex items-center justify-center p-1 w-80 border shadow font-bold text-black  rounded-lg hover:border-skin-border-google-hover  mb-3 text-sm'>
                  <img src={google} alt='' className=' w-10 h-10' />
                  Sign in with Google
                </button>
                <button className='flex mt-6 items-center justify-center p-1 w-80 border shadow font-bold text-black  rounded-lg  hover:border-skin-border-google-hover   text-sm '>
                  <img src={facebook} alt='' className=' w-12 h-10' />
                  Sign in with Facebook
                </button>
              </div>

              {/* <PrimaryBtn text="Submit" /> */}
              {/* <input type="submit" /> */}
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
