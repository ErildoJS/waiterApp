import React, { useState } from 'react';
import { Order } from '../../types/Order';
import { OrderModal } from '../OrderModal';
import { Board, OrdersContainer } from './styles';

type OrdersBoardProps = {
  icon: string
  title: string
  orders: Order[]
}
export function OrdersBoard({icon, title, orders}: OrdersBoardProps) {
  const [isVisibleModal, setIsVisibleModal] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<null | Order>(null);

  function handleOpenModal(order: Order) {
    setIsVisibleModal(true);
    setSelectedOrder(order);
  }

  function handleCloseModal() {
    setIsVisibleModal(false);
    setSelectedOrder(null);
  }

  return (
    <Board>
      <OrderModal visible={isVisibleModal} order={selectedOrder} onClose={handleCloseModal} />
      <header>
        <span>{icon}</span>
        <strong>{title}</strong>
        <span>({orders.length})</span>
      </header>

      {orders.length > 0 && (
        <OrdersContainer>
          {orders.map((order) => (
            <button type='button' key={order._id} onClick={() => handleOpenModal(order)}>
              <strong>{order.table}</strong>
              <span>{order.products.length} itens</span>
            </button>
          ))}
        </OrdersContainer>
      )}
    </Board>
  );
}