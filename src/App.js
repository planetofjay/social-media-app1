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

  const sayHi = (name) => {
    console.log('Hi', name);
    console.log('How are you?');
  }

  return (
    <>
      <Header />
      <Posts />
      <Footer />

      <button onClick={() => sayHi('Jay')}>
        Say Hi to Jay
      </button>
      <button onClick={() => sayHi('Mary')}>
        Say Hi to Mary
      </button>
    </>
  );
}