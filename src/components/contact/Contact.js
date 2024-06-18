import React from 'react'
import styled from 'styled-components'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Snackbar } from '@mui/material';

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
position: relative;
z-index: 1;
align-items: center;
@media (max-width: 960px) {
    padding: 0px;
}
`

const Wrapper = styled.div`
position: relative;
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: column;
width: 100%;
max-width: 1350px;
padding: 0px 0px 80px 0px;
gap: 12px;
@media (max-width: 960px) {
    flex-direction: column;
}
`

const Title = styled.div`
font-size: 42px;
text-align: center;
font-weight: 600;
margin-top: 20px;
  color: #000000;
  @media (max-width: 768px) {
      margin-top: 12px;
      font-size: 32px;
  }
`;

const Desc = styled.div`
    font-size: 18px;
    text-align: center;
    max-width: 600px;
    color: #000000;
    @media (max-width: 768px) {
        margin-top: 12px;
        font-size: 16px;
    }
`;


const ContactForm = styled.form`
  width: 95%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  padding: 32px;
  border-radius: 16px;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  margin-top: 28px;
  gap: 12px;
  @media (max-width: 640px) {
    margin-top: 5px;
    font-size: 16px;
  }
`

const ContactTitle = styled.div`
  font-size: 24px;
  margin-bottom: 6px;
  font-weight: 600;
  color: #000000;
`

const ContactInput = styled.input`
  flex: 1;
  background-color: transparent;
  border: 1px solid #000000;
  outline: none;
  font-size: 18px;
  color: #000000;
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid #000000;
  }
`

const ContactInputMessage = styled.textarea`
  flex: 1;
  background-color: transparent;
  border: 1px solid #000000;
  outline: none;
  font-size: 18px;
  color: #000000;
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid #000000;
  }
`

const ContactButton = styled.input`
  width: 100%;
  text-decoration: none;
  text-align: center;
  background: #333333;
  border: none;
  cursor: pointer;
  padding: 13px 16px;
  margin-top: 2px;
  border-radius: 12px;
  color: #ffffff;
  font-size: 18px;
  font-weight: 600;
`



const Contact = () => {

  //hooks
  const [snackbarData, setSnackbarData] = React.useState({
    open: false,
    message: "",
    severity: "success", 
  });
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const email = form.current.from_email.value.trim();
    const name = form.current.from_name.value.trim();
    const subject = form.current.subject.value.trim();
    const message = form.current.message.value.trim();
  
    if (!email || !name || !subject || !message) {
      console.log("Please fill in all fields");
      setSnackbarData({
        open: true,
        message: "Please fill in all fields",
        severity: "error",
      });
      return;
    }

    emailjs.sendForm('service_6bvr9gc', 'template_g3uute6', form.current, 'IiOYO_V0t9iMPjrhM')
    .then(
      (result) => {
        setSnackbarData({
          open: true,
          message: "Email sent successfully!",
          severity: "success",
        });
        form.current.reset();
      },
      (error) => {
        console.log(error.text);
        setSnackbarData({
          open: true,
          message: "Error sending email. Please try again later.",
          severity: "error",
        });
      }
    );
  }



  return (
    <Container>
      <Wrapper>
        <Title>Contact</Title>
        <Desc>Feel free to reach out to me for any questions or opportunities!</Desc>
        <ContactForm ref={form} onSubmit={handleSubmit}>
          <ContactTitle>Email Me 🚀</ContactTitle>
          <ContactInput placeholder="Your Email" name="from_email" />
          <ContactInput placeholder="Your Name" name="from_name" />
          <ContactInput placeholder="Subject" name="subject" />
          <ContactInputMessage placeholder="Message" rows="4" name="message" />
          <ContactButton type="submit" value="Send" />
        </ContactForm>
        <Snackbar
          open={snackbarData.open}
          autoHideDuration={6000}
          onClose={() => setSnackbarData({ ...snackbarData, open: false })}
          message={snackbarData.message}
          severity={snackbarData.severity}
        />
      </Wrapper>
    </Container>
  )
}

export default Contact