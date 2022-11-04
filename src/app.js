import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "@pages/landingpage";
import Dashboard from "@pages/dashboard";
import NotFoundPage from "@pages/notFound";
import { Login } from "@pages/auth";
import { HelmetProvider } from "react-helmet-async";
import ReactHookFormProvider from "./useFormContext/index";

const App = () => {
  return (
    <ReactHookFormProvider>
      <HelmetProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/*" element={<NotFoundPage />} />
            <Route index path="/" element={<LandingPage />} />
            <Route path="/auth/login" element={<Login />} />
            <Route path="/dashboard/*" element={<Dashboard />} />
          </Routes>
        </BrowserRouter>
      </HelmetProvider>
    </ReactHookFormProvider>
  );
};

export default App;
