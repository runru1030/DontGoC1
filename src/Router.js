import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Letter from "./Letter";
import Main from "./Main";
import Post from "./Post";

const AppRouter = () => {
  return (
    <BrowserRouter basename={'/DontGoC1'}>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/DontGoC1/post" element={<Post />} />
        <Route path="/DontGoC1/letter" element={<Letter />} />
      </Routes>
    </BrowserRouter>
  );
};
export default AppRouter;