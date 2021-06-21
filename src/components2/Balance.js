import { ContractABI } from '../ContractABI';
import Web3 from 'web3';
import { useAsync } from "react-async";

const getBalance = async () => {
    const web3 = new Web3(Web3.givenProvider);
    const contractAddr = '0xbA3A173d469A9612f7d8dd8d56800597c970d686';
    const accounts = await window.ethereum.enable();
    const account = accounts[0];
    const StableToken = new web3.eth.Contract(ContractABI, contractAddr, { from: account });
    const result = StableToken.methods.balanceOf(account).call((data) => { console.log(data) });
    console.log(result);
    return result;
}
export const Balance = () => {
    let { data, error, isPending } = useAsync({ promiseFn: getBalance });
    console.log(data);
    if (isPending) return <p className="balance">loading...</p>;
    if (error) return <p className="balance">error!</p>;
    if (data) {
        data = data * Math.pow(10, -18);
        data = data.toFixed(4);
        return (
            <p className="balance">{data + "STT"}</p>
        );
    }
    return null;
}