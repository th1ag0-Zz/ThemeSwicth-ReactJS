import styled from "styled-components";

interface Props {
  width: string;
}

export const Container = styled.div<Props>`
  width: ${(props) => props.width}%;
  height: 200px;
  background-color: ${(props) => props.theme.colors.contrast};
  border-radius: 12px;

  margin: 12px 0;
  cursor: pointer;

  transition: background-color 0.2s;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding-left: 20px;

  @media (max-width: 600px) {
    height: 120px;
    margin: 10px 0;
  }
`;

export const Bar = styled.div<Props>`
  height: 26px;
  width: ${(props) => props.width}%;
  background-color: rgba(0, 0, 0, 0.3);
  border-radius: 6px;

  @media (max-width: 600px) {
    height: 20px;
  }
`;
