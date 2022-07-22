import { Link } from "@reach/router";
import styled from "styled-components";
import Logo from "../../assets/images/rick-and-morty-logo.png";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0.5rem;
`;

const StyledLink = styled(Link)`
  margin-right: 4rem;
  text-decoration: none;
  color: ${(props) => props.theme.colors.black};
  font-size: 1.25rem;

  :hover {
    text-shadow: 0 0 15px yellow;
    opacity: 75%;
  }
`;

const Container = styled.div``;

const NavigationBar = () => {
  return (
    <Container>
      <Wrapper>
        <Link to="/">
          <img src={Logo} alt="" />
        </Link>
        <div>
          <StyledLink to="/">My Favorites</StyledLink>
          <StyledLink to="characters">All Characters</StyledLink>
          <StyledLink to="episodes">All Episodes</StyledLink>
        </div>
      </Wrapper>
      <hr />
    </Container>
  );
};

export { NavigationBar };
