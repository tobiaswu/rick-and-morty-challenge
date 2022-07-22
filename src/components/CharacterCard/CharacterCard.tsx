import { Link } from "@reach/router";
import { useContext } from "react";
import styled from "styled-components";
import { FavoriteContext } from "../../utils/context/favoriteContext";
import { Icon } from "@iconify/react";

export type CharacterCardProps = {
  id: number;
  image: string;
  name: string;
};

const Card = styled.div`
  background-color: ${(props) => props.theme.colors.lightBrown};
  border: 1px solid black;
  border-radius: 5px;
  width: 300px;
  padding-bottom: 0;
  margin-bottom: 0;
  text-decoration: none;

  :hover {
    box-shadow: 0 0 15px 5px yellow;
    opacity: 75%;
  }
`;

const Name = styled.p`
  font-weight: bold;
  font-size: 1.25rem;
  color: black;
`;

interface IconButtonProps {
  isFavorite: boolean;
}

const IconButton = styled(Icon)<IconButtonProps>`
  color: ${(props) =>
    props.isFavorite ? props.theme.colors.red : props.theme.colors.white};
  font-size: 2rem;
  position: relative;
  right: 0;
  z-index: 999;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 0.5rem;
`;

const Image = styled.img`
  margin-bottom: -4px;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
`;

const CharacterCard = ({ id, image, name }: CharacterCardProps) => {
  const { favorites, toggleFavorite } = useContext(FavoriteContext);

  return (
    <Card>
      <Wrapper>
        <Name>{name}</Name>
        <IconButton
          isFavorite={favorites.includes(id)}
          icon="codicon:heart-filled"
          onClick={() => toggleFavorite && toggleFavorite(id)}
        />
      </Wrapper>
      <Link to={`/characters/${id}`}>
        <Image src={image} alt="" />
      </Link>
    </Card>
  );
};

export { CharacterCard };
