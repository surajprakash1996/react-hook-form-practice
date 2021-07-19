import React from 'react'
import {FormProvider, useForm} from 'react-hook-form';
import Form from './Forms';

const FormProviderComponent = () => {
    const methods = useForm();
    return (
        <FormProvider {...methods}>
            <Form method={methods} />
        </FormProvider>
    )
}

export default FormProviderComponent;
