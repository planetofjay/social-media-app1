import Header from "./components/Header";
import Posts from "./components/Posts";
import Footer from "./components/Footer";

export default function App() {
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   console.log('Data sent!');
  // }

  // const handleClick = () => {
  //   console.log('Button clicked');
  // }

  return (
    <>
      <Header />
      <Posts />
      <Footer />
    </>
  );
}