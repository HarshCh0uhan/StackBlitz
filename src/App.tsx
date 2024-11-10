import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Companies from './components/Companies';

function App() {
  return (
    <div className="min-h-screen bg-[#1A1B1E]">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Companies />
      </main>
    </div>
  );
}

export default App;