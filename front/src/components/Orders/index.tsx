import { IOrder } from '../../types/Order';
import { OrdersDashboard } from '../OrdersBoard';
import { Container } from './styles';

export function Orders() {
  const orders: IOrder[] = [
    {
      _id: '6374ddf724e1be5d30cbabab',
      table: '1',
      status: 'IN_PRODUCTION',
      products: [
        {
          product: {
            name: 'Pizza quatro queijos',
            imagePath: '1668598777975-quatro-queijos.png',
            price: 10,
          },
          quantity: 3,
          _id: '6374ddf724e1be5d30cbabac',
        },
        {
          product: {
            name: 'Coca Cola',
            imagePath: '1668599786252-coca-cola.png',
            price: 10,
          },
          quantity: 2,
          _id: '6374ddf724e1be5d30cbabad',
        },
      ],
    },
  ];

  return (
    <Container>
      <OrdersDashboard icon="🕗" title="Fila de espera" orders={orders} />
      <OrdersDashboard icon="👨🏻‍🍳" title="Em preparação" orders={[]} />
      <OrdersDashboard icon="✅" title="Fila de espera" orders={[]} />
    </Container>
  );
}
