import React, { useState } from 'react';
import { ContractABI } from '../ContractABI';
import Web3 from 'web3';
import BigNumber from 'big-number';

const web3 = new Web3(Web3.givenProvider);
const contractAddr = '0xbA3A173d469A9612f7d8dd8d56800597c970d686';
const owner = '0x87BC5b7Ea1A2957ECcE8ae1858FC590744369902'
const transfer = async (e) => {
    e.preventDefault();
    console.log(kolicina);
    const accounts = await window.ethereum.enable();
    const account = accounts[0];
    const StableToken = new web3.eth.Contract(ContractABI, contractAddr, { from: account });
    const gas = await StableToken.methods.burn(account, BigNumber(kolicina * Math.pow(10, 18))).estimateGas();
    const result = await StableToken.methods.burn(account, BigNumber(kolicina * Math.pow(10, 18))).send({ gas });
    console.log(result);
    console.log(gas);
}
let kolicina = 0;
export const Exchange2 = () => {
    const set = (e) => {
        if (e.target.value != 0) {
            setConverted(parseFloat(e.target.value));
            kolicina = parseFloat(e.target.value);
        } else {
            setConverted('');
            kolicina = parseFloat(0);
        }
    }
    const [converted, setConverted] = useState('');
    return (
        <div className="exchange2 box">
            <h2>STT to ETH</h2>
            <form className="eth-stt">
                <p>
                    <label >STT</label>
                    <input type="number" id="eth" onChange={(e) => { set(e) }} />
                </p>
                <p>
                    <label >ETH</label>
                    <input id="stt" readOnly value={converted} />
                </p>
                <p>
                    <button onClick={(e) => { transfer(e) }}>Exchange to ETH</button>
                </p>
            </form>
        </div>
    )
}