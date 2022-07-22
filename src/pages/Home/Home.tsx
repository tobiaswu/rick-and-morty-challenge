import { useQuery } from "@apollo/client";
import { RouteComponentProps } from "@reach/router";
import { useContext } from "react";
import { CharacterCard } from "../../components/CharacterCard/CharacterCard";
import { GET_CHARACTERS_BY_IDS } from "../../services/queries";
import { FavoriteContext } from "../../utils/context/favoriteContext";
import Styled from "./Home.styles";

const Home = (props: RouteComponentProps) => {
  const { favorites } = useContext(FavoriteContext);
  const { data, error, loading } = useQuery(GET_CHARACTERS_BY_IDS, {
    variables: { ids: favorites },
  });

  if (error) return <p>Error :(</p>;
  if (loading) return <p>Loading...</p>;

  return (
    <Styled.Container>
      {favorites.length > 1 ? (
        <Styled.Grid>
          {data.charactersByIds.map((character: any) => {
            return (
              <CharacterCard
                key={character.id}
                id={character.id}
                image={character.image}
                name={character.name}
              />
            );
          })}
        </Styled.Grid>
      ) : (
        <>
          <Styled.TextWrap>
            <Styled.Title>Welcome to the Rick and Morty Fan App</Styled.Title>
            <Styled.SubTitle>
              Mark your favorite characters to see them here!
            </Styled.SubTitle>
            <Styled.Info>Start below ⬇</Styled.Info>
          </Styled.TextWrap>
          <Styled.Wrapper>
            <Styled.LinkButton to="characters">
              All Characters
            </Styled.LinkButton>
            <Styled.LinkButton isEpisode to="episodes">
              All Episodes
            </Styled.LinkButton>
          </Styled.Wrapper>
        </>
      )}
    </Styled.Container>
  );
};

export { Home };
