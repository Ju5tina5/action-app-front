import React from 'react';
import FormComponent from "../components/FormComponent";

const RegisterPage = () => {

    return (
        <div className={'d-flex flex-column align-center justify-center'}>
            <h2>Register</h2>
            <FormComponent type={'register'}/>
        </div>
    );
};

export default RegisterPage;