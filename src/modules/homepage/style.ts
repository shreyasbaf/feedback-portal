import styled from 'styled-components'

export const HomeContainer = styled.div`
  margin-left: 15px;
  margin-right: 15px;
  @media only screen and (min-width: 640px) {
    margin-left: 20%;
    margin-right: 20%;
  }
`

export const Card = styled.div`
  max-width: 450px;
  background: #fff;
  padding: 50px;
  margin: 75px auto;
  border-radius: 30px;
  position: relative;
`
export const Title = styled.h1`
  color: #535274;
  font-weight: bold !important;
  letter-spacing: 3px;
  margin-bottom: 25px;
  text-align: center;
  font-size: 22px;
`

export const FormWrapper = styled.div`
  width: 100%;
`

export const Input = styled.input`
  width: 100%;
  margin-bottom: 12px;
  padding: 15px 40px;
  box-sizing: border-box;
  background: #ebeef1;
  border: 0px;
  outline: none;
  border-radius: 30px;
  font-size: 14px;
  color: #535274;
  &::placeholder {
    opacity: 1;
    font-size: 14px;
  }
`

export const Select = styled.select`
  width: 100%;
  margin-bottom: 12px;
  padding: 15px;
  box-sizing: border-box;
  background: #ebeef1;
  border: 0px;
  outline: none;
  border-radius: 30px;
  cursor: pointer;
  font-size: 14px;
  color: #535274;
`

export const TextInput = styled.textarea`
  width: 100%;
  margin-bottom: 12px;
  padding: 15px 40px;
  box-sizing: border-box;
  background: #ebeef1;
  border: 0px;
  outline: none;
  border-radius: 30px;
  height: 125px;
  border-radius: 15px;
  margin-bottom: 30px;
  padding: 15px 15px;
  resize: none;
  font-size: 14px;
  color: #535274;
  &::placeholder {
    opacity: 1;
  }
`

export const Icons = styled.i`
  position: absolute;
  left: 65px;
  margin-top: 17px;
  color: #535274;
`

export const SubmitButton = styled.button`
  background: #827ffe;
  width: 100%;
  text-align: center;
  color: #fff;
  padding: 12px;
  border: none;
  border-radius: 25px;
  cursor: pointer;
`

export const SubmitButtonIcon = styled.i`
  margin-left: 10px;
  font-size: 12px;
`
