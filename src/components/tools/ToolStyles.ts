import styled from "styled-components";

const ToolStyles = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(12,1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 2rem;
  padding: 2rem;
  /* justify-items: center; */
  /* align-items: center; */
  .rect {
    /* width: 100px;
    height: 100px; */
    /* text-align: center; */
    border-radius: 5px;
    background-color: orange;
  }
`;

export default ToolStyles;