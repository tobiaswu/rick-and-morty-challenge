import styled from "styled-components";

const Wrapper = styled.div`
  background-color: ${(props) => props.theme.colors.darkBrown};
  padding: 1rem;
  margin-top: auto;
  text-align: center;
`;

const Footer = () => {
  return (
    <Wrapper>
      <p>©2022 by Tobias Wupperfeld</p>
    </Wrapper>
  );
};

export { Footer };
