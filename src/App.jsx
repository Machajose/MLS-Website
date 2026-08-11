import TopBar from "./components/TopBar";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Focus from "./components/Focus";
import Cohorts from "./components/Cohorts";
import Events from "./components/Events";
import Moments from "./components/Moments";
import Committee from "./components/Committee";
import Join from "./components/Join";
import Footer from "./components/Footer";
import Reveal from "./components/Reveal";
import useDarkMode from "./hooks/useDarkMode";
import ChatWidget from "./components/ChatWidget";
import AdminPortal from "./components/AdminPortal";

export default function App() {
  const [dark, setDark] = useDarkMode();

  if (window.location.pathname === "/admin") {
    return <AdminPortal />;
  }

  return (
    
    <div className="min-h-screen bg-paper text-ink dark:bg-dark-bg dark:text-dark-ink">
      <TopBar />
      <Navbar dark={dark} setDark={setDark} />
      <main>
        <Hero />
        <Reveal>
          <About />
        </Reveal>
        <Focus />
        <Cohorts />
        <Reveal>
          <Events />
        </Reveal>
        <Reveal>
          <Moments />
        </Reveal>
        <Committee />
        <Reveal>
          <Join />
        </Reveal>
      </main>
      <Footer />
<ChatWidget />
</div>
  );
}