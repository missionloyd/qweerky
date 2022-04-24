import Dashboard from "./DashboardLayout/Dashboard";
import MainLayout from "./MainLayout/MainLayout";

const layouts = {
  //admin: AdminLayout
  Dashboard: Dashboard,
  MainLayout: MainLayout
};

const LayoutWrapper = (props) => {
  // to get the text value of the assigned layout of each component
  const Layout = layouts[props.children.type.layout];
  // if we have a registered layout render children with said layout
  if (Layout != null && !username) {
    return <Layout {...props}>{props.children}</Layout>;
  } else if (!username) {
    // if not render children with fragment
    return <Dashboard {...props}>{props.children}</Dashboard>;
  } else {
    return <MainLayout {...props}>{props.children}</MainLayout>
  }

};

export default LayoutWrapper;
