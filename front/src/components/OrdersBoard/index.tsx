import { useState } from 'react';
import { IOrder } from '../../types/Order';
import { OrderModal } from '../OrderModal';
import { Board, OrdersContainer } from './styles';

interface IOrdersBoardProps {
  icon: string;
  title: string;
  orders: IOrder[];
}

export function OrdersDashboard({ icon, title, orders }: IOrdersBoardProps) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<IOrder>({} as IOrder);

  function handleOpenModal(order: IOrder) {
    setIsModalVisible(true);
    setSelectedOrder(order);
  }

  function handleCloseModal() {
    setIsModalVisible(false);
    setSelectedOrder({} as IOrder);
  }

  return (
    <Board>
      <OrderModal
        visible={isModalVisible}
        order={selectedOrder}
        onClose={() => handleCloseModal()}
      />
      <header>
        <span>{icon}</span>
        <strong>{title}</strong>
        <span>({orders.length})</span>
      </header>
      {!!orders.length && (
        <OrdersContainer>
          {orders.map(order => (
            <button
              type="button"
              // eslint-disable-next-line no-underscore-dangle
              key={order._id}
              onClick={() => handleOpenModal(order)}
            >
              <strong>Mesa {order.table}</strong>
              <span>{order.products.length} itens</span>
            </button>
          ))}
        </OrdersContainer>
      )}
    </Board>
  );
}
