import TopBar from "./components/TopBar";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Focus from "./components/Focus";
import Events from "./components/Events";
import Committee from "./components/Committee";
import Join from "./components/Join";
import Footer from "./components/Footer";
import useDarkMode from "./hooks/useDarkMode";
import JoinForm from "./components/JoinForm";

export default function App() {
  const [dark, setDark] = useDarkMode();

  return (
    <div className="min-h-screen bg-paper text-ink dark:bg-dark-bg dark:text-dark-ink">
      <TopBar />
      <Navbar dark={dark} setDark={setDark} />
      <main>
        <Hero />
        <About />
        <Focus />
        <Events />
        <Committee />
        <Join />
      </main>
      <Footer />
    </div>
  );
}
