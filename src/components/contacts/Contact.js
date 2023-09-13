import React, { useEffect } from 'react'
import { Button, Tabs, Tab, TabList, TabPanel, TabPanels } from '@chakra-ui/react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup';
import './Contact.css'
import Navbar from '../navbar/Navbar'
import { useSelector, useDispatch } from 'react-redux'
import { fetchContacts } from './contactSlice'
import { useNavigate } from 'react-router-dom';

export default function Contact() {
  const contact = useSelector(state => state.contact)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(fetchContacts)
  }, [])

  const contactValidateSchema = Yup.object({
    name: Yup.string().required('*Required'),
    email: Yup.string().required('*Required').email('Invalid email format !'),
    phone: Yup.string().required('*Required').matches(/[0]\d{9,10}/, 'Invalid phone number !').max(11, 'Invalid phone number').required('*Required')
  })

  const initialContactValues = {
    name: '',
    email: '',
    phone: '',
    noti: false,
  }

  const handleContactSubmit = (values) => {
    console.log('Contact data: ', values)
    navigate('/success')
  }

  const reportValidateSchema = Yup.object({
    name: Yup.string().required('*Required'),
    email: Yup.string().required('*Required').email('Invalid email format !'),
    type: Yup.string().required('Please choose a specific type of the issue.'),
    message: Yup.string().max(500).required("Please elaborate the issue.")
  })

  const initialReportValues = {
    name: '',
    email: '',
    type: '',
    message: '',
  }

  const handleReportSubmit = (values) => {
    console.log("Report data: ", values)
    navigate('/success')
  }

  return (
    <>
      <Navbar />
      <Tabs variant='soft-rounded' colorScheme='blue' align='center'>
        <TabList>
          <Tab>Keep in touch</Tab>
          <Tab>Report an issue</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Formik
              initialValues={initialContactValues}
              validationSchema={contactValidateSchema}
              onSubmit={handleContactSubmit}
              dirty>
              {({ values }) => (
                <Form className='form-container'>
                  <div className='form-control'>
                    <Field type='text' className='form-input name' name='name' required /><br />
                    <label htmlFor='name'>Name</label>
                    <div className='error'>
                      <ErrorMessage name='name' />
                    </div>
                  </div>

                  <div className='form-control'>
                    <Field type='text' className='form-input email' name='email' required /><br />
                    <label htmlFor='email'>Email</label>
                    <div className='error'>
                      <ErrorMessage name='email' />
                    </div>
                  </div>

                  <div className='form-control'>
                    <Field type='text' className='form-input phone' name='phone' required /><br />
                    <label htmlFor='phone'>Phone number</label>
                    <div className='error'>
                      <ErrorMessage name='phone' />
                    </div>
                  </div>

                  <div className='form-control'>
                    <Field name='noti' type='checkbox' />
                    <label htmlFor='noti' id="noti"> I want to receive notifications about every news and features about The Cinema in the future.</label>
                  </div>

                  <Button type='submit' className='button'>
                    Submit
                  </Button>

                </Form>
              )}
            </Formik>
          </TabPanel>
          <TabPanel>
            <Formik
              initialValues={initialReportValues}
              validationSchema={reportValidateSchema}
              onSubmit={handleReportSubmit}
              dirty>
              {({ values }) => (
                <Form className='form-container'>
                  <div className='form-control'>
                    <Field type='text' className='form-input name' name='name' required /><br />
                    <label htmlFor='name'>Name</label>
                    <div className='error'>
                      <ErrorMessage name='name' />
                    </div>
                  </div>

                  <div className='form-control'>
                    <Field type='text' className='form-input email' name='email' required /><br />
                    <label htmlFor='email'>Email</label>
                    <div className='error'>
                      <ErrorMessage name='email' />
                    </div>
                  </div>

                  <div className='form-control'>
                    <label htmlFor='type'>Type of issue</label>
                    <Field as='select' name='type' className='form-select' required>
                      <option value=''>Select the type of the issue</option>
                      <option value='Unavailable products'>Unavailable products</option>
                      <option value='Long waits'>Long waits</option>
                      <option value='Unhelpful customer service'>Unhelpful customer service</option>
                      <option value='Poor customer service communication'>Poor customer service communication</option>
                    </Field><br />
                    <div className='error'>
                      <ErrorMessage name='phone' />
                    </div>
                  </div>

                  <div className='form-control'>
                    <Field name='message' className='form-input message' type='text' required />
                    <label htmlFor='message'>Message</label>
                    <div className='error'>
                      <ErrorMessage name='message' />
                    </div>
                  </div>

                  <Button type='submit' className='button'>
                    Submit
                  </Button>
                </Form>
              )}
            </Formik>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  )
}