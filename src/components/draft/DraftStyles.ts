import styled from "styled-components";

const DraftStyles = styled.div`
  flex: 1;
  border-radius: 8px;
  .draft__wrapper {
    width: 100%;
    height: 100%;

    canvas {
      border: 1px solid skyblue;
      border-radius: 8px;
    }
  }
`;

export default DraftStyles;