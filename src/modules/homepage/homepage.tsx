import { useState } from "react";

import {
  HomeContainer,
  Card,
  Title,
  FormWrapper,
  Input,
  TextInput,
  Icons,
  SubmitButton,
  SubmitButtonIcon,
} from "./style";

const Homepage = (props: any) => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<any>("");
  const [message, setMessage] = useState<string>("");

  const handleInput = (event: any, type: string) => {
    const { value } = event.target;
    console.log(value);
    if (type === "name") {
      setName(value);
    } else if (type === "email") {
      setEmail(value);
    } else {
      setMessage(value);
    }
  };

  const handleSubmit = () => {
    if (name === "" || email === "" || message === "") {
      setName("");
      setEmail("");
      setMessage("");
      alert("All fields are mandatory!");
    } else {
      const formData = { name, email, message };
      console.log(formData);
      setName("");
      setEmail("");
      setMessage("");
      alert(
        "Thank you for getting in touch! ,We appreciate your feedback. One of our colleagues will get back in touch with you soon! Have a great day!"
      );
    }
  };

  return (
    <HomeContainer>
      <Card>
        <Title>We value your feedback</Title>
        <FormWrapper>
          <Input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => handleInput(e, "name")}
          />
          <Icons className="fas fa-user"></Icons>
          <Input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => handleInput(e, "email")}
          />
          <Icons className="fas fa-envelope"></Icons>
          <TextInput
            placeholder="Message....."
            cols={30}
            rows={10}
            value={message}
            onChange={(e) => handleInput(e, "message")}
          />
          <SubmitButton onClick={handleSubmit}>
            Submit
            <SubmitButtonIcon className="fas fa-arrow-right"></SubmitButtonIcon>
          </SubmitButton>
        </FormWrapper>
      </Card>
    </HomeContainer>
  );
};
export default Homepage;
