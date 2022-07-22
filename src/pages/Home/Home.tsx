import { useQuery } from "@apollo/client";
import { Link, RouteComponentProps } from "@reach/router";
import { useContext } from "react";
import styled from "styled-components";
import { CharacterCard } from "../../components/CharacterCard/CharacterCard";
import { GET_CHARACTERS_BY_IDS } from "../../services/queries";
import { FavoriteContext } from "../../utils/context/favoriteContext";

type LinkButtonProps = {
  isEpisode?: boolean;
};

const LinkButton = styled(Link)<LinkButtonProps>`
  background-color: ${(props) =>
    props.isEpisode ? props.theme.colors.turquoise : props.theme.colors.beige};
  border-radius: 0.5rem;
  font-size: 1.5rem;
  text-decoration: none;
  color: black;
  padding: 2rem 2rem;
  margin: 1rem 1rem;
  border: 3px solid black;

  :hover {
    box-shadow: 0 0 15px 5px yellow;
    opacity: 75%;
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Container = styled.div`
  padding: 1rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Info = styled.p`
  text-align: center;
  font-weight: bold;
  background-color: ${(props) => props.theme.colors.red};
  border-radius: 0.5rem;
  padding: 0.5rem 1rem;
  margin-bottom: 2rem;
`;

const Title = styled.p`
  font-family: MyFont;
  font-size: 3rem;
  font-weight: bold;
  color: ${(props) => props.theme.colors.turquoise};
  -webkit-text-stroke: 0.1px black;
  text-shadow: 0px 0px 15px yellow;
  margin-top: 6rem;
`;

const SubTitle = styled.p`
  font-size: 1.5rem;
  margin-bottom: 3.5rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  justify-items: center;
`;

const Home = (props: RouteComponentProps) => {
  const { favorites } = useContext(FavoriteContext);
  const { data, error, loading } = useQuery(GET_CHARACTERS_BY_IDS, {
    variables: { ids: favorites },
  });

  if (error) return <p>Error :(</p>;
  if (loading) return <p>Loading...</p>;

  return (
    <Container>
      {favorites.length > 1 ? (
        <Grid>
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
        </Grid>
      ) : (
        <>
          <TextWrap>
            <Title>Welcome to the Rick and Morty Fan App</Title>
            <SubTitle>Mark your favorite characters to see them here!</SubTitle>
            <Info>Start below ⬇</Info>
          </TextWrap>
          <Wrapper>
            <LinkButton to="characters">All Characters</LinkButton>
            <LinkButton isEpisode to="episodes">
              All Episodes
            </LinkButton>
          </Wrapper>
        </>
      )}
    </Container>
  );
};

export { Home };
