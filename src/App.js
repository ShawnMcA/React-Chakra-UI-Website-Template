import React, { useEffect, useState } from 'react';
import NavBar from './Components/navbar';
import Hero from './Components/hero';

function App() {
  const [isOpenNavBar, setOpenNavBar] = useState(true);
  const [isOpenHero, setOpenHero] = useState(true);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  const updateWindowHeight = () => {
    setWindowHeight(window.innerHeight - 1);
  }

  useEffect(() => {
    window.addEventListener('resize', updateWindowHeight);
    return () => window.removeEventListener('resize', updateWindowHeight);
  }, []);

  return (
    <>
      <NavBar isOpen={isOpenNavBar}/>
      <Hero isOpen={isOpenHero} height={windowHeight}/>
    </>
  );
}

export default App;
