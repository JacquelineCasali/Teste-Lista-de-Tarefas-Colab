import { createContext, useContext, useState } from "react"

export const FavoritosContext=createContext()
FavoritosContext.displayName="Meus Favoritos";
export default function FavoritosProvider({children}) {
const [favorito,setFavorito]=useState([])
return(
    <FavoritosContext.Provider
    value={{favorito,setFavorito}}>
  {children}
    </FavoritosContext.Provider>
)
 
}

export function useFavoriteContext(){
    const {favorito,setFavorito}=useContext(FavoritosContext)

   // adicionar as listas de favoritos
function addFavoritos(novoFavorito){
    /* verificar se tem item favorito repetido */
    const favoritoRepetido = favorito.some(item=>item.id===novoFavorito.id)
    //nova lista recebe lista anterior
    let novaLista=[...favorito]
    // verificar se nao tem repetido e adicionar item na lista de favoritos
    if(!favoritoRepetido){
      novaLista.push(novoFavorito)
      return setFavorito(novaLista)
    }
    // se for repetido ele vai ser tirado da lista
    //filter filtrar 
    novaLista=favorito.filter((fav)=>fav.id!==novoFavorito.id)
    /* nova lista atualizada */
    return setFavorito(novaLista)
    }
    return{
      favorito,addFavoritos
    }
    
    
}