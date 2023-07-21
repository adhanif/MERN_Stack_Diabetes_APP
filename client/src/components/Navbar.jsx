import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { NavLink } from 'react-router-dom';
import LogoWhiteIcon from '../images/TypeOne_white_noBG-hiQ.png';

const navigation = [
  { name: 'Home' },
  { name: 'Articles' },
  { name: 'Events' },
  { name: 'About Us' },
];

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className='theme-hero'>
      {/* ---------------Navbar--------------- */}
      <nav
        className='flex items-center justify-between p-6 lg:px-16'
        aria-label='Global'
      >
        <div className='flex lg:flex-1'>
          <a href='#' className='-m-1.5 p-1.5'>
            <span className='sr-only'>Your Company</span>
            <img className='w-28' src={LogoWhiteIcon} alt='' />
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
            className='text-lg font-semibold leading-6 text-gray-900 hover:text-skin-base'
          >
            Home
          </NavLink>
          <NavLink
            to='/articles'
            className='text-lg font-semibold leading-6 text-gray-900 hover:text-skin-base'
          >
            Articles
          </NavLink>
          <NavLink
            to='/events'
            className='text-lg font-semibold leading-6 text-gray-900 hover:text-skin-base'
          >
            Events
          </NavLink>
          <NavLink
            to='/about'
            className='text-lg font-semibold leading-6 text-gray-900 hover:text-skin-base'
          >
            About Us
          </NavLink>
        </div>
        <div className='hidden lg:flex lg:flex-1 lg:justify-end'>
          <NavLink
            to='/login'
            className='text-lg font-semibold leading-6 text-gray-900 hover:text-skin-base'
          >
            Log in <span aria-hidden='true'>&rarr;</span>
          </NavLink>
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
  );
}
