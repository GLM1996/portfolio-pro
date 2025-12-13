import Navbar from "./components/Navbar"
import Header from "./components/Header"
import About from "./components/About"
import Skills from "./components/Skills"
import Services from "./components/Services"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import FloatingChat from "./components/FloatingChat"
import Footer from "./components/Footer"
function App() {

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-gray-200 font-inter">
      {/* <FloatingChat /> */}
      <Navbar />
      <Header />
      <About />
      <Skills />
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
