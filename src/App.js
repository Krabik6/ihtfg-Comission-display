import './App.css';
import { useState, useEffect } from 'react';
import { ethers } from 'ethers';
function App() {
  const [polygonGasPrice, setgasPrice] = useState();
  async function polygonComission() {
    const provider = await ethers.getDefaultProvider(
      'https://rpc.ankr.com/polygon'
    );
    const gasPrice = await provider.getGasPrice(); 
    const fGasPrice = ethers.utils.formatUnits(gasPrice, 'gwei'); //36
      setgasPrice(fGasPrice);

  }
  useEffect(() => {
    const polygonInterval = setInterval(polygonComission, 5000)
    
    return () => {
    clearInterval(polygonInterval)
    }
    }, [polygonGasPrice])


 
  const [ethereumGasPrice, ethereumSetGasPrice] = useState();
  async function ethereumComission() {
    const provider = await ethers.getDefaultProvider(
      'https://rpc.ankr.com/eth'
    );

    const gasPrice = await provider.getGasPrice();
    const fGasPrice = ethers.utils.formatUnits(gasPrice, 'gwei'); //36
      ethereumSetGasPrice(fGasPrice);

    
  }

  useEffect(() => {
    const ethereumInterval = setInterval(ethereumComission, 5000)
    
    return () => {
    clearInterval(ethereumInterval)
    }
    }, [ethereumGasPrice])


    // const [feeBsc, setFeeBsc] = useState();
    const [bscGasPrice, bscSetGasPrice] = useState();
    async function binanceComission() {
      const provider = await ethers.getDefaultProvider(
        'https://rpc.ankr.com/bsc'
      );
  
      const gasPrice = await provider.getGasPrice();
      const fGasPrice = ethers.utils.formatUnits(gasPrice, 'gwei'); //36
      bscSetGasPrice(fGasPrice);
  
      
    }
  
    useEffect(() => {
      const binanceInterval = setInterval(binanceComission, 5000)
      
      return () => {
      clearInterval(binanceInterval)
      }
      }, [bscGasPrice])
      // feeBsc,
  return (
    <div className='App'>
      <header className='App-header'>

      <div className='gorizont'>
        <h1>Polygon:</h1>
        
        <p>GasPrice: {polygonGasPrice} </p>
        </div>

        <div className='gorizont'>
        <h1>Ethereum:</h1>
        
        <p>GasPrice: {ethereumGasPrice} </p>
        </div>

        <div className='gorizont'>
        <h1>Binance:</h1>
        
        <p>GasPrice: {bscGasPrice} </p>
        </div>

        
      </header>
    </div>
  );
}

export default App;
