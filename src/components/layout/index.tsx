import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from "../../pages/Home/Home";
import SignIn from "../../pages/SignIn/SignIn";
import SignUp from "../../pages/SignUp/SignUp";
import { getTokenAccess } from "../../utils/localStorage";


const PrivateRoute = ({ children }: any) => {
  const auth = getTokenAccess();
  return auth ? children : <Navigate to="/" />;
};

function RootRouters() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Navigate to="/signin" />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/home"
          element={
            <PrivateRoute>
              <Home/>
            </PrivateRoute>
          }
        >
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default RootRouters;