import { ApolloQueryResult } from "@apollo/client";
import styled from "styled-components";
import { Icon } from "@iconify/react";

const ButtonWrap = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0;
`;

const Button = styled.button`
  font-weight: bold;
  width: 8rem;
  margin: 0 1rem;
  background-color: ${(props) => props.theme.colors.turquoise};
  cursor: pointer;
  border-radius: 0.5rem;

  :hover {
    box-shadow: 0 0 15px 5px yellow;
    opacity: 75%;
  }
`;

const Text = styled.p`
  font-weight: bold;
`;

interface PageHandlerProps {
  data: any;
  refetch: (
    variables?:
      | Partial<{
          page: number;
        }>
      | undefined
  ) => Promise<ApolloQueryResult<any>>;
}

const PageHandler = ({ data, refetch }: PageHandlerProps) => {
  const handleBackClick = () => {
    refetch({ page: data.info.prev });
  };

  const handleForwardClick = () => {
    refetch({ page: data.info.next });
  };

  return (
    <ButtonWrap>
      <Button disabled={data.info.prev === null} onClick={handleBackClick}>
        <Icon icon="codicon:arrow-left" />
        Back
      </Button>
      <Text>
        Page {data.info.prev + 1}/{data.info.pages}
      </Text>
      <Button disabled={data.info.next === null} onClick={handleForwardClick}>
        Forward
        <Icon icon="codicon:arrow-right" />
      </Button>
    </ButtonWrap>
  );
};

export { PageHandler };
