import React from 'react';
import { formatPrice } from '../../../utils';

import { BsPlusLg } from 'react-icons/bs';
import { FaMinus } from 'react-icons/fa';

import Count from '../../UI/Count/Count';
import Increase from '../../UI/Increase/Increase';

import {
  CardTitleStyled,
  PriceStyled,
  ProductContainerStyled,
  QuantityContainerStyled,
  TextContainerStyled,
  TextStyled,
} from './ModalCartStyles';

const ModalCartCard = ({ id, img, title, desc, price, quantity }) => {
  return (
    <ProductContainerStyled>
      <img src={''} alt='La Aco' />
      <TextContainerStyled>
        <CardTitleStyled>La Aco</CardTitleStyled>
        <TextStyled>Cheta la gorra</TextStyled>
        <PriceStyled>{formatPrice(3000)}</PriceStyled>
      </TextContainerStyled>
      <QuantityContainerStyled>
        <Increase
          bgColor='var(--btn-gradient-secondary)'
          onClick={e=>e.preventDefault()}
        >
          <FaMinus/>  
        </Increase>
        <Count>3</Count>
        <Increase
          onClick={e=>e.preventDefault()}
        >
          <BsPlusLg />
        </Increase>
      </QuantityContainerStyled>
    </ProductContainerStyled>
  );
};

export default ModalCartCard;
