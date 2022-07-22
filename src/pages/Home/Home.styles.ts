import { Link } from "@reach/router";
import styled from "styled-components";
import { LinkButtonProps } from "../../utils/types/types";

const Styled = {
  LinkButton: styled(Link)<LinkButtonProps>`
    background-color: ${(props) =>
      props.isEpisode
        ? props.theme.colors.turquoise
        : props.theme.colors.beige};
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
  `,

  Wrapper: styled.div`
    display: flex;
    justify-content: center;
  `,

  TextWrap: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `,

  Container: styled.div`
    padding: 1rem 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  `,

  Info: styled.p`
    text-align: center;
    font-weight: bold;
    background-color: ${(props) => props.theme.colors.red};
    border-radius: 0.5rem;
    padding: 0.5rem 1rem;
    margin-bottom: 2rem;
  `,

  Title: styled.p`
    font-family: MyFont;
    font-size: 3rem;
    font-weight: bold;
    color: ${(props) => props.theme.colors.turquoise};
    -webkit-text-stroke: 0.1px black;
    text-shadow: 0px 0px 15px yellow;
    margin-top: 6rem;
  `,

  SubTitle: styled.p`
    font-size: 1.5rem;
    margin-bottom: 3.5rem;
  `,

  Grid: styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    justify-items: center;
  `,
};

export default Styled;
