import React, { useState } from 'react'
import {Formik,Form} from 'formik';
import * as Yup from 'yup';
import FormikControl from '../form/FormikControl';
import  axios from 'axios';
import {useNavigate} from 'react-router-dom'

const Add =()=>{
    const navigate=useNavigate();
    
    const initialValues = {
        Name: '',
        Error: '',
        Solution: '',
    };
    const validationSchema=Yup.object({
        Name:Yup.string().required().trim(''),
        Error:Yup.string().required().trim(''),
        Solution: Yup.string().required().trim('')
    });

    const onSubmit = async (values) => {
        const data = {
          Name: values.Name,
          Error: values.Error,
          Solution: values.Solution,
        };
      
        try {
          const result = await axios.post('http://localhost:5000/addError', data, {
            headers: {
              'Content-Type': 'application/json',
            },
          });
      
          console.log(result);
        } catch (error) {
          console.error(error);
        }
      };
      
    return (
        <div>
        <div>
            <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
             >
                {(formik)=>(
                    <Form>
                        <FormikControl control='input'
                        type='text'
                        placeholder="Enter Your Name"
                        className=""
                        name='Name'
                        />
                        <FormikControl control='textarea' label="Error" name='Error' className="" />
                        <FormikControl control='textarea' label="Solution" name='Solution' className="" />
                       <div className=''>
                       < button type='submit' className=''>Add Error</button>
                       </div>
                    </Form>
                )}
                </Formik>
                </div>
                </div>
    );
};
export default Add;
