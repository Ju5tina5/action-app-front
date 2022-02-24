import React from 'react';
import FormComponent from "../components/FormComponent";

const RegisterPage = () => {

    return (
        <div className={'d-flex flex-column align-center justify-center'}>
            <h1>Register</h1>
            <FormComponent type={'register'}/>
        </div>
    );
};

export default RegisterPage;