import React from 'react'
import { Button } from '@chakra-ui/react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup';
import './Contact.css'
import Navbar from '../navbar/Navbar'
import { useSelector, useDispatch } from 'react-redux'
import { registered, unregistered } from './contactSlice';

export default function Contact() {

  const numbOfContacts = useSelector(state => state.contact.numbOfContacts)
  const dispatch = useDispatch()

  const validateSchema = Yup.object({
    name: Yup.string().required('*Required'),
    email: Yup.string().email('Invalid email format !').optional(),
    phone: Yup.string().matches(/[0]\d{9,10}/, 'Invalid phone number !').max(11, 'Invalid phone number').required('*Required')
  })

  const initialValues = {
    name: '',
    gender: 'male',
    email: '',
    phone: '',
    noti: false,
  }

  const handleSubmit = (values) => {
    console.log("Data: ", values)
  }

  return (
    <>
      <Navbar />
      <Formik
        initialValues={initialValues}
        validationSchema={validateSchema}
        onSubmit={handleSubmit}
        dirty>
        {({ values }) => (
        <Form className='form-container'>
          <div className='form-control'>
            <label htmlFor='name'>Name:</label>
            <Field type='text' className='form-input name' name='name' placeholder='Name' /><br />
            <div className='error'>
              <ErrorMessage name='name' />
            </div>
          </div>

          <div className='form-control'>
            <label htmlFor='gender'>Gender:</label>
            <label>
              <Field type="radio" name="gender" value="Male" />
              Male
            </label>
            <label>
              <Field type="radio" name="gender" value="Female" />
              Female
            </label>
          </div>

          <div className='form-control'>
            <label htmlFor='email'>Email:</label>
            <Field type='text' className='form-input email' name='email' placeholder='Email' /><br />
            <div className='error'>
              <ErrorMessage name='email' />
            </div>
          </div>

          <div className='form-control'>
            <label htmlFor='phone'>Phone number:</label>
            <Field type='text' className='form-input phone' name='phone' placeholder='Phone number' /><br />
            <div className='error'>
              <ErrorMessage name='phone' />
            </div>
          </div>

          <div className='form-control'>
            <Field name='noti' type='checkbox' value={true}/>
            <label htmlFor='noti'> I want to receive notifications to my email or my phone number about news on The Cinema</label>

          </div>

          <Button type='reset' disabled>Reset</Button>
          <Button type='submit' onClick={dispatch(registered())}>Submit</Button>
        </Form>
        )}
      </Formik>
    </>
  )
}