import React, { forwardRef } from 'react';
import Head from 'next/head'
import PropTypes from 'prop-types';

const Page = forwardRef(({
  children,
  title = '',
  className = '',
  ...rest
}, ref) => {
  return (
    <div
      ref={ref}
      {...rest}
    >
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <section id="anchor"></section>
        {children}
      </main>
    </div>
  );
});

Page.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string
};

export default Page;