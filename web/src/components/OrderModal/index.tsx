import React, { KeyboardEvent, useEffect } from 'react';
import closeIcon from '../../assets/images/close-icon.svg';
import { Order } from '../../types/Order';
import { formatCurrency } from '../../utils/formatCurrency';

import { ModalBody, Overlay, OrderDetails, Actions } from './styles';

type OrderModalProps = {
  visible: boolean
  order: Order | null
  onClose: () => void
}
export function OrderModal({visible, order, onClose}: OrderModalProps) {

  //logica para fechar o modal usando a tecla esc do teclado
  useEffect(() => {
    function handleKeyDown(event: globalThis.KeyboardEvent) {
      if(event.key === 'Escape') {
        onClose();
      }
    }

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if(!visible || !order) {
    return null;
  }

  const total = order.products.reduce((total, {product, quantity}) => {
    return total += (product.price * quantity);
  }, 0);
  
  return (
    <>
      <Overlay>
        <ModalBody>
          <header>
            <strong>Mesa {order.table}</strong>

            <button type='button' onClick={onClose}>
              <img src={closeIcon} alt="imagem de fechar modal" />
            </button>
          </header>

          <div className="status-container">
            <small>Status do pedido</small>
            <div>
              <span>
                {order.status === 'WAITING' && '⏱'}
                {order.status === 'IN_PRODUCTION' && '👩‍🍳'}
                {order.status === 'DONE' && '✔'}
              </span>
              <strong>
                {order.status === 'WAITING' && 'Fila de espera'}
                {order.status === 'IN_PRODUCTION' && 'Em preparacao'}
                {order.status === 'DONE' && 'Pronto!'}
                
              </strong>
            </div>
          </div>

          <OrderDetails>
            <strong>Itens</strong>

            <div className="order-items">
              {order.products.map(({_id, quantity, product}) => (
                <div className="item" key={_id}>
                  <img src={`http://localhost:3333/uploads/${product.imagePath}`} alt={product.name} width="56" height="28.51" />
                  <span className="quantity">{quantity}x</span>

                  <div className="product-details">
                    <strong>{product.name}</strong>
                    <span>{formatCurrency(product.price)}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="total">
              <span>Total</span>
              <strong>Kwz {formatCurrency(total)}</strong>
            </div>
          </OrderDetails>

          <Actions>
            <button className="primary">
              <span>👩‍🍳</span>
              <strong>Iniciar Producao</strong>
            </button>

            <button className="secondary">
              Cancelar Pedido
            </button>
          </Actions>
        </ModalBody>
      </Overlay>
    </>
  );
}