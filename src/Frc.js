// // eslint-disable-next-line no-unused-vars
// import {hre} from "hardhat";
// import { ethers } from 'ethers';
// import React from 'react'

// export default async function Frc() {

//     const polygonProvider = await ethers.getDefaultProvider("https://polygon-rpc.com")
//     const lastPolygonBlock = await polygonProvider.getBlockNumber()
//     console.log("Polygon last block: " + lastPolygonBlock)
//     let polygonGasPrice = await polygonProvider.getGasPrice()
//     console.log(ethers.utils.formatUnits(polygonGasPrice, "gwei")); //36
//     const feexData = await polygonProvider.getFeeData()
//     console.log(ethers.utils.formatUnits(feexData.maxFeePerGas, "gwei")) //71

//   return (
//     <div>frc</div>
//   )
// }
