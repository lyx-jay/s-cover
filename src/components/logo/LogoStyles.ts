import styled from "styled-components";

const LogoStyles = styled.div`
  padding: 2rem;
  .search__logo {
    width: 30rem;
    height: 4rem;
    display: flex;
    align-items: center;
    padding: 0.5rem 1rem;
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
`;

export default LogoStyles;