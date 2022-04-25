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
      setgasPrice(fGasPrice);

    const feeData = await provider.getFeeData();
    const getFeeData = ethers.utils.formatUnits(feeData.maxFeePerGas, 'gwei');
     setFee(getFeeData);
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

    const gasPrice = await provider.getGasPrice();
    const fGasPrice = ethers.utils.formatUnits(gasPrice, 'gwei'); //36
      ethereumSetGasPrice(fGasPrice);

    const feeData = await provider.getFeeData();
    const getFeeData = ethers.utils.formatUnits(feeData.maxFeePerGas, 'gwei');
      setFeeEth(getFeeData);
  }

  useEffect(() => {
    const ethereumInterval = setInterval(ethereumComission, 5000)
    
    return () => {
    clearInterval(ethereumInterval)
    }
    }, [feeEth, ethereumGasPrice])


    const [feeBsc, setFeeBsc] = useState();
    const [bscGasPrice, bscSetGasPrice] = useState();
    async function binanceComission() {
      const provider = await ethers.getDefaultProvider(
        'https://rpc.ankr.com/bsc'
      );
  
      const gasPrice = await provider.getGasPrice();
      const fGasPrice = ethers.utils.formatUnits(gasPrice, 'gwei'); //36
      bscSetGasPrice(fGasPrice);
  
      const feeData = await provider.getFeeData();
      const getFeeData = ethers.utils.formatUnits(feeData.maxFeePerGas, 'gwei');
      setFeeBsc(getFeeData);
    }
  
    useEffect(() => {
      const binanceInterval = setInterval(binanceComission, 5000)
      
      return () => {
      clearInterval(binanceInterval)
      }
      }, [feeBsc, bscGasPrice])

  return (
    <div className='App'>
      <header className='App-header'>

      <div className='gorizont'>
        <h1>Polygon:</h1>
        <p>fee: {fee} </p>
        <p>GasPrice: {polygonGasPrice} </p>
        </div>

        <div className='gorizont'>
        <h1>Ethereum:</h1>
        <p>fee: {feeEth} </p>
        <p>GasPrice: {ethereumGasPrice} </p>
        </div>

        <div className='gorizont'>
        <h1>Binance:</h1>
        <p>fee: {feeBsc} </p>
        <p>GasPrice: {bscGasPrice} </p>
        </div>

        

        
        
      </header>
    </div>
  );
}

export default App;
