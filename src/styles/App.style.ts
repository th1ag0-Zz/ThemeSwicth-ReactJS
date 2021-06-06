import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;

  margin: 0 auto;
  padding: 26px 4%;

  width: 100%;
  max-width: 1000px;

  @media (max-width: 600px) {
    padding: 10px 4%;
  }
`;

export const Author = styled.p`
  color: ${(props) => props.theme.colors.title};
  width: 100%;
  text-align: center;
  font-size: 16px;
  margin: 10px 0;

  > a {
    color: ${(props) => props.theme.colors.primary};
  }
`;
