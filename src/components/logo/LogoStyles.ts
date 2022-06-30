import styled from "styled-components";

const LogoStyles = styled.div`
  .search__logo {
    width: 28rem;
    height: 4rem;
    display: flex;
    align-items: center;
    padding: 0.5rem 1rem;
    margin-bottom: 0.5rem;
    border: 1px solid black;
    border-radius: 8px;
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
    width: 28rem;
    height: 800px;
    display: grid;
    row-gap: 1rem;
    justify-items: center;
    align-items: center;
    grid-template-columns: repeat(3, 33.3%);
    grid-template-rows: repeat(10, 1fr);
    margin-top: 1rem;
    overflow-y: auto;
  }

  .search__results img {
    width: 5rem;
    height: 5rem;  
  }
  .search__results img:hover {
    cursor: pointer;
  }
`;

export default LogoStyles;