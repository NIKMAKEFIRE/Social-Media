import React from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Field } from 'redux-form'
import { reduxForm } from 'redux-form'
import { login } from '../../redux/auth-reducer'
import { required } from '../../utils/validators/validators'
import { Input } from '../Common/FormsControls/FormsControls'

const LoginForm = (props) => {

  return (
    <>
      <form onSubmit={props.handleSubmit}>
        <div>
          <Field
            name={"email"}
            component={Input}
            validate={[required]}
            placeholder={"Логин"} />
        </div>
        <div>
          <Field
            name={"password"}
            component={Input}
            validate={[required]}
            type={"password"}
            placeholder={"Пароль"} />
        </div>
        <div className="form-group">
          <Field className="form-checkbox" name={"rememberMe"} component={Input} type={"checkbox"} />
          <h4>Remember Me</h4>
        </div>

        {props.error && <div className="form-cont">
          <div className="form-error">
            {props.error}
          </div>
        </div>
        }

        <button>Войти</button>
      </form>
    </>
  )
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

const Login = (props) => {

  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe)
  }

  if (props.isAuth) {
    return <Redirect to={"/profile"} />
  }

  return (
    <>
      <h1>Вход</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </>
  )
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, { login })(Login)