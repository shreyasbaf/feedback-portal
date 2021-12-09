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
} from "./style";

const login = (props: any) => {
  return (
    <div>
      <ModalBody show={props.show}>
        <ModalContent>
          <ModelHead>
            <h2>Login</h2>
            <Close
              onClick={props.Close}
              src={require("../../assets/images/close.svg").default}
            />
          </ModelHead>
          <h5 style={{ textAlign: "center" }}>Log in to exsisting account </h5>
          <br />
          <FormWrapper>
            <Input placeholder="Email" type="text" />
            <Icons className="fas fa-envelope"></Icons>
            <Input placeholder="Password" type="password" />
            <Icons className="fas fa-lock-open"></Icons>

            <SubmitButton>
              Login
              <SubmitButtonIcon className="fas fa-arrow-right"></SubmitButtonIcon>
            </SubmitButton>
          </FormWrapper>
        </ModalContent>
      </ModalBody>
    </div>
  );
};

export default login;
