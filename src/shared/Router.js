import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "../components/general/Navbar";
// import Test from "../components/Test";

import Homepage from "../pages/Homepage";
import Detail from "../pages/Detail";
import ListRating from "../pages/ListRating";
import ListRegion from "../pages/ListRegion";
import UserSettings from "../pages/UserSettings";
import UserRequest from "../pages/UserRequest";
import AdminPost from "../pages/AdminPost";
import AdminRequest from "../pages/AdminRequest";
import AdminManage from "../pages/AdminManage";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Error404 from "../pages/Error404";

const Router = () => {
  return (
    <>
      <BrowserRouter basename="/ambojakulinesia">
      <Navbar/>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="Food/detail/:foodName" element={<Detail />} />
          <Route path="Food/region/:region" element={<ListRegion />} />
          <Route path="Food/rating" element={<ListRating />} />
          <Route path="User/setting" element={<UserSettings />} />
          <Route path="User/request" element={<UserRequest />} />
          <Route path="Admin/post" element={<AdminPost />} />
          <Route path="Admin/request" element={<AdminRequest />} />
          <Route path="Admin/manage" element={<AdminManage />} />
          <Route path="Login" element={<Login />} />
          <Route path="Register" element={<Register />} />
          {/* <Route path="Test" element={<Test />} /> */}
          <Route path="Error404" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;