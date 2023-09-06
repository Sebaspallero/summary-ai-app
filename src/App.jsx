import Demo from "./components/Demo"
import Hero from "./components/Hero"
import Footer from "./components/Footer"

import "./App.css"

function App() {
  return (
    <main>
      <div className="main">
        <div className="gradient"/>
      </div>
      <div className="relative z-10 flex justify-between items-center flex-col max-w-7xl mx-auto sm:px-16 px-6">
        <Hero/>
        <Demo/>
        <Footer/>
      </div>
    </main>
  )
}

export default App