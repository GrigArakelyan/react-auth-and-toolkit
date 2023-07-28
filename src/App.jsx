import React from "react";
import "./App.scss";
import { Navigate, Route, Routes } from "react-router";
import LoginEmail from "./pages/LoginEmail";
import LoginCode from "./pages/LoginCode";
import UserPage from "./pages/UserPage";
import UserLayout from "./layouts/UserLayout";
import UserProfile from "./pages/UserProfile";
import { CODE, DASHBOARD, HOME, USER, USER_PROFILE } from "./constants/router";
import PublicLayout from "./layouts/PublicLayout";


const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path={HOME} element={<PublicRoute />}>
          <Route path={HOME} element={<PublicLayout />}>
            <Route index element={<LoginEmail/>}/>
            <Route path={CODE} element={<LoginCode/>}/>
          </Route>
        </Route>
        <Route path={USER} element={ <PrivateRoute/> }>
          <Route path={USER} element={ <UserLayout/> }>
            <Route path={DASHBOARD} element={ <UserPage />} />
            <Route path={USER_PROFILE} element={<UserProfile />} />
          </Route>
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
