// validationSchema.js
import * as yup from 'yup';
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const Schema = yup.object().shape({
    quantity: yup
    .number()
    .required('Quantity is required')
    .min(0, 'Quantity cannot be negative')
    .max(1000, 'Quantity cannot exceed 1000') // Adding max validation
    .integer('Quantity must be an integer'),
  name: yup.string().required('Last name is required'),
  phoneNumber: yup.string().required('Phone number is required').matches(phoneRegExp, 'Phone number is not valid'),
  email: yup.string().email('Invalid email format').required('Email is required'),
});
