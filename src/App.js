import Header from "./components/Header";
import Footer from "./components/Footer";
import Homepage from "./pages/HomePage";
import PostListPage from "./pages/PostListPage";
import PreferencesPage from "./pages/PreferencesPage";
import AboutUsPage from "./pages/AboutUsPage";

import { Routes, Route } from "react-router-dom";

export default function App() {

  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/posts" element={<PostListPage />} />
        <Route path="/preferences" element={<PreferencesPage />} />
        <Route path="/about-us" element={<AboutUsPage />} />
      </Routes>

      <Footer />
    </>
  );
  
}