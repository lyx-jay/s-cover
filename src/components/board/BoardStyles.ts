import styled from "styled-components";

const BoardStyles = styled.div`
  width: 100%;
  height: 350px;
  /* border: 1px solid blue; */
  .board__wrapper {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    border: 1px solid red;
  }
  .board__navigation {
    height: 4rem;
    line-height: 4rem;
    padding: 0 2rem;
    background-color: pink;
    font-size: 2rem;
    a {
      padding: 0 2rem;
    }
  }
  .board__navigation__item {
    flex: 1;
  }
`;

export default BoardStyles;