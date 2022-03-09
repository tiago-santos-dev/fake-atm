import React from 'react';
import * as Yup from 'yup';
import {
  FiCalendar,
  FiFlag,
  FiGlobe,
  FiHome,
  FiLock,
  FiMail,
  FiMap,
  FiMapPin,
  FiNavigation,
  FiUser
} from 'react-icons/fi';
import GenericForm from '@components/Generic/Form';
import { IFieldProps, ISignUpFormData } from '@/types';

const SignUpForm: React.FC = () => {
  const initialValues: ISignUpFormData = {
    name: '',
    cpf: '',
    bith_date: new Date(),
    street: '',
    street_number: 0,
    district: '',
    city: '',
    state: '',
    zip_code: '',
    email: '',
    password: ''
  };

  const SignUpSchema = Yup.object().shape({
    name: Yup.string(),
    bith_date: Yup.string(),
    zip_code: Yup.string(),
    street: Yup.string(),
    street_number: Yup.string(),
    district: Yup.string(),
    city: Yup.string(),
    state: Yup.string(),
    email: Yup.string()
      .email('Email Inválido')
      .required('Este campo é obrigatório'),
    password: Yup.string().min(8, 'A senha deve conter no mínimo 8 caracteres')
  });

  const fields: IFieldProps[] = [
    { name: 'name', label: 'nome completo', icon: FiUser },
    {
      name: 'bith_date',
      label: 'Data de Nascimento',
      type: 'Date',
      icon: FiCalendar
    },
    { name: 'zip_code', label: 'CEP', icon: FiMapPin },
    { name: 'street', label: 'logradouro', icon: FiNavigation },
    { name: 'street_number', label: 'número', type: 'number', icon: FiHome },
    { name: 'district', label: 'bairro', icon: FiFlag },
    { name: 'city', label: 'Cidade', icon: FiGlobe },
    { name: 'state', label: 'UF', icon: FiMap },
    { name: 'email', label: 'email', type: 'email', icon: FiMail },
    { name: 'password', label: 'senha', type: 'password', icon: FiLock },
    {
      name: 'check_password',
      label: 'confirmar senha',
      type: 'password',
      icon: FiLock
    }
  ];

  return (
    <GenericForm
      fields={fields}
      initialValues={initialValues}
      label="Cadastre-se"
      validationSchema={SignUpSchema}
      onSubmit={() => {}}
      submitButtonText="Cadastrar"
    />
  );
};

export default SignUpForm;
