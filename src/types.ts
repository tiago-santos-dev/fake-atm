import { FormikValues } from 'formik';
import { IconBaseProps } from 'react-icons/lib';

export interface IFieldProps {
  name: string;
  label: string;
  type?: string;
  icon?: React.ComponentType<IconBaseProps>;
}

export interface IGenericFormProps {
  initialValues: FormikValues;
  validationSchema: object;
  onSubmit: () => void;
  submitButtonText: string;
  label: string;
  fields: IFieldProps[];
}

export interface ISignInFormData {
  email: string;
  password: string;
}
export interface ISignUpFormData {
  name: string;
  cpf: string;
  bith_date: Date;
  zip_code: string;
  street: string;
  street_number: number;
  district: string;
  city: string;
  state: string;
  email: string;
  password: string;
}
