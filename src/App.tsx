import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import DarkModeToggle from './components/TopRightPanel';
import Welcome from './components/Welcome';
import MusicPlayer from './components/MusicPlayer';

function App() {
  return (
    <>
      <MusicPlayer />
      <DarkModeToggle />
      <Header />
      <Welcome />
      <Footer />
    </>
  );
}

export default App;
