import React from 'react';

export const Wrapper = ({ children }) => {
  return (
    <main className='container'>
      <section className='section'>{children}</section>
    </main>
  );
};
