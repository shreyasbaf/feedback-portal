import {useState} from 'react'
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

const Login = (props: any) => {
  const [email, setEmail] = useState<string>('')
  const [passWord, setPassWord] = useState<string>('')

  const submitLoginForm = (e: any) => {
    e.preventDefault()
  }
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
          <FormWrapper onSubmit={(e) => submitLoginForm(e)}>
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

            <SubmitButton type='submit'>
              Login
              <SubmitButtonIcon className='fas fa-arrow-right'></SubmitButtonIcon>
            </SubmitButton>
          </FormWrapper>
        </ModalContent>
      </ModalBody>
    </div>
  )
}

export default Login
