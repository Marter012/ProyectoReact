import { Formik } from 'formik';
import React from 'react';

import LoginInput from '../../components/UI/LoginInput/LoginInput';
import Submit from '../../components/UI/Submit/Submit';

import { Form, LoginContainerStyled, LoginEmailStyled } from './RegisterStyles';
import { registerInitialValues,registerValidationSchema } from '../../formik/initialValues';
import { createUser } from '../../axios/axios-user';
import {useDispatch} from 'react-redux'
import {setCurrentUser} from '../../redux/user/userSlice'

const Register = () => {

  const dispatch = useDispatch();
  return (
    <LoginContainerStyled>
      <h1>Crea tu cuenta</h1>
      <Formik
      initialValues={registerInitialValues}
      validationSchema={registerValidationSchema}
      onSubmit={async(values,actions)=> {
        const user = await createUser(values.name, values.email.values.password)
        actions.resetForm()

        if(user){
          dispatch(setCurrentUser({
            ...user.usuario,
            token : user.token
          }))
        }
      }}>
        <Form>
          <LoginInput type='text' placeholder='Nombre' name='name' />
          <LoginInput type='text' placeholder='Email' name='email' />
          <LoginInput type='password' placeholder='Password' name='password' />

          <LoginEmailStyled to='/login'>
            <p>¿Ya tenes cuenta? Inicia sesión</p>
          </LoginEmailStyled>
          <Submit>Registrarte</Submit>
        </Form>
      </Formik>
    </LoginContainerStyled>
  );
};

export default Register;
