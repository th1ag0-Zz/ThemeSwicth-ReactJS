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
