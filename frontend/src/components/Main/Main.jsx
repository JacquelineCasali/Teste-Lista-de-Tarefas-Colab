import React, { useContext} from 'react'

import Card from '../Card/Card';
import { CardContext } from '../../context/CardContext';
import Title from '../Title/Tlite';
import Loading from '../Loading/Loading';

export default function Main({dados}) {
//  const {dados}=useContext(CardContext)
    return (
    
    <>
 
          {!dados.length ? (
        <Loading />
      ) : ( 
        <>
    {/* <div style={{display:"flex"}}>
    <Title>Outras</Title>
    </div>
       */}
     
  
        {dados.map((note) => (
       
            <Card
            key={note.id}
              id={note.id}
             titulo={note.titulo}
                descricao={note.descricao}
                fav={note.fav}
              
            />
         
        ))}

      </>
      )}
    </>
  )
}
