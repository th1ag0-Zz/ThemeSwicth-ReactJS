import styled from 'styled-components'

export const Container = styled.div`
  height: 60px;
  font-size: 20px;
  font-weight: 600;
  background: #7159c1;
  padding: 0 4%;

  color: ${(props) => props.theme.colors.text};
`

export const Content = styled.div`
  width: 100%;
  max-width: 1000px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
