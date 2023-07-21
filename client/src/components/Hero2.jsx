import LogoWhiteInline from '../images/TypeOne_white_noBG_inline-hiQ.png';
import HappyKids2 from '../images/happy-kids2.png';
import SecondaryBtn from './buttons/SecondaryBtn';
import OutlineBtn from './buttons/OutlineBtn';

export default function Hero2() {
  return (
    <>
      {/* <div className="relative isolate px-6 pt-14 lg:px-8"> */}
      <div className='container flex flex-col-reverse items-center px-6 pb-20 mx-auto space-y-0 md:space-y-0 md:flex-row'>
        {/* ---------------------------Middle Part-------------------------- */}
        <div className='flex flex-col space-y-8 md:w-1/2  lg:py-36'>
          {/* ---------------Text Part--------------- */}
          <div className='text-center'>
            {/* ---------------Pre Text--------------- */}
            <p className='my-6 text-xl font-bold text-center leading-8 text-gray-200'>
              Welcome to your personal first aid guide to manage your diabetes
              with
            </p>
            {/* ---------------Big Logo--------------- */}
            <img src={LogoWhiteInline} alt='' className='h-30'></img>
            {/* ---------------Text Buddy--------------- */}
            <p className='text-2xl font-bold my-6 text-gray-200'>
              make diabetes your buddy
            </p>
            {/* ---------------Get Started Button--------------- */}
            <div className='theme-hero mt-10 flex items-center justify-center gap-x-6'>
              {/* <SecondaryBtn text /> */}
              {/* <a
                  href="#"
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Get started
                </a> */}
              {/* ---------------Learn More Arrow--------------- */}
              {/* <a
                href='#'
                className='text-xl font-semibold leading-6 text-gray-900'
              >
                Learn more <span aria-hidden='true'>→</span>
              </a> */}
              <OutlineBtn text='Learn more' />
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
