import styled from "styled-components";

export const Container = styled.div`
  height: 60px;
  font-size: 20px;
  font-weight: 600;
  background: #7159c1;
  padding: 0 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${(props) => props.theme.colors.text};
`;
