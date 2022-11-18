import { useEffect } from 'react';
import {
  Actions,
  ModalBody,
  OrderDetails,
  Overlay,
  StatusContainer,
} from './styles';
import closeIcon from '../../assets/images/close-icon.svg';
import { IOrder } from '../../types/Order';
import { formatCurrency } from '../../ultil/formatCurrency';

interface IOrderModalProps {
  visible: boolean;
  order: IOrder;
  onClose: () => void;
}

const statusIcon = {
  WAITING: { icon: '🕛', title: 'Fila de espera' },
  IN_PRODUCTION: { icon: '👨🏻‍🍳', title: 'Em produção' },
  DONE: { icon: '✅', title: 'Pronto!' },
};

export function OrderModal({ visible, order, onClose }: IOrderModalProps) {
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        onClose();
      }
    }
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!visible) return null;

  const total = order.products.reduce((acc, { product, quantity }) => {
    return acc + product.price * quantity;
  }, 0);

  return (
    <Overlay>
      <ModalBody>
        <header>
          <strong>Mesa {order.table}</strong>
          <button type="button" onClick={onClose}>
            <img src={closeIcon} alt="Button close" />
          </button>
        </header>
        <StatusContainer>
          <small>Status do pedido</small>
          <div>
            <span>{statusIcon[order.status].icon}</span>
            <strong>{statusIcon[order.status].title}</strong>
          </div>
        </StatusContainer>
        <OrderDetails>
          <strong>Itens</strong>
          <div className="order-items">
            {order.products.map(({ _id, product, quantity }) => (
              <div className="item" key={_id}>
                <img
                  src={`http://localhost:3000/uploads/${product.imagePath}`}
                  alt={product.name}
                  width="56"
                  height="28.51"
                />
                <span className="quantity">{quantity}x</span>
                <div className="product-detail">
                  <strong>{product.name}</strong>
                  <span>{formatCurrency(product.price)}</span>
                </div>
              </div>
            ))}
            <div className="total">
              <span>Total</span>
              <strong>{formatCurrency(total)}</strong>
            </div>
          </div>
        </OrderDetails>
        <Actions>
          <button type="button" className="primary">
            <span>👨🏻‍🍳</span>
            <strong>Iniciar Produção</strong>
          </button>

          <button type="button" className="secondary">
            <strong>Cancelar pedido</strong>
          </button>
        </Actions>
      </ModalBody>
    </Overlay>
  );
}
