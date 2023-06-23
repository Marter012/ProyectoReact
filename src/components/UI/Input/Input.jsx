import React from 'react';

import {
  ErrorMessageStyled,
  InputBoxStyled,
  InputLabelStyled,
  InputStyled,
} from './InputStyles';

const Input = ({ children, htmlFor, type, id, placeholder, name }) => {
  return (
    <InputBoxStyled>
          <InputLabelStyled htmlFor={htmlFor}>{children}</InputLabelStyled>
          <InputStyled
            type={type}
            id={id}
            placeholder={placeholder}
            />
        </InputBoxStyled>
  );
};

export default Input;
