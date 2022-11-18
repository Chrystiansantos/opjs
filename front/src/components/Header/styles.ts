import styled from 'styled-components';

export const Container = styled.header`
  background-color: #d73035;
  display: flex;
  justify-content: center;
  height: 198px;
  align-items: center;
`;

export const Content = styled.div`
  max-width: 1216px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .page-details {
    h1 {
      color: #fff;
      font-size: 2rem;
    }

    h2 {
      margin-top: 0.5rem;
      color: #fff;
      font-weight: 400;
      opacity: 0.9;
    }
  }
`;
