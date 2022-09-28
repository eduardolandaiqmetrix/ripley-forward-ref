import { useFormik } from 'formik';
import React, { forwardRef, useImperativeHandle } from 'react';
import styled from 'styled-components';


export const CreateTaskForm = forwardRef (({addTask}, ref) => {

    const {values, handleChange, handleSubmit, setFieldValue} = useFormik({
        initialValues: {
            name: ""
        },
        onSubmit: (values) => {
            addTask(values.name)
            setFieldValue("name", "")
            
        }
    });

    useImperativeHandle(ref, () => ({
        submitForm: () => handleSubmit()
      }));

  return (
    <FormContainer ><h1>New Task</h1>
        <InputStyled type="text" name="name" value={values.name} onChange={handleChange} placeholder="Task Name" />
    </FormContainer>
  )
})


const FormContainer = styled.form`
    background-color: #80808052;
    width: 500px;
    border-radius: 8px;
    padding: 16px;
`;

const InputStyled = styled.input`
    border: none;
    padding: 4px;
    border-radius: 8px;
    font-weight: bold;
`