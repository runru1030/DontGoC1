import React from "react";
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import Letter from "./Letter";
import Main from "./Main";
import Post from "./Post";

const AppRouter = () => {
  return (
    <HashRouter >
      <Routes>
        <Route path="/DontGoC1" element={<Main />} />
        <Route path="/DontGoC1/post" element={<Post />} />
        <Route path="/DontGoC1/letter" element={<Letter />} />
      </Routes>
    </HashRouter>
  );
};
export default AppRouter;