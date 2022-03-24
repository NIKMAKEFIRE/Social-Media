import React from 'react'
import { Field } from 'redux-form'
import { reduxForm } from 'redux-form'

const LoginForm = (props) => {
  return (
    <>
      <form onSubmit={props.handleSubmit}>
        <div>
          <Field name={"login"} component={"input"} placeholder={"Логин"} />
        </div>
        <div>
          <Field name={"password"} component={"input"} placeholder={"Пароль"} />
        </div>
        <div className="form-group">
          <Field className="form-checkbox" name={"rememberMe"} component={"input"} type={"checkbox"} />
          <h4>Remember Me</h4>
        </div>
        <button>Войти</button>
      </form>
    </>
  )
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

const Login = () => {

  const onSubmit = (data) => {
    console.log(data);
  }

  return (
    <>
      <h1>Вход</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </>
  )
}


export default Login