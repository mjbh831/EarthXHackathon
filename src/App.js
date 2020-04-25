import React from 'react';
import './App.css';
import Hero from './components/Hero/Hero';
import Menu from './components/Menu/Menu';
import SignIn from './components/SignIn/SignIn';
import Profile from './components/Profile/Profile';
import Challenge from './components/Challenges/Challenge';
import Challenge2 from './components/Challenges/Challenge2';
import Challenge3 from './components/Challenges/Challenge3';
import Challenge4 from './components/Challenges/Challenge4';



function App() {
  return (
    <div className="App">
    {
	    // <Hero />
	    // <Menu />
	    // <SignIn />
    }
      
      <Profile />
      <Challenge />
      <Challenge2 />
      <Challenge3 />
      <Challenge4 />
    </div>
  );
}

export default App;
