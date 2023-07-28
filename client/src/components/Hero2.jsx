import LogoWhiteInline from '../images/TypeOne_white_noBG_inline-hiQ.png';
import HappyKids2 from '../images/happy-kids2.png';
import OutlineBtn from './buttons/OutlineBtn';
import Test from './Test';
import { useNavigate } from 'react-router-dom';

export default function Hero() {
  const navigate = useNavigate();
  const navigateToArticles = useNavigate();
  return (
    <>
      {/* <div className="relative isolate px-6 pt-14 lg:px-8"> */}
      <div className='container flex flex-col-reverse items-center gap-20 px-6 pb-00 mx-auto space-y-0 md:space-y-0 md:flex-row'>
        {/* ---------------------------Middle Part-------------------------- */}
        <div className='flex flex-col space-y-8 md:w-1/2  lg:py-10'>
          {/* ---------------Text Part--------------- */}
          <div className='text-center'>
            {/* ---------------Big Logo--------------- */}
            <img src={LogoWhiteInline} alt='' className='h-30'></img>
            {/* ---------------Big Text--------------- */}
            {/* <h1 className='my-8 text-xl font-bold text-left pl-5 text-gray-100 md:text-lg lg:text-4xl lg:leading-[2.5rem]'>
              Welcome to your personal first aid guide to manage your diabetes
            </h1> */}
            <h1 className='my-8 text-xl font-bold text-center text-gray-100 md:text-lg lg:text-4xl lg:leading-[2.5rem]'>
              - make diabetes your buddy -
            </h1>
            <p className='text-xl text-left px-5 my-6 text-gray-300'>
              Welcome to the TypeOne-app, where young superheroes can learn
              about diabetes, read informative articles and find local events to
              connect with others on a similar journey. Join us to embrace a
              healthier lifestyle, gain valuable insights, and become the
              ultimate hero in managing your diabetes.
            </p>
            {/* ---------------Text Buddy--------------- */}
            {/* <p className='text-lg font-bold my-6 text-gray-200'>
              make diabetes your buddy
            </p> */}
            {/* ---------------Get Started Button--------------- */}
            <div className='mt-10 flex items-center justify-center gap-x-6'>
              <OutlineBtn
                text='Get Started'
                onClick={(handleNavigate) => {
                  navigateToArticles('/articles');
                }}
              />
              {/* <a
                  href="#"
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Get started
                </a> */}
              {/* ---------------Learn More Arrow--------------- */}
              {/* <a
                href='#'
                className='text-large font-semibold leading-6 text-gray-900'
              >
                Learn more <span aria-hidden='true'>→</span>
              </a> */}
            </div>
          </div>
        </div>
        {/* Image */}
        <div className='  md:w-1/2  lg:pt-32'>
          <img src={HappyKids2} alt='' />
        </div>
      </div>
    </>
  );
}
