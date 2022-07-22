import styled from "styled-components";
import { IconButtonProps } from "../../utils/types/types";
import { Icon } from "@iconify/react";

const Styled = {
  Card: styled.div`
    background-color: ${(props) => props.theme.colors.lightBrown};
    border: 1px solid black;
    border-radius: 5px;
    width: 300px;
    padding-bottom: 0;
    margin-bottom: 0;
    text-decoration: none;

    :hover {
      box-shadow: 0 0 15px 5px yellow;
      opacity: 75%;
    }
  `,

  Name: styled.p`
    font-weight: bold;
    font-size: 1.25rem;
    color: black;
  `,

  IconButton: styled(Icon)<IconButtonProps>`
    color: ${(props) =>
      props.isFavorite ? props.theme.colors.red : props.theme.colors.white};
    font-size: 2rem;
    position: relative;
    right: 0;
  `,

  Wrapper: styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 0.5rem;
  `,

  Image: styled.img`
    margin-bottom: -4px;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
  `,
};

export default Styled;
