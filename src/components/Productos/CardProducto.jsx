import React from 'react';
import { formatPrice } from '../../utils/index';

import Button from '../UI/Button/Button';

import {
  CardPrice,
  ContainerPrice,
  ProductosCard,
} from './CardsProductosStyles';

const CardProducto = ({ img, title, desc, price, id }) => {
  return (
    <ProductosCard>
      <img src={''} alt='La Aco' />
      <h2>La Aco</h2>
      <p>Cheta la gorra</p>
      <ContainerPrice>
        <CardPrice>{formatPrice(3000)}</CardPrice>
        <Button onClick={e=>e.preventDefault()}>Agregar</Button>
      </ContainerPrice>
    </ProductosCard>
  );
};

export default CardProducto;
