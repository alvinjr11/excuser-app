import { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const[excuse,setExcuse]=useState(" ")
  const fetchData=async(type)=>{
    const {data}=await axios.get(`https://excuser-three.vercel.app/v1/excuse/${type}`)
    setExcuse(data[0].excuse)
  }
  return (
    <div className='flex gap-6 bg-gray-400 text-white flex-col font-semibold justify-center items-center min-h-screen'>
      <h1 className='text-3xl'>Generate an excuse</h1>
      <div className='bg-blue-500 text-black rounded-md px-5 py-3'><button onClick={() => {fetchData("funny")}}>funny</button></div>
      <div className='bg-orange-500 text-black rounded-md px-5 py-3'><button onClick={()=>{fetchData("developers")}}>developer</button></div>
      <div className='bg-green-500 text-black rounded-md px-5 py-3'><button onClick={()=>{fetchData("office")}}>office</button></div>
      <h1 className='text-2xl'>{excuse}</h1>
    </div>
  );
}

export default App;
