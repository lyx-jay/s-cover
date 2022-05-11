import styled from "styled-components";

const LogoStyles = styled.div`
  height: 282px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  .search__logo {
    width: 30rem;
    height: 4rem;
    display: flex;
    align-items: center;
    padding: 0.5rem 1rem;
    margin-bottom: 0.5rem;
    border: 1px solid black;
    border-radius: 5px;
  }
  input {
    flex: 1;
    width: 100%;
    height: 100%;
    outline: none;
    border: none;
  }
  .search__logo span {
    width: 3rem;
    height: 3rem;
    line-height: 3rem;
    font-size: 2.5rem;
    text-align: center;
  }

  .search__results {
    flex: 1;
    display: grid;
    grid-template-columns: repeat(9, 1fr);
    grid-template-rows: repeat(2, 1fr);
    justify-items: center;
    align-items: center;
    gap: 0.7rem;
    overflow: auto;
  }
  .search__results img {
    width: 7rem;
    height: 7rem;  
  }
  .search__results img:hover {
    cursor: pointer;
  }
`;

export default LogoStyles;