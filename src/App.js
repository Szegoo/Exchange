import { Exchange } from './components2/Convert';
import { Exchange2 } from './components2/Convert2';
import { GetFree } from './components2/GetFree';
import { Balance } from './components2/Balance';
import { React, useState } from 'react';
import './css/style.css';

function App() {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="grid">
      <header>
        <h1>Stable Token Exchange</h1>
        <div onClick={() => { setOpen(currentState => !currentState) }} className="menu__toggle"></div>
        <Balance />
        {isOpen &&
          <nav>
            <ul className="site-nav">
              <li><a href="/">Home</a></li>
              <li><a href="/">Exchange</a></li>
              <li><a href="/">Buy</a></li>
              <li className="right"><a href="/">About Us</a></li>
              <li><a className="close-nav" onClick={() => { setOpen(currentState => !currentState) }}>X</a></li>
            </ul>
          </nav>
        }
      </header>
      <nav className="desktop-nav">
        <ul className="site-nav">
          <li><a href="/">Home</a></li>
          <li><a href="/">Exchange</a></li>
          <li><a href="/">Buy</a></li>
          <li className="right"><a href="/about-us">About Us</a></li>
        </ul>
      </nav>
      <aside className="hero">Everything is possible.</aside>
      <Exchange />
      <Exchange2 />
      <GetFree />
    </div >
  );
}

export default App;