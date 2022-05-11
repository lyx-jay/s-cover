import styled from "styled-components";

const ToolsItemStyles = styled.div`
    position: relative;
    height: 100%;
    text-align: center;
    border-radius: 5px;
    background-color: orange;
  span {
    position: absolute;
    font-size: 4rem;
    top: 50%;
    margin-top: -2rem;
    left: 50%;
    margin-left: -2rem;
  }
  span:hover {
    cursor: pointer;
  }
`;

export default ToolsItemStyles;