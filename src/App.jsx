import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SingleVideo from "./pages/SingleVideo";
import SearchPage from "./pages/SearchPage";
import ChannelPage from "./pages/ChannelPage";
import Home from "./pages/Home";
import Header from "./components/Header";
import { Box } from "@mui/material";
import CategoryPage from "./pages/CategoryPage";

const App = () => {
  return (
    <Router>
      <div className="main">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category" element={<CategoryPage />} />
          <Route path="video/:id" element={<SingleVideo />} />
          <Route path="/channel/:id" element={<ChannelPage />} />
          <Route path="/search/:search" element={<SearchPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
