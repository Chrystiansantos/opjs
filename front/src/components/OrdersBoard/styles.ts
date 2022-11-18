import styled from 'styled-components';

export const Board = styled.div`
  flex: 1;
  padding: 1rem;
  border: 1px solid rgba(204, 204, 204, 0.4);
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;

  > header {
    padding: 8px;
    font-size: 0.875rem;
    display: flex;
    align-items: center;
    gap: 8px;
  }
`;

export const OrdersContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 1.5rem;

  button {
    background-color: #fff;
    border: 1px solid rgba(204, 204, 204, 0.4);
    height: 128px;
    border-radius: 8px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.25rem;

    strong {
      font-weight: 500;
    }

    span {
      font-size: 0.875rem;
      color: #666;
    }

    & + button {
      margin-top: 1.5rem;
    }
  }
`;
