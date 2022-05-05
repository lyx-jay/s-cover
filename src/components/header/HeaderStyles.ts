import styled from 'styled-components';

const HeaderStyles = styled.header`
  .header__wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.8rem;
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