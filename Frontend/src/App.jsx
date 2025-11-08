import Header from "./Components/Header"
import Hero from "./Components/Hero"
import Service from "./Components/Service";

import Footer from "./Components/Footer"
import Contact from "./Components/Contact"

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Service /> 
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

export default App
