import * as Yup from 'yup';
const NAME_REGEXP = /^[^\W_].*$/;
const EMAIL_REGEXP = /^[^-\s]\S+@\S+\.\S*[^-]$/;

export const userSchema = Yup.object({
  name: Yup.string()
    .matches(NAME_REGEXP, 'Data is not correct')
    .min(3, 'More than 3 characters required')
    .max(100, 'Not more than 100 characters required'),
  email: Yup.string('Data is not correct')
    .matches(EMAIL_REGEXP, 'Data is not correct')
    .min(10, 'More than 10 characters required')
    .max(63, 'Not more than 163 characters required')
    .required('This is required field'),
});
