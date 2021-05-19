import React, { useState } from 'react';
import { ContractABI } from '../ContractABI';
import Web3 from 'web3';
import BigNumber from 'big-number';

const web3 = new Web3(Web3.givenProvider);
const contractAddr = '0xbA3A173d469A9612f7d8dd8d56800597c970d686';
const owner = '0x87BC5b7Ea1A2957ECcE8ae1858FC590744369902'

let kolicina = 0;
export const GetFree = () => {
    const [converted, setConverted] = useState('');
    return (
        <div className="get-free box">
            <h2>Transfer with others</h2>
            <form className="eth-stt">
                <p>
                    <label>STT</label>
                    <input id="eth" />
                </p>
                <p>
                    <label>ETH/STT</label>
                    <input id="stt" />
                </p>
                <p>
                    <button>Get Free</button>
                </p>
            </form>
        </div>
    )
}