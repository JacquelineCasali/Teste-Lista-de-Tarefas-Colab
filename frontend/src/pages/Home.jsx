


import Nota from "../components/Nota/Nota.jsx"

import Main from "../components/Main/Main.jsx"
import Title from "../components/Title/Tlite.jsx"
import { CardContext } from "../context/CardContext.jsx"
import { useContext } from "react"



export default function HomeTeste() {
  const {dados}=useContext(CardContext)
  return (
    
< >

<Nota/>
<Title>Outras</Title>
<section className="lista-favorito">


<Main dados={dados}/>


</section>






</>
  )
 
  
}
