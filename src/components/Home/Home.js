import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Header from '../Card/Header'
import RecipiCard from '../Card/RecipiCard'
import "./Home.css"
import { useNavigate } from "react-router-dom";
const Home = () => {
  const [data , setData]=useState([])
  const navgate = useNavigate()

 

  useEffect(()=>{
    if(!localStorage.getItem('logToken')){
        navgate('/')
    }
},[])


useEffect(()=>{
  async function datafunction () {
      // setLoader(true)
      try {
          const config = {
              headers: {
                  authorization : localStorage.getItem('logToken')                      
              }
          }
          const res = await axios.get ('https://prt-25feb-nodejs.onrender.com/reci',config)
              setData(res.data.recipi) 
              console.log(res.data.recipi)       
      } catch (error) {
          console.log(error)
      }
      // setLoader(false)
  }
  datafunction()
},[])

  return (
    <div>
      <Header/>
      <div className='searchContainer'>
        <div>
        <input type="text" placeholder='search here...' />
        <button>search</button>
        </div>
      </div>
        <div className='addRecipiContainer'><button onClick={()=>  navgate('../create')}>add recipi</button></div>
        <h1>Allrecipites</h1>
      <div className='allrecipies'>
        {
          data.map((item,i)=>{
            return (
              <div key={i*0.0022}>
                <RecipiCard data={item} />
              </div>
              
            )
          })
        }
      </div>
    </div>
  )
}

export default Home
