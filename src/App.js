import { ContractABI } from './ContractABI';
import Web3 from 'web3';
import { Exchange } from './components2/Convert';
import { Exchange2 } from './components2/Convert2';
import { GetFree } from './components2/GetFree';
import { Balance } from './components2/Balance';
import BigNumber from 'big-number';
import { React, useState } from 'react';
import './css/style.css';

const web3 = new Web3(Web3.givenProvider);
const contractAddr = '0xbA3A173d469A9612f7d8dd8d56800597c970d686';
const owner = '0x87BC5b7Ea1A2957ECcE8ae1858FC590744369902';

const buy = async () => {
  const accounts = await window.ethereum.enable();
  const account = accounts[0];
  const StableToken = new web3.eth.Contract(ContractABI, contractAddr, { from: account });
  const gas = await StableToken.methods.transfer(owner, BigNumber(0.005 * Math.pow(10, 18))).estimateGas();
  const result = await StableToken.methods.transfer(owner, BigNumber(0.005 * Math.pow(10, 18))).send({ gas });
  console.log(result);
  console.log(gas);
}
let kolicina = 0;
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
          <li className="right"><a href="/">About Us</a></li>
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