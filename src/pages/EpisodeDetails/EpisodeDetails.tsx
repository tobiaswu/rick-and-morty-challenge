import { useQuery } from "@apollo/client";
import { RouteComponentProps, useParams } from "@reach/router";
import styled from "styled-components";
import {
  CharacterCard,
  CharacterCardProps,
} from "../../components/CharacterCard/CharacterCard";
import { EpisodeBar } from "../../components/EpisodeBar/EpisodeBar";
import { GET_EPISODE_DETAILS } from "../../services/queries";

const EpisodeDetails = (props: RouteComponentProps) => {
  const params = useParams();
  const id = params.episodeId;
  const { data, error, loading } = useQuery(GET_EPISODE_DETAILS, {
    variables: { id },
  });

  if (error) return <p>Error :(</p>;
  if (loading) return <p>Loading...</p>;

  return (
    <Container>
      <Title>Episode Details</Title>
      <EpisodeBar
        air_date={data.episode.air_date}
        id={data.episode.episode}
        isHeader={true}
        name={data.episode.name}
      />
      <Text>Starring:</Text>
      <Grid>
        {data.episode.characters.map(
          ({ id, image, name }: CharacterCardProps) => {
            return <CharacterCard key={id} id={id} image={image} name={name} />;
          }
        )}
      </Grid>
    </Container>
  );
};

const Text = styled.p`
  font-size: 1.5rem;
  margin-bottom: 2rem;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 2rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  justify-items: center;
`;

const Title = styled.p`
  font-size: 2rem;
`;

export { EpisodeDetails };
