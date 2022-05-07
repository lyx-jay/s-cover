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
  align-items: center;
  .rect {
    position: relative;
    height: 100%;
    /* line-height: 100%; */
    text-align: center;
    border-radius: 5px;
    background-color: orange;
  }
  .rect span {
    position: absolute;
    font-size: 4rem;
    top: 50%;
    margin-top: -2rem;
    left: 50%;
    margin-left: -2rem;
  }
`;

export default ToolStyles;