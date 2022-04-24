import React from "react";
import Router from "next/router";
import Dashboard from '../layouts/DashboardLayout/Dashboard';
// import { useContext } from 'react';
// import { UserContext } from '../lib/context';

function Index() {
  // const { user, loading } = useContext(UserContext);

  // React.useEffect(() => {
  //   const { pathname } = Router;
  //   if(pathname == '/' && !loading) {
  //     if(user) {
  //       Router.push("/home");
  //     } else {
  //       Router.push("/auth");
  //     }
  //   }

  // }, [user, loading]);

  React.useEffect(() => {
    Router.push('/home')
  },[]);

  return <></>;
}

Index.layout = Dashboard;

export default Index;