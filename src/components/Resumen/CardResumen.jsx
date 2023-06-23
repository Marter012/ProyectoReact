import React from 'react';
import { formatPrice } from '../../utils';

import {
  PriceContainerStyled,
  ProductLeftStyled,
  ProductPriceStyled,
  ProductStyled,
} from './CardResumenStyles';

const CardResumen = () => {
  return (
    <ProductStyled>
      <ProductLeftStyled>
        <img src={''} alt='La Aco' />
        <div>
          <h3>La Aco</h3>
          <p>Cheta la gorra</p>
        </div>
      </ProductLeftStyled>
      <PriceContainerStyled>
        <p>3U</p>
        <ProductPriceStyled>{formatPrice(300 * 3)}</ProductPriceStyled>
      </PriceContainerStyled>
    </ProductStyled>
  );
};

export default CardResumen;
