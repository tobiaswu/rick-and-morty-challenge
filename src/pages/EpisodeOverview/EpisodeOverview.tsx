import { useQuery } from "@apollo/client";
import { RouteComponentProps } from "@reach/router";
import styled from "styled-components";
import { EpisodeBar } from "../../components/EpisodeBar/EpisodeBar";
import { PageHandler } from "../../components/PageHandler/PageHandler";
import { GET_EPISODES } from "../../services/queries";
import { Episode } from "../CharacterDetails/CharacterDetails";

const EpisodeOverview = (props: RouteComponentProps) => {
  const { data, error, loading, refetch } = useQuery(GET_EPISODES, {
    variables: { page: 1 },
  });

  if (error) return <p>Error :(</p>;
  if (loading) return <p>Loading...</p>;

  const Container = styled.div`
    padding: 0 2rem;
  `;

  const Title = styled.p`
    font-size: 2rem;
    text-align: center;
  `;

  return (
    <Container>
      <Title>All Episodes ({data.episodes.info.count})</Title>
      <EpisodeBar
        air_date="Released"
        id="Episode No."
        isHeader={true}
        name="Name"
      />
      {data.episodes.results.map(({ air_date, id, name }: Episode) => {
        return <EpisodeBar key={id} air_date={air_date} id={id} name={name} />;
      })}

      <PageHandler data={data.episodes} refetch={refetch} />
    </Container>
  );
};

export { EpisodeOverview };
