import styled from "styled-components";

const ToolStyles = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(12,1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 2rem;
  padding: 2rem;
`;

export default ToolStyles;