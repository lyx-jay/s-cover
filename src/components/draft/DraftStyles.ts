import styled from "styled-components";

const DraftStyles = styled.div`
  flex: 2;
  height: 100%;
  border: 1px solid pink;
  .draft__wrapper {
    width: 100%;
    height: 100%;
    canvas {
      width: inherit;
      height: inherit;
    }
  }
`;

export default DraftStyles;