import './App.css';
import { useState, useEffect } from 'react';
import { ethers } from 'ethers';
function App() {
    const [fee, setFee] = useState();
  const [polygonGasPrice, setgasPrice] = useState();
  async function polygonComission() {
    const provider = await ethers.getDefaultProvider(
      'https://rpc.ankr.com/polygon'
    );
    const gasPrice = await provider.getGasPrice(); 
    const fGasPrice = ethers.utils.formatUnits(gasPrice, 'gwei'); //36
    function gasPriceData() {
      return setgasPrice(fGasPrice);
    }
    gasPriceData();

    const feeData = await provider.getFeeData();
    const getFeeData = ethers.utils.formatUnits(feeData.maxFeePerGas, 'gwei');
    function fFeeData() {
      return setFee(getFeeData);
    }
    fFeeData();
  }

  useEffect(() => {
    const polygonInterval = setInterval(polygonComission, 5000)
    
    return () => {
    clearInterval(polygonInterval)
    }
    }, [fee, polygonGasPrice])

  const [feeEth, setFeeEth] = useState();
  const [ethereumGasPrice, ethereumSetGasPrice] = useState();
  async function ethereumComission() {
    const provider = await ethers.getDefaultProvider(
      'https://rpc.ankr.com/eth'
    );
    // const lastPolygonBlock = await polygonProvider.getBlockNumber();
    // console.log('Polygon last block: ' + lastPolygonBlock);
    const gasPrice = await provider.getGasPrice();
    const fGasPrice = ethers.utils.formatUnits(gasPrice, 'gwei'); //36
    function gasPriceData() {
      return ethereumSetGasPrice(fGasPrice);
    }
    gasPriceData();

    const feeData = await provider.getFeeData();
    const getFeeData = ethers.utils.formatUnits(feeData.maxFeePerGas, 'gwei');
       setFeeEth(getFeeData);
      //  setInterval(polygonComission, 5000)
      //  setInterval(ethereumComission, 5000)
  }

  useEffect(() => {
    const polygonInterval = setInterval(ethereumComission, 5000)
    
    return () => {
    clearInterval(polygonInterval)
    }
    }, [feeEth, polygonGasPrice])

  return (
    <div className='App'>
      <header className='App-header'>



      <div className='around'>
      <div className='gorizont'>
        <p>fee: {fee} </p>
        <p>GasPrice: {polygonGasPrice} </p>
        </div>

        <div className='gorizont'>
        <p>fee: {feeEth} </p>
        <p>GasPrice: {ethereumGasPrice} </p>
        </div>
        </div>
        
      </header>
    </div>
  );
}

export default App;
