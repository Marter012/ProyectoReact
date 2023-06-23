import Button from '../UI/Button/Button';
import CardProducto from './CardProducto';

import { ProductosContainer } from './CardsProductosStyles';
import { ButtonContainerStyled } from '../../pages/Home/HomeStyles';
import { products } from '../../data/Products';

const CardsProductos = () => {
  return (
    <>
      <ProductosContainer>
        {products.map(producto => (
           <CardProducto key={producto} {...producto} />
        ))}        
      </ProductosContainer>
      <ButtonContainerStyled>
          <Button
            onClick={e => e.preventDefault()}
            secondary='true'
            disabled='true'
          >
            <span>Ver menos</span>
          </Button>
          <Button
            onClick={e => e.preventDefault()}
            disabled='true'
          >
            Ver más
          </Button>
        </ButtonContainerStyled>
    </>
  );
};

export default CardsProductos;
