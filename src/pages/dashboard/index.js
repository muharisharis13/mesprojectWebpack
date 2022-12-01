import DashboardHome from "./home";
import AccountDashboard from "./account";
import HeaderPageDashboard from "./LandingPage/header";
import BannerPageDashboard from "./LandingPage/banner";
import AboutPageDashboard from "./LandingPage/about";
import ServicesPageDashboard from "./LandingPage/services";
import PortofolioPageDashboard from "./LandingPage/portofolio";
import TeamPageDashboard from "./LandingPage/team";
import { HelmetDashboard } from "@utils";
import NotFound from "../notFound";
import { MenuDashboard, HeaderDashboard } from "@components/dashboard";
import { Route, Routes } from "react-router-dom";
import { Loading } from "@components";
import { useFormContext, useWatch } from "react-hook-form";
import { Toast } from "../../../components";

const Dashboard = () => {
  const { getValues } = useFormContext();
  const toast = useWatch({ name: "toast" });
  const toast_data = useWatch({ name: "toast_data" });
  const loading = getValues("loading");
  return (
    <div className="layout-wrapper layout-content-navbar">
      <HelmetDashboard />
      <Loading show={loading} />
      <Toast
        show={toast}
        title={toast_data["title"]}
        type={toast_data["type"]}
        content={toast_data["content"]}
      />
      <div className="layout-container">
        <MenuDashboard />
        <div className="layout-page">
          <HeaderDashboard />
          <Routes>
            <Route path="/*" element={<NotFound />} />
            <Route index path="/" element={<DashboardHome />} />
            <Route path="/account" element={<AccountDashboard />} />
            <Route path="/landingpage">
              <Route path="TeamPageDashboard" element={<TeamPageDashboard />} />
              <Route
                path="PortofolioPageDashboard"
                element={<PortofolioPageDashboard />}
              />
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
