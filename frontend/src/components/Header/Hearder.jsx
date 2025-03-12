import React  from 'react'
import { Link } from 'react-router-dom'
import "./Hearder.css"
import Simbolo from "../../assets/imageHeader.png"
import Nome from "../../assets/Group 2430.png"
import { IoClose } from "react-icons/io5";
import Search from '../Search/Search'

export default function Hearder() {
// menu

    return (
    <header>
      <div className='container'>
      <img src={Simbolo} alt='logo'/>
      <img src={Nome} alt='nome'/>
     
      </div>
 <div className='buscar'>

 <Search/>
      <Link to={'/'} >   
<IoClose
className='Ioclose'
/>

</Link>
 

</div>
   
     



     
    </header>
  )
}
