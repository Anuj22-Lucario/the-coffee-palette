import { ThemeProvider } from '@/context/ThemeContext';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Menu from '@/components/Menu';
import BookingWizard from '@/components/BookingWizard';
import BentoVibes from '@/components/BentoVibes';
import Footer from '@/components/Footer';
import MobileDock from '@/components/MobileDock';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen" style={{ background: 'var(--bg-primary)' }}>
        <Navbar />
        <main>
          <Hero />
          <Menu />
          <BookingWizard />
          <BentoVibes />
        </main>
        <Footer />
        <MobileDock />
      </div>
    </ThemeProvider>
  );
}

export default App;
