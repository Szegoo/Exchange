import React from 'react';

export const GetFree = () => {
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