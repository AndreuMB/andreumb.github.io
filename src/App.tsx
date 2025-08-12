import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import DarkModeToggle from './components/DarkModeToggle';
import Welcome from './components/Welcome';

function App() {
  return (
    <>
      <DarkModeToggle />
      <Header />
      <Welcome />
      <Footer />
    </>
  );
}

export default App;
