import Header from "./components/Header";
import Footer from "./components/Footer";
import Homepage from "./pages/HomePage";
import PostListPage from "./pages/PostListPage";
import PostItemPage from "./pages/PostItemPage";
import PostFormPage from "./pages/PostFormPage";
import PreferencesPage from "./pages/PreferencesPage";
import AboutUsPage from "./pages/AboutUsPage";
import AboutUsPageIntroduction from "./pages/AboutUsPage/Introduction";
import AboutUsPageMission from "./pages/AboutUsPage/Mission";
import AboutUsPagePrivacy from "./pages/AboutUsPage/Privacy";
import NotFoundPage from "./pages/NotFoundPage";

import { Routes, Route } from "react-router-dom";
import { useEffect } from "react";

import * as database from "./database";

export default function App() {

  useEffect(() => {

    // Load the database.
    const result = database.load();
    console.log('Loaded data:', result);

  }, []);

  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Homepage />} />

        <Route path="/posts" element={<PostListPage />} />
        <Route path="/posts/:id" element={<PostItemPage />} />
        <Route path="/posts/add" element={<PostFormPage />} />

        <Route path="/preferences" element={<PreferencesPage />} />
        
        <Route path="/about-us" element={<AboutUsPage />} >
          <Route path="" element={<AboutUsPageIntroduction />} />
          <Route path="mission" element={<AboutUsPageMission />} />
          <Route path="privacy" element={<AboutUsPagePrivacy />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      <Footer />
    </>
  );
  
}