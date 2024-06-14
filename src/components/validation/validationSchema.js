// validationSchema.js
import * as yup from 'yup'
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const Schema = yup.object().shape({
    quantity: yup
    .number()
    .required('Quantity is required')
    .min(0, 'Quantity cannot be negative')
    .max(1000, 'Quantity cannot exceed 1000') // Adding max validation
    .integer('Quantity must be an integer'),
  name: yup
  .string()
  .matches(/^[A-Za-zÀ-ÖÙ-öù-ÿĀ-žḀ-ỿăươ  ]*$/, 'Tên không hợp lệ')
  .max(40)
  .required(),
  phoneNumber: yup.string().required('Số điện thoại không được để trống').matches(phoneRegExp, 'Số điện thoại không hợp lệ'),
  email: yup.string().email('Email không hợp lệ').required('Email không được để trống'),
  password: yup.string().required('Mật khẩu không được để trống'),
  createPassword: yup.string().required('Mật khẩu không được để trống'),
  confirmPassword: yup.string()
  .oneOf([yup.ref('createPassword'), null], 'Mật khẩu không khớp')
  .required('Mật khẩu không được để trống'),
});
