import { Link } from "@reach/router";
import { Episode } from "../../pages/CharacterDetails/CharacterDetails";
import styled from "styled-components";

const StyledLink = styled(Link)`
  text-decoration: none;
`;

interface BarProps {
  isHeader?: boolean;
}

const Bar = styled.div<BarProps>`
  background-color: ${(props) =>
    props.isHeader
      ? props.theme.colors.darkBrown
      : props.theme.colors.lightBrown};
  color: ${(props) =>
    props.isHeader ? props.theme.colors.white : props.theme.colors.black};
  display: grid;
  grid-template-columns: 8rem 1.5fr 1fr;
  align-items: center;
  justify-content: space-between;
  margin: 0.5rem 1rem;
  padding: 0.5rem 1rem;
  width: 44rem;
  font-weight: bold;

  ${(props) =>
    !props.isHeader &&
    `
  :hover {
    box-shadow: 0 0 15px 5px yellow;
    opacity: 75%;
  }
  `}
`;

const BarWrap = styled.div`
  display: flex;
  justify-content: center;
`;

const EpisodeBar = ({ air_date, id, isHeader, name }: Episode) => {
  return (
    <BarWrap>
      {isHeader ? (
        <Bar isHeader>
          <p>{id}</p>
          <p>{name}</p>
          <p>{air_date}</p>
        </Bar>
      ) : (
        <StyledLink to={`/episodes/${id}`}>
          <Bar>
            <p>{id}</p>
            <p>{name}</p>
            <p>{air_date}</p>
          </Bar>
        </StyledLink>
      )}
    </BarWrap>
  );
};

export { EpisodeBar };
