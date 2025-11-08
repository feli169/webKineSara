import Header from "./Components/Header"
import Hero from "./Components/Hero"
import Services from "./components/Service"
import Blog from "./components/Blog"
import Footer from "./components/Footer"
import Contact from "./Components/Contact"

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Services />
        <Blog />
      </main>
      <Footer />
      <Contact />
    </div>
  )
}

export default App
