import React, {useRef} from 'react';
import Button from "../UI/Button";

const FormComponent = ({type}) => {

    const refs = {
        registerName: useRef(),
        passwordOne: useRef(),
        passwordTwo: useRef(),
        loginName: useRef(),
        loginPassword: useRef()
    }


    const handleRegisterForm = (e) => {
        e.preventDefault();
        console.log('register')
    }


    const handleLoginForm = (e) => {
      e.preventDefault();
        console.log('Log in')
    }


    if(type === 'register'){
        return (
            <form className={'d-flex flex-column'} onSubmit={handleRegisterForm}>
                <input type="text" ref={refs.registerName} placeholder={'User name'}/>
                <input type="password" ref={refs.passwordOne} placeholder={'Password'}/>
                <input type="password" ref={refs.passwordTwo} placeholder={'Repeat Password'}/>
                <Button type={'submit'}>Register</Button>
            </form>
        );
    }else{
        return (
            <form className={'d-flex flex-column'} onSubmit={handleLoginForm}>
                <input type="text" ref={refs.loginName} placeholder={'User name'}/>
                <input type="password" ref={refs.loginPassword} placeholder={'Password'}/>
                <Button type={'submit'}>Login</Button>
            </form>
        );
    }

};

export default FormComponent;