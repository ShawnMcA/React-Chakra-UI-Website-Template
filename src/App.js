import React, { useState } from 'react';
import NavBar from './Components/navbar';
import Hero from './Components/hero';

function App() {
  const [isOpenNavBar, setOpenNavBar] = useState(true);
  const [isOpenHero, setOpenHero] = useState(true);

  return (
    <>
      <NavBar isOpen={isOpenNavBar}/>
      <Hero isOpen={isOpenHero}/>
    </>
  );
}

export default App;
