import styled from 'styled-components';

const AppBar = styled.div`
  padding: 8px;
  background-color: ${props => props.theme.main.default};
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default AppBar;
