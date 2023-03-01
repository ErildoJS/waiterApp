import React from 'react';
import logo from '../../assets/images/logo.svg';
import { Order } from '../../types/Order';
import { OrdersBoard } from '../OrdersBoard';
import { Container, Board, OrdersContainer } from './styles';

const orders: Order[] = [
  {
    '_id': '51857836538965163706573615',
    'table': '123',
    'status': 'WAITING',
    'products': [
      {
        'product': {
          'name': 'pizza quatro queijos',
          'imagePath': '1677587278375-quatro-queijos.png',
          'price': 40,
        },
        'quantity': 3,
        '_id': '105785738197538753875309538'
      },
      {
        'product': {
          'name': 'Coca cola',
          'imagePath': '1677587531604-coca-cola.png',
          'price': 7,
        },
        'quantity': 2,
        '_id': '105785738197538753875309538'
      },
    ]
  }
];
export function Orders() {
  return (
    <>
      <Container>
        <OrdersBoard icon="⏱" title="Fila de espera" orders={orders} />
        <OrdersBoard icon="👩‍🍳" title="Em Preparacao"orders={[]}/>
        <OrdersBoard icon="✔" title="Pronto!"orders={[]}/>
      </Container>
    </>
  );
}