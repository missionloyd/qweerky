import React from "react";
import Router from "next/router";
import Dashboard from '../layouts/DashboardLayout/Dashboard';

function Index() {
  React.useEffect(() => {
    Router.push('/home')
  },[]);

  return <></>;
}

Index.layout = Dashboard;

export default Index;