import styled from "styled-components";

const GraphicPanelStyles = styled.div`
  width: 100%;
  background-color: yellowgreen;
  border-radius: 8px;
  .graphic__color,
  .graphic__border,
  .graphic__shadow {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    span {
      display: inline-block;
      margin-bottom: 0.5rem;
      margin-right: 1rem;
    }

  }
  .fill__colors,
  .border__colors,
  .shadow__colors {
      display: grid;
      grid-template-columns: repeat(8, 1fr);
      row-gap: 1rem;
      margin-top: 0.5rem;
    }
  .color {
    width: 3rem;
    height: 3rem;
    border-radius: 4px;
    background-color: white;
  }

  input[type="range"] {
    width: 200px;
  }

`;

export default GraphicPanelStyles;