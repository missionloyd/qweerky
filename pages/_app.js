import React, { useEffect } from 'react';
import ReactDOM from "react-dom";
import Router, { useRouter } from "next/router";
import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../styles/theme';
import { UserContext } from '../lib/context';
import PageChange from "../components/shared/PageChange.js";
import { useAuth } from '../lib/hooks/auth-hook';
import toast, { Toaster } from 'react-hot-toast';

Router.events.on("routeChangeStart", (url) => {
  const root = url.split('/');
  const join = root[1];

  toast.success(`Loading: ${join}`);
  ReactDOM.render(
    <PageChange path={url}/>,
    document.getElementById("page-transition")
  );
});
Router.events.on("routeChangeComplete", () => {
  ReactDOM.unmountComponentAtNode(document.getElementById("page-transition"));
});
Router.events.on("routeChangeError", () => {
  ReactDOM.unmountComponentAtNode(document.getElementById("page-transition"));
});

export default function MyApp(props){
  const { Component, pageProps } = props;
  const Layout = Component.layout || (({children}) => <>{children}</>);
  const { username, login, logout, uid } = useAuth();
  const router = useRouter();

  // scroll to top when route changes
  useEffect(() => {
    const hashId = 'anchor';
    const element = document.getElementById(hashId);
    if (element) {
      element.scrollIntoView({
        block: 'end',
        inline: 'nearest',
        // behavior: 'smooth',
      });
    }
  }, [router.route]);

  return (
    <React.Fragment>
      <Head>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <title>Foster Cooperative</title>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <UserContext.Provider value={{
          isLoggedIn: !!username,
          uid: uid,
          username: username,
          login: login,
          logout: logout
        }}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
          <Toaster />
        </UserContext.Provider>
      </ThemeProvider>
    </React.Fragment>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};