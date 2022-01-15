import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Letter from "./Letter";
import Main from "./Main";
import Post from "./Post";

const AppRouter = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/post" element={<Post />} />
        <Route path="/letter" element={<Letter />} />
      </Routes>
    </BrowserRouter>
  );
};
export default AppRouter;