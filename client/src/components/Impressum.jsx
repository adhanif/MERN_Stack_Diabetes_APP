import React from 'react';

export default function Impressum() {
  return (
    <div className='fluid flex flex-col min-h-[100vh] justify-center items-center'>
      <h1 className='font-bold text-6xl pt-10'>Impressum</h1>
      <h4 className='font-bold text-xl pt-10 '>Contact</h4>
      <p className='text-center'>
        TypeOne Diabetes GmbH <br />
        Hauptstraße 35 <br />
        18182 Rostock <br />
        Phone: +49171/4384934
      </p>
      <p className='w-1/2 text-center py-10'>
        The content of TypeOne is intended for informational purposes only. The
        information on this site is in no way a substitute for professional
        advice or treatment by trained and recognized doctors. TypeOne assumes
        no liability whatsoever for the correctness and/or completeness of the
        information presented here. Since these pages are interactive databases,
        we expressly distance ourselves from the links on this page to other
        pages and make it clear that we do not want to adopt the content of the
        linked pages as our own! Should we infringe applicable copyright due to
        an entry, we ask for a note so that we can remove the relevant content.
        All logos and trademarks are property of their respective owners. The
        comments and contributions of other authors are the responsibility of
        their respective posters. Copyright © 2023 (unless otherwise noted)
        TypeOne.com
      </p>
    </div>
  );
}
