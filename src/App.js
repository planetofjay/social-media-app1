import Header from "./components/Header";
import Footer from "./components/Footer";
import Homepage from "./pages/HomePage";
import PostListPage from "./pages/PostListPage";
import PreferencesPage from "./pages/PreferencesPage";
import AboutUsPage from "./pages/AboutUsPage";

export default function App() {

  return (
    <>
      <Header />

      <Homepage />
      <PostListPage />
      <PreferencesPage />
      <AboutUsPage />

      <Footer />
    </>
  );
  
}