import styled from 'styled-components';

export const Overlay = styled.div`
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(4.5px);
  width: 100%;
  height: 100%;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalBody = styled.div`
  background-color: #fff;
  width: 480px;
  border-radius: 8px;
  padding: 2rem;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    strong {
      font-size: 1.5rem;
    }

    button {
      line-height: 0;
      border: 0;
      background-color: transparent;
    }
  }
`;

export const StatusContainer = styled.div`
  margin-top: 2rem;

  small {
    font-size: 0.875rem;
    opacity: 0.8;
  }

  div {
    margin-top: 8px;
    display: flex;
    align-items: center;
    gap: 8px;
  }
`;

export const OrderDetails = styled.div`
  margin-top: 2rem;

  > strong {
    font-weight: 500;
    font-size: 0.875rem;
    opacity: 0.8;
  }

  .order-items {
    margin-top: 16px;

    .item {
      display: flex;

      & + .item {
        margin-top: 1rem;
      }

      img {
        border-radius: 6px;
      }

      .quantity {
        font: 0.875rem;
        color: #666;
        display: block;
        min-width: 20px;
        margin-left: 0.75rem;
      }

      .product-detail {
        margin-left: 0.25rem;
        strong {
          display: block;
          margin-bottom: 0.25rem;
        }

        span {
          font-size: 0.875rem;
        }
      }
    }
  }

  .total {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 1.5rem;

    span {
      font-weight: 500;
      font-size: 0.875rem;
      opacity: 0.8;
    }
  }
`;

export const Actions = styled.footer`
  display: flex;
  flex-direction: column;
  margin-top: 0.75rem;
  .primary {
    background: #333;
    border-radius: 48px;
    border: 0;
    color: #fff;
    padding: 0.75rem 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
  }

  .secondary {
    padding: 0.875rem 1.5rem;
    color: #d73035;
    font-weight: bold;
    border: 0;
    background-color: transparent;
    margin-top: 0.75rem;
  }
`;
