import { Link } from "@reach/router";
import styled from "styled-components";
import { BarProps, Episode } from "../../utils/types/types";

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

const StyledLink = styled(Link)`
  text-decoration: none;
`;

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

export { EpisodeBar };
