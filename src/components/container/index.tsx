import React from 'react';

const Container = ({children}:{children:React.ReactNode}) => {
  return (
    <div className='flex max-w-screen-xl mx-auto mt-10'>
      {children}
    </div>
  );
};

export default Container;