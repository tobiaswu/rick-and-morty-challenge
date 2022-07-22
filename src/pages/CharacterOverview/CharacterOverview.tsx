import { useQuery } from "@apollo/client";
import { RouteComponentProps } from "@reach/router";
import styled from "styled-components";
import {
  CharacterCard,
  CharacterCardProps,
} from "../../components/CharacterCard/CharacterCard";
import { GET_CHARACTERS } from "../../services/queries";
import { PageHandler } from "../../components/PageHandler/PageHandler";

const CharacterOverview = (props: RouteComponentProps) => {
  const { data, error, loading, refetch } = useQuery(GET_CHARACTERS, {
    variables: { page: 1 },
  });

  if (error) return <p>Error :(</p>;
  if (loading) return <p>Loading...</p>;

  return (
    <Container>
      <Title>All Characters ({data.characters.info.count})</Title>
      <Grid>
        {data.characters.results.map(
          ({ id, image, name }: CharacterCardProps) => {
            return <CharacterCard key={id} id={id} name={name} image={image} />;
          }
        )}
      </Grid>
      <PageHandler data={data.characters} refetch={refetch} />
    </Container>
  );
};

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  justify-items: center;
`;

const Title = styled.p`
  font-size: 2rem;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export { CharacterOverview };
