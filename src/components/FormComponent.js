import React, {useContext, useRef, useState} from 'react';
import Button from "../UI/Button";
import http from "../plugins/http";
import {useNavigate} from "react-router-dom";
import MainContext from "../context/MainContext";

const FormComponent = ({type}) => {

    const { setUser} = useContext(MainContext);

    const [message, setMessage] = useState('');

    const nav = useNavigate();

    const refs = {
        registerName: useRef(),
        passwordOne: useRef(),
        passwordTwo: useRef(),
        loginName: useRef(),
        loginPassword: useRef()
    }


    const handleRegisterForm = (e) => {
        e.preventDefault();

        const registerData = {
            user_name: refs.registerName.current.value,
            password: refs.passwordOne.current.value,
            passwordTwo: refs.passwordTwo.current.value
        }

        http.post(registerData, 'register').then( res => {
            if(res.success){
                nav('/login')
            }else{
                setMessage(res.message);
                setTimeout( () => {
                    setMessage('');
                }, 1500 )
            }
        })
    }

    const handleLoginForm = (e) => {
      e.preventDefault();

      const loginData =  {
          user_name: refs.loginName.current.value,
          password: refs.loginPassword.current.value,
      }

      http.post(loginData, 'login').then( res => {
          if(res.success){
              setUser(res.user);
              nav('/')
          }else{
              setMessage(res.message);
              setTimeout( () => {
                  setMessage('');
              }, 1500 )
          }
      })
    }


    if(type === 'register'){
        return (
            <form className={'d-flex flex-column'} onSubmit={handleRegisterForm}>
                <h2>{message}</h2>
                <input type="text" ref={refs.registerName} placeholder={'User name'}/>
                <input type="password" ref={refs.passwordOne} placeholder={'Password'}/>
                <input type="password" ref={refs.passwordTwo} placeholder={'Repeat Password'}/>
                <Button type={'submit'}>Register</Button>
            </form>
        );
    }else{
        return (
            <form className={'d-flex flex-column'} onSubmit={handleLoginForm}>
                <h2>{message}</h2>
                <input type="text" ref={refs.loginName} placeholder={'User name'}/>
                <input type="password" ref={refs.loginPassword} placeholder={'Password'}/>
                <Button type={'submit'}>Login</Button>
            </form>
        );
    }

};

export default FormComponent;