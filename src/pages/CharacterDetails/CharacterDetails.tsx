import { useQuery } from "@apollo/client";
import { RouteComponentProps, useParams } from "@reach/router";
import styled from "styled-components";
import { GET_CHARACTER_DETAILS } from "../../services/queries";
import { CharacterCard } from "../../components/CharacterCard/CharacterCard";
import { EpisodeBar } from "../../components/EpisodeBar/EpisodeBar";
import { Episode } from "../../utils/types/types";

const CharacterDetails = (props: RouteComponentProps) => {
  const params = useParams();
  const id = params.characterId;
  const { data, error, loading } = useQuery(GET_CHARACTER_DETAILS, {
    variables: { id },
  });

  if (error) return <p>Error :(</p>;
  if (loading) return <p>Loading...</p>;

  return (
    <Container>
      <Title>Character Details</Title>
      <Wrapper>
        <CharacterCard
          id={id}
          image={data.character.image}
          name={data.character.name}
        />
        <UDetailsList>
          <li>Status: {data.character.status}</li>
          <li>Species: {data.character.species}</li>
          <li>
            Type: {data.character.type === "" ? "unknown" : data.character.type}
          </li>
          <li>Gender: {data.character.gender}</li>
        </UDetailsList>
      </Wrapper>

      <Text>Appears in:</Text>
      <UList>
        {data.character.episode.map(({ air_date, id, name }: Episode) => {
          return (
            <EpisodeBar key={id} air_date={air_date} id={id} name={name} />
          );
        })}
      </UList>
    </Container>
  );
};

const Wrapper = styled.div`
  display: flex;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
  justify-content: center;
`;

const UList = styled.ul`
  list-style: none;
  font-weight: bold;
  padding: 0;

  li {
    text-decoration: none;
  }
`;

const UDetailsList = styled(UList)`
  background-color: ${(props) => props.theme.colors.beige};
  border: 1px solid black;
  border-radius: 5px;
  width: 260px;
  height: 350px;
  padding: 1rem 0 0 2.5rem;
  margin: 0 0 0 1rem;
  line-height: 2rem;
`;

const Text = styled.p`
  font-size: 1.5rem;
  margin-top: 2.5rem;
`;

const Title = styled.p`
  font-size: 2rem;
  text-align: center;
`;

export { CharacterDetails };
