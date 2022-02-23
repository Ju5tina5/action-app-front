import React from 'react';
import FormComponent from "../components/FormComponent";

const LoginPage = () => {
    return (
        <div className={'d-flex flex-column align-center justify-center'}>
            <h1>Login</h1>
            <FormComponent type={'login'}/>
        </div>
    );
};

export default LoginPage;