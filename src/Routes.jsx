import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const Vendorsselectone = React.lazy(() => import("pages/Vendorsselectone"));
const Vendors = React.lazy(() => import("pages/Vendors"));
const Signup = React.lazy(() => import("pages/Signup"));
const ListVendorOne = React.lazy(() => import("pages/ListVendorOne"));
const ListVendor = React.lazy(() => import("pages/ListVendor"));
const Home1 = React.lazy(() => import("pages/Home1"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home1 />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/listvendor" element={<ListVendor />} />
          <Route path="/listvendorone" element={<ListVendorOne />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/vendors" element={<Vendors />} />
          <Route path="/vendorsselectone" element={<Vendorsselectone />} />
          <Route path="/dhiwise-dashboard" element={<Home />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
