import styled from "styled-components";

const DraftStyles = styled.div`
  flex: 1;
  /* background-color: skyblue; */
  border-radius: 8px;
  .draft__wrapper {
    width: 100%;
    height: 100%;
    /* .canvas-container {
      width: 100% !important;
      height: 100% !important;
    } */
    canvas {
      /* width: 100% !important;
      height: 100% !important; */
      border: 1px solid skyblue;
    }
  }
`;

export default DraftStyles;