

// Components
import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Packages from "@/components/sections/Packages";
import Portfolio from "@/components/sections/Portfolio";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

// Animations
import { FloatingElements } from "@/components/animations/FloatingElements";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      {/* Background decorative elements */}
      <FloatingElements 
        className="z-0" 
        count={20}
        colors={['#007AFF', '#5AC8FA', '#FF9500', '#34C759']}
      />
      
      {/* Main content */}
      <div className="relative z-10">
        <Header />
        {/* Wrap the main page sections in a container to center them and add moderate side padding */}
        <div className="w-full max-w-6xl mx-auto px-3 sm:px-4 lg:px-6">
          <Hero />
          <Services />
          <Packages />
          <Portfolio />
          <About />
          <Contact />
        </div>
        <Footer />
      </div>
    </main>
  )
}
