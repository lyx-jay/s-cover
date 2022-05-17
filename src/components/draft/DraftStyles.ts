import styled from "styled-components";

const DraftStyles = styled.div`
  flex: 1;
  background-color: skyblue;
  border-radius: 8px;
  .draft__wrapper {
    width: 100%;
    height: 100%;
    canvas {
      border: 1px solid transparent;
    }
  }
`;

export default DraftStyles;