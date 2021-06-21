import React, { useState } from 'react';
import { ContractABI } from '../ContractABI';
import Web3 from 'web3';
import BigNumber from 'big-number';

const web3 = new Web3(Web3.givenProvider);
const contractAddr = '0xbA3A173d469A9612f7d8dd8d56800597c970d686';
const owner = '0x87BC5b7Ea1A2957ECcE8ae1858FC590744369902'

const buy = async (e) => {
    e.preventDefault();
    let bank = '0x6360bb7532F17D68dae9E68c347cf4B5549c75c6';
    const accounts = await window.ethereum.enable();
    const account = accounts[0];
    web3.eth.getAccounts(function (error, result) {
        web3.eth.sendTransaction(
            {
                from: account,
                to: bank,
                value: BigNumber(kolicina * Math.pow(10, 18)).toString(),
            }, function (err, transactionHash) {
                if (!err)
                    console.log(transactionHash + " success");
            });
    });
}
let kolicina = 0;
export const Exchange = () => {
    const [converted, setConverted] = useState('');
    return (
        <div className="exchange box">
            <h2>Buy STT</h2>
            <form className="eth-stt">
                <p>
                    <label>ETH</label>
                    <input id="eth" onChange={(e) => { setConverted(e.target.value - (parseFloat(e.target.value) * 1 / 100)); kolicina = parseFloat(e.target.value); }} />
                </p>
                <p>
                    <label>STT</label>
                    <input id="stt" readOnly value={converted} />
                </p>
                <p>
                    <button onClick={(e) => { buy(e) }}>Buy Stable Token</button>
                </p>
            </form>
        </div>
    )
}