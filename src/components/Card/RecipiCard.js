import React from 'react'
import './RecipiCard.css'
import { useNavigate } from "react-router-dom";
const RecipiCard = (props) => {
  const navgate = useNavigate()
  // console.log(data)
  // const { title, author,    ingredients,  directions, image } = data;
  // console.log(title, author,    ingredients,  directions, image )
  // const{title,date } = props.data   
  // console.log(props.data.image.data.data)
  // console.log(props.data._id) 
  const base64Str = btoa(
      String.fromCharCode(...new Uint8Array((props.data.image?.data.data)))
  )


  function openRecipi(id){
    localStorage.setItem('recipiID', id) 
    // console.log(id)
    // console.log("workinggggg")
    navgate('/recipi')
  }
  return (
    <div className='RecipiCardcontainetr' onClick={()=>openRecipi(props.data._id)}>
      <h4 className='reacipiHeading'>{props.data.title}</h4>
      <div className="cardimagecontainer">
        <img src={`data:image/png;base64,${base64Str}`} alt="" />
      </div>
    </div>
  )
}

export default RecipiCard
