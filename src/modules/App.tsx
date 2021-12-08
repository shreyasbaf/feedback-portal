
import { useState } from 'react'
import swal from 'sweetalert';
import './styles.css'

function App() {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<any>('');
  const [message, setMessage] = useState<string>('');

  const handleInput = (event: any, type: string) => {
    const { value } = event.target;
    console.log(value);
    if (type === 'name') {
      setName(value)
    } else if (type === 'email') {
      setEmail(value)
    } else {
      setMessage(value)
    }
  }

  const handleSubmit = () => {
    if (name === '' || email === '' || message === '') {
      swal("All fields are mandatory!")
    } else {
      const formData = { name, email, message };
      console.log(formData)
      swal("Thank you for getting in touch!", "We appreciate your feedback. One of our colleagues will get back in touch with you soon! Have a great day!").then(() => {
        setName('');
        setEmail('');
        setMessage('')
      });
    }
  }

  return (
    <div>
      <Header />
      <div className="contact-us">
        <div className="title">
          <h1>We value your feedback</h1>
        </div>
        <div className="form">
          <div className="form-items">
            <input type="text" className="input" placeholder="Name" value={name} onChange={(e) => handleInput(e, 'name')} />
            <i className="fas fa-user"></i>
          </div>
          <div className="form-items">
            <input type="text" className="input" placeholder="Email" value={email} onChange={(e) => handleInput(e, 'email')} />
            <i className="fas fa-envelope"></i>
          </div>
          <div className="form-items">
            <textarea
              className="input message" cols={30} rows={10}
              placeholder="Message....."
              value={message}
              onChange={(e) => handleInput(e, 'message')}
            ></textarea>
          </div>
        </div>
        <div className="btn" onClick={handleSubmit}>
          Submit
          <i className="fas fa-arrow-right"></i>
        </div>
      </div>
      <Footer />
    </div >
  );
}

export default App;


const Header = () => {
  return (
    <div className='header'>
      <span className='header-logo-container'>
        <img
          className='header-logo'
          src={
            require("../assets/images/logo.svg")
              .default
          }
          alt="logo"
        />
      </span>
    </div>
  );
}

const Footer = () => {
  return (
    <footer>
      <p>Copyright @ Rapid Innovation Rights Reserved</p>
    </footer>
  )
}
