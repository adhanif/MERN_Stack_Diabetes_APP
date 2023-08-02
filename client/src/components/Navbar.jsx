import { useContext, useState } from 'react';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';
import LogoWhiteIcon from '../images/TypeOne_white_noBG-hiQ.png';
import { BiLogIn } from 'react-icons/bi';
import { logOutTheUser } from '../utils/axiosFunctions';

const navigation = [
  { name: 'Home' },
  { name: 'Articles' },
  { name: 'Events' },
  { name: 'About Us' },
  { name: 'Contact Us' },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user, isLoading, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const logoutUser = async () => {
    try {
      await logOutTheUser();
      console.log('after response');
      logout();
      navigate('/');
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div id='navbarelvis' className=''>
      <header className=''>
        <nav
          className='flex items-center bg-[#315a49c4] text-white justify-between p-6 lg:px-16'
          aria-label='Global'
        >
          <div className='flex lg:flex-1'>
            <a href='#' className='-m-1.5 p-1.5'>
              <span className='sr-only'>Your Company</span>
              <NavLink
                to='/'
                className='text-xl font-semibold leading-6 hover:text-white'
              >
                <img className='w-28' src={LogoWhiteIcon} alt='' />
              </NavLink>
            </a>
          </div>
          <div className='flex lg:hidden'>
            <button
              type='button'
              className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700'
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className='sr-only'>Open main menu</span>
              <Bars3Icon className='h-6 w-6' aria-hidden='true' />
            </button>
          </div>
          <div className='hidden lg:flex lg:gap-x-12'>
            {/* {navigation.map((item) => (
              <NavLink
                to={`${item.name}`}
                key={item.name}
                href={item.href}
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                {item.name}
              </NavLink>
            ))} */}
            <NavLink
              to='/'
              className='text-xl font-semibold leading-6 hover:text-gray-800'
            >
              Home
            </NavLink>
            <NavLink
              to='/articles'
              className='text-xl font-semibold leading-6 hover:text-gray-800'
            >
              Articles
            </NavLink>
            <NavLink
              to='/events'
              className='text-xl font-semibold leading-6 hover:text-gray-800'
            >
              Events
            </NavLink>
            <NavLink
              to='/about'
              className='text-xl font-semibold leading-6 hover:text-gray-800'
            >
              About Us
            </NavLink>
            <NavLink
              to='/contactUs'
              className='text-xl font-semibold leading-6 hover:text-gray-800'
            >
              Contact Us
            </NavLink>
          </div>
          <div className='hidden lg:flex lg:flex-1 lg:justify-end'>
            {!isLoading && !user && (
              <NavLink
                to='/login'
                className='text-xl font-semibold leading-6 hover:text-gray-800'
              >
                Log in <span aria-hidden='true'>&rarr;</span>
              </NavLink>
            )}
            {!isLoading && user && (
              <div className='flex gap-5'>
                <NavLink
                  to='/profile'
                  className='text-xl font-semibold leading-6 hover:text-gray-800'
                >
                  {user.name}
                </NavLink>
                <NavLink onClick={logoutUser}>
                  <BiLogIn className='text-2xl' />
                </NavLink>
              </div>
            )}
          </div>
        </nav>
        <Dialog
          as='div'
          className='lg:hidden'
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className='fixed inset-0 z-50' />
          <Dialog.Panel className='fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-slate-600 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10'>
            <div className='flex items-center justify-between'>
              <a href='#' className='-m-1.5 p-1.5'>
                <span className='sr-only'>Your Company</span>
                <img className='h-16 w-auto' src={LogoWhiteIcon} alt='' />
              </a>
              <button
                type='button'
                className='-m-2.5 rounded-md p-2.5 text-gray-700'
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className='sr-only'>Close menu</span>
                <XMarkIcon className='h-6 w-6' aria-hidden='true' />
              </button>
            </div>
            <div className='mt-6 flow-root'>
              <div className='-my-6 divide-y divide-gray-500/10'>
                <div className='space-y-2 py-6'>
                  {navigation.map((item) => (
                    <NavLink
                      to={`${item.name}`}
                      key={item.name}
                      href={item.href}
                      className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'
                    >
                      {item.name}
                    </NavLink>
                  ))}
                </div>
                <div className='py-6'>
                  <a>
                    <NavLink
                      to='/login'
                      className='-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'
                    >
                      Log in
                    </NavLink>
                  </a>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
    </div>
  );
}
