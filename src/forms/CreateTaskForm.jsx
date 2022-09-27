import { useFormik } from 'formik';
import React from 'react';
import styled from 'styled-components';


export const CreateTaskForm = ({addTask}) => {

    const {values, handleChange, handleSubmit, setFieldValue} = useFormik({
        initialValues: {
            name: ""
        },
        onSubmit: (values) => {
            addTask(values.name)
            
        }
    });

  

  return (
    <FormContainer><h1>New Task</h1>
        <InputStyled type="text" name="name" value={values.name} onChange={handleChange} placeholder="Task Name" />
    </FormContainer>
  )
}


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