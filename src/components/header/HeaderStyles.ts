import styled from 'styled-components';

const HeaderStyles = styled.header`
  height: 5rem;
  .header__wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.8rem;
    .header__menu {
      flex: 1;
      display: flex;
      height: 3rem;
      align-items: center;
      margin-left: 19.5rem;
      gap: 1rem;
    }
    .header__categories {
      display: flex;
      align-items: center;
      .category__item {
        margin: 0 1rem;
      }
    }
  }

`;

export default HeaderStyles;