import styled from "styled-components";

const ToolsItemStyles = styled.div`
  width: 3rem;
  text-align: center;
  span:hover {
    cursor: pointer;
  }
  &:hover {
    background-color: gray;
    border-style: inset;
  }
`;

export default ToolsItemStyles;