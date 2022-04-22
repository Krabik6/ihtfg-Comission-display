import './App.css';
import { useState } from 'react';
import { ethers } from 'ethers';
// eslint-disable-next-line no-unused-vars
// import {hre} from "hardhat";

function App() {
  const [fee, setFee] = useState();
  const [polygonGasPrice, setgasPrice] = useState();
  async function GetFee() {
    const polygonProvider = await ethers.getDefaultProvider(
      'https://rpc.ankr.com/polygon	'
    );
    // const lastPolygonBlock = await polygonProvider.getBlockNumber();
    // console.log('Polygon last block: ' + lastPolygonBlock);
    const polygonGasPrice = await polygonProvider.getGasPrice();
    const getgasPrice = ethers.utils.formatUnits(polygonGasPrice, 'gwei'); //36
    function gasPriceData() {
      return setgasPrice(getgasPrice);
    }
    gasPriceData();

    const feexData = await polygonProvider.getFeeData();
    const getFeeData = ethers.utils.formatUnits(feexData.maxFeePerGas, 'gwei');
    function feeData() {
      return setFee(getFeeData);
    }
    feeData();
  }

  const [feeEth, setFeeEth] = useState();
  const [ethereumGasOrice, ethereumSetGasPrice] = useState();
  async function getEthFee() {
    const polygonProvider = await ethers.getDefaultProvider(
      'https://rpc.ankr.com/eth'
    );
    // const lastPolygonBlock = await polygonProvider.getBlockNumber();
    // console.log('Polygon last block: ' + lastPolygonBlock);
    const polygonGasPrice = await polygonProvider.getGasPrice();
    const getgasPrice = ethers.utils.formatUnits(polygonGasPrice, 'gwei'); //36
    function gasPriceData() {
      return ethereumSetGasPrice(getgasPrice);
    }
    gasPriceData();

    const feexData = await polygonProvider.getFeeData();
    const getFeeData = ethers.utils.formatUnits(feexData.maxFeePerGas, 'gwei');
    function feeData() {
      return setFeeEth(getFeeData);
    }
    feeData();
  }

  return (
    <div className='App'>
      <header className='App-header'>

      <div className='around'>
      <div className='gorizont'>
        <button onClick={GetFee}>Get Fee</button>
        
        <p>fee: {fee} </p>
        <p>GasPrice: {polygonGasPrice} </p>
        </div>

        <div className='gorizont'>
        <button onClick={getEthFee}>Get Ethereum Fee</button>
        
        <p>fee: {feeEth} </p>
        <p>GasPrice: {ethereumGasOrice} </p>
        </div>
        </div>
      </header>
    </div>
  );
}

export default App;
