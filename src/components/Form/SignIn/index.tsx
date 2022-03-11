import React, { useContext } from 'react';
import * as Yup from 'yup';
import { FiLock, FiMail } from 'react-icons/fi';
import GenericForm from '@components/Generic/Form';
import { IFieldProps, ISignInFormData } from '@/types';
import { AuthContext } from '@/contexts/AuthContext';

const SignInForm: React.FC = () => {
  const initialValues: ISignInFormData = { email: '', password: '' };
  const { signIn } = useContext(AuthContext);

  const SignInSchema = Yup.object().shape({
    email: Yup.string()
      .email('Email Inválido')
      .required('Este campo é obrigatório'),
    password: Yup.string().min(8, 'A senha deve conter no mínimo 8 caracteres')
  });

  const handleSubmit = async (values: ISignInFormData) => {

    await signIn(values)

  }

  const fields: IFieldProps[] = [
    { name: 'email', label: 'email', type: 'email', icon: FiMail },
    { name: 'password', label: 'senha', type: 'password', icon: FiLock }
  ];

  return (
    <GenericForm
      fields={fields}
      initialValues={initialValues}
      label="Login"
      validationSchema={SignInSchema}
      onSubmit={(values) => handleSubmit(values)}
      submitButtonText="Entrar"
    />
  );
};

export default SignInForm;
