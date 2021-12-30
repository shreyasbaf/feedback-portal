import {useEffect, useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { userSignUP } from '../../Redux/User/actions'
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

const Signup = (props: any) => {
  const dispatch = useDispatch();
  const {signupSuccess, signupLoading} = useSelector(
    (state: any) => state.user
  )
  const [fullName, setFullName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [passWord, setPassWord] = useState<string>('')

  const submitSignUpForm = (e: any) => {
    if (fullName === '' || email === '' || passWord === '') {
      alert('All fields are mandatory!')
    } else {
      const data = {name:fullName, email, password:passWord}
      dispatch(userSignUP(data))
    }
  }

  useEffect(() => {
    if (signupSuccess === 'success') {
      props.Close()
      toast.success('Acount Created Successfully!')
      setFullName('')
      setEmail('')
      setPassWord('')
    } else {
      toast.dismiss()
    }
  }, [signupSuccess])
  return (
    <div>
      <ModalBody show={props.show}>
        <ModalContent>
          <ModelHead>
            <h2>Signup</h2>
            <Close
              onClick={props.Close}
              src={require('../../assets/images/close.svg').default}
            />
          </ModelHead>
          <h5 style={{textAlign: 'center'}}>Create a new account </h5>
          <br />
          <FormWrapper>
            <Input
              placeholder='Full Name'
              type='text'
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
            <Icons className='fas fa-user'></Icons>
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
            <SubmitButton onClick={submitSignUpForm} disabled={signupLoading}>
            {signupLoading ? 'Submitting...' : 'Submit'}
            <SubmitButtonIcon
              className={
                signupLoading ? 'fas fa-spinner' : 'fas fa-arrow-right'
              }
            ></SubmitButtonIcon>
          </SubmitButton>
          </FormWrapper>
        </ModalContent>
      </ModalBody>
    </div>
  )
}

export default Signup
