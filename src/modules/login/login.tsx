import {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import toast from 'react-hot-toast'

import {
  ModalBody,
  ModalContent,
  ModelHead,
  Close,
  FormWrapper,
  Input,
  SubmitButtonIcon,
  SubmitButton,
  Icons,
} from './style'
import { userLogin } from '../../Redux/User/actions'

const Login = (props: any) => {
  const dispatch = useDispatch();
  const {loginSuccess, loginLoading,loginFail} = useSelector(
    (state: any) => state.user
  )
  const [email, setEmail] = useState<string>('')
  const [passWord, setPassWord] = useState<string>('')

  const submitLoginForm = (e: any) => {
    e.preventDefault();
    if ( email === '' || passWord === '') {
      alert('All fields are mandatory!')
    } else {
      const data = {email, password:passWord}
      dispatch(userLogin(data))
    }
  }

  useEffect(() => {
    if (loginSuccess !== '') {
      props.Close()
      toast.success('Successfully Logged In!')
      setEmail('')
      setPassWord('')

    } else if (loginFail === 'error' ){
      props.Close()
      toast.error('Error Logging In!')
    } 
    else {
      toast.dismiss()
    }
  }, [loginSuccess,loginFail])

  return (
    <div>
      <ModalBody show={props.show}>
        <ModalContent>
          <ModelHead>
            <h2>Login</h2>
            <Close
              onClick={props.Close}
              src={require('../../assets/images/close.svg').default}
            />
          </ModelHead>
          <h5 style={{textAlign: 'center'}}>Log in to exsisting account </h5>
          <br />
          <FormWrapper onSubmit={submitLoginForm}>
            <Input
              placeholder='Email'
              type='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Icons className='fas fa-envelope'></Icons>
            <Input
              placeholder='Password'
              type='password'
              value={passWord}
              onChange={(e) => setPassWord(e.target.value)}
            />
            <Icons className='fas fa-lock-open'></Icons>

            <SubmitButton type="submit" disabled={loginLoading}>
            {loginLoading ? 'Logging In...' : 'Login'}
            <SubmitButtonIcon
              className={
                loginLoading ? 'fas fa-spinner' : 'fas fa-arrow-right'
              }
            ></SubmitButtonIcon>
          </SubmitButton>
          </FormWrapper>
        </ModalContent>
      </ModalBody>
    </div>
  )
}

export default Login
