import { Link } from "@reach/router";
import { useContext } from "react";
import { FavoriteContext } from "../../utils/context/favoriteContext";
import Styled from "./CharacterCard.styles";

export interface CharacterCardProps {
  id: number;
  image: string;
  name: string;
}

const CharacterCard = ({ id, image, name }: CharacterCardProps) => {
  const { favorites, toggleFavorite } = useContext(FavoriteContext);

  return (
    <Styled.Card>
      <Styled.Wrapper>
        <Styled.Name>{name}</Styled.Name>
        <Styled.IconButton
          isFavorite={favorites.includes(id)}
          icon="codicon:heart-filled"
          onClick={() => toggleFavorite && toggleFavorite(id)}
        />
      </Styled.Wrapper>
      <Link to={`/characters/${id}`}>
        <Styled.Image src={image} alt="" />
      </Link>
    </Styled.Card>
  );
};

export { CharacterCard };
