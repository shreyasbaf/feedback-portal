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

const Signup = (props: any) => {
  return (
    <div>
      <ModalBody show={props.show}>
        <ModalContent>
          <ModelHead>
            <h2>Signup</h2>
            <Close
              onClick={props.Close}
              src={require("../../assets/images/close.svg").default}
            />
          </ModelHead>
          <h5 style={{ textAlign: "center" }}>Create a new account </h5>
          <br />
          <FormWrapper>
            <Input placeholder="Email" type="text" />
            <Icons className="fas fa-envelope"></Icons>
            <Input placeholder="Password" type="password" />
            <Icons className="fas fa-lock-open"></Icons>

            <SubmitButton>
              Signup
              <SubmitButtonIcon className="fas fa-arrow-right"></SubmitButtonIcon>
            </SubmitButton>
          </FormWrapper>
        </ModalContent>
      </ModalBody>
    </div>
  );
};

export default Signup;
