import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import DarkModeToggle from './components/DarkModeToggle';

function App() {
  return (
    <>
      <DarkModeToggle />
      <Header />
      <Footer />
    </>
  );
}

export default App;
