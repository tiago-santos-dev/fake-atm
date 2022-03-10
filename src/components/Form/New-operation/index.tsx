import React from 'react';
import * as Yup from 'yup';
import GenericForm from '@components/Generic/Form';
import { IFieldProps, INewOperationFormData } from '@/types';
import { FaMoneyCheckAlt } from 'react-icons/fa';

const NewOperationForm: React.FC = () => {
  const initialValues: INewOperationFormData = { amount: 0 };

  const SignInSchema = Yup.object().shape({
    amount: Yup.number()
  });

  const fields: IFieldProps[] = [
    { name: 'amount', label: 'Valor', type: 'number', icon: FaMoneyCheckAlt }
  ];

  return (
    <GenericForm
      fields={fields}
      initialValues={initialValues}
      label="nova operação"
      validationSchema={SignInSchema}
      onSubmit={() => {}}
      submitButtonText="Enviar"
    />
  );
};

export default NewOperationForm;
