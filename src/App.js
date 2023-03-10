import Header from "./components/Header";
import Footer from "./components/Footer";
import Homepage from "./pages/HomePage";
import PostListPage from "./pages/PostListPage";
import PostItemPage from "./pages/PostItemPage";
import PostFormPage from "./pages/PostFormPage";
import PreferencesPage from "./pages/PreferencesPage";
import AboutUsPage from "./pages/AboutUsPage";
import AboutUsMissionPage from "./pages/AboutUsPage/Mission";
import AboutUsPrivacyPage from "./pages/AboutUsPage/Privacy";
import NotFoundPage from "./pages/NotFoundPage";

import { Routes, Route } from "react-router-dom";

export default function App() {

  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Homepage />} />

        <Route path="/posts" element={<PostListPage />} />
        <Route path="/posts/:id" element={<PostItemPage />} />
        <Route path="/posts/add" element={<PostFormPage />} />

        <Route path="/preferences" element={<PreferencesPage />} />
        
        <Route path="/about-us" element={<AboutUsPage />} />
        <Route path="/about-us/mission" element={<AboutUsMissionPage />} />
        <Route path="/about-us/privacy" element={<AboutUsPrivacyPage />} />

        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      <Footer />
    </>
  );
  
}