import DashboardHome from "./home";
import AccountDashboard from "./account";
import HeaderPageDashboard from "./LandingPage/header";
import BannerPageDashboard from "./LandingPage/banner";
import AboutPageDashboard from "./LandingPage/about";
import ServicesPageDashboard from "./LandingPage/services";
import { HelmetDashboard } from "@utils";
import NotFound from "../notFound";
import { MenuDashboard, HeaderDashboard } from "@components/dashboard";
import { Route, Routes, BrowserRouter } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="layout-wrapper layout-content-navbar">
      <HelmetDashboard />
      <div className="layout-container">
        <MenuDashboard />
        <div className="layout-page">
          <HeaderDashboard />
          <Routes>
            <Route path="/*" element={<NotFound />} />
            <Route index path="/" element={<DashboardHome />} />
            <Route path="/account" element={<AccountDashboard />} />
            <Route path="/landingpage">
              <Route
                path="ServicesPageDashboard"
                element={<ServicesPageDashboard />}
              />
              <Route
                path="AboutPageDashboard"
                element={<AboutPageDashboard />}
              />
              <Route
                path="BannerPageDashboard"
                element={<BannerPageDashboard />}
              />
              <Route
                path="HeaderPageDashboard"
                element={<HeaderPageDashboard />}
              />
            </Route>
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
