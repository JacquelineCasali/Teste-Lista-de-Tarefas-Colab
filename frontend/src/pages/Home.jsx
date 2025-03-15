import Nota from "../components/Nota/Nota.jsx";

import Title from "../components/Title/Tlite.jsx";

import { useContext } from "react";
import { FavoritosContext } from "../context/FavoritosContext.jsx";

import { ColorContext } from "../context/ColorContext.jsx";
import Card from "../components/Card/Card.jsx";

export default function Home() {
  const { favoriteItems, regularItems, toggleFavorite } =
    useContext(FavoritosContext);
  const { colors } = useContext(ColorContext);

  return (
    <>
      <Nota />
      <Title>Favoritos</Title>
      {/* Seção de favoritos */}
      {favoriteItems.length > 0 && (
        <div className="lista-favorito">
          {favoriteItems.map((item) => (
            <div
              className="favorito-tarefa"
              style={{ backgroundColor: colors[item.id] || "#3498db" }}
              key={item.id}
            >
              <Card
                item={item}
                isFavorite={true}
                toggleFavorite={toggleFavorite}
              />
            </div>
          ))}
        </div>
      )}

      {/* Seção de itens normais */}
      <Title>Outros</Title>
      <div className="lista-favorito">
        {regularItems.map((item) => (
          <div
            className="favorito-tarefa"
            style={{ backgroundColor: colors[item.id] || "#3498db" }}
            key={item.id}
          >
            <Card
              item={item}
              isFavorite={false}
              toggleFavorite={toggleFavorite}
            />
          </div>
        ))}
      </div>
    </>
  );
}
