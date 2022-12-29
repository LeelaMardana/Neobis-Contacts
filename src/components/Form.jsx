import { Formik, Form, useField } from 'formik';
import * as Yup from 'yup';
import styled from 'styled-components';
import { updateContact } from '../features/contacts-slice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const FormStyled = styled(Form)`
  width: 100%;
  max-width: 621px;
  font-size: 16px;
  line-height: 22px;
  color: rgba(33, 33, 33, 0.75);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  column-gap: 43px;
  row-gap: 27px;
  div {
    display: flex;
    flex-direction: column;
    .error {
      color: red;
    }
  }
  input {
    color: inherit;
    height: 38px;
    padding: 0 8px;
    border: 1px solid #b2b2b2;
    border-radius: 2px;
  }
  button {
    background: #212121;
    border-radius: 2px;
    color: #ffffff;
    cursor: pointer;
    display: inline;
    height: 40px;
    align-self: flex-end;
    margin: 0;
    padding: 0;
    border: 0;
    font-weight: 500;
  }
`;

const MyTextInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <>
      <label htmlFor={props.name}>{label}</label>
      <input {...props} {...field} />
      {meta.touched && meta.error ? (
        <div className='error'>{meta.error}</div>
      ) : null}
    </>
  );
};

export const CustomForm = ({
  id,
  city,
  country,
  email,
  firstName,
  lastName,
  phoneNumber,
  website,
  image,
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <Formik
      initialValues={{
        id,
        firstName,
        lastName,
        city,
        country,
        phoneNumber,
        email,
        website,
        image,
      }}
      validationSchema={Yup.object({
        firstName: Yup.string()
          .min(2, 'Минимум 2 символа.')
          .required('Пожалуйста, заполните это поле.'),
        lastName: Yup.string()
          .min(2, 'Минимум 2 символа.')
          .required('Пожалуйста, заполните это поле.'),
        city: Yup.string()
          .min(2, 'Минимум 2 символа.')
          .required('Пожалуйста, заполните это поле.'),
        country: Yup.string()
          .min(2, 'Минимум 2 символа.')
          .required('Пожалуйста, заполните это поле.'),
        phoneNumber: Yup.string()
          .matches(
            /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/,
            'Недействительный номер телефона.'
          )
          .min(10, 'Введите в международном формате: +996 xxx xx xx xx.')
          .max(13, 'Не больше 13 символов.')
          .required('Пожалуйста, заполните это поле.'),
        email: Yup.string()
          .email('Неправильный email адрес!')
          .required('Пожалуйста, заполните это поле.'),
        website: Yup.string()
          .matches(
            /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
            'Введите правильный URL.'
          )
          .required('Пожалуйста, заполните это поле.'),
      })}
      onSubmit={values => {
        dispatch(updateContact(values));
        navigate(-1);
      }}
    >
      <FormStyled className='form'>
        <div>
          <MyTextInput
            label='First name:'
            id='firstName'
            name='firstName'
            type='text'
          />
        </div>

        <div>
          <MyTextInput
            label='Last name:'
            id='lastName'
            name='lastName'
            type='text'
          />
        </div>

        <div>
          <MyTextInput label='City:' id='city' name='city' type='text' />
        </div>

        <div>
          <MyTextInput
            label='Country:'
            id='country'
            name='country'
            type='text'
          />
        </div>

        <div>
          <MyTextInput
            label='Phone Number:'
            id='phoneNumber'
            name='phoneNumber'
            type='text'
          />
        </div>

        <div>
          <MyTextInput label='Email:' id='email' name='email' type='email' />
        </div>

        <div>
          <MyTextInput
            label='Website:'
            id='website'
            name='website'
            type='text'
          />
        </div>

        <button type='submit'>Save Contact</button>
      </FormStyled>
    </Formik>
  );
};
