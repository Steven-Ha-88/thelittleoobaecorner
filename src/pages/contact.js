import * as React from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import Seo from "../components/SEO"
import SimpleBanner from "../components/SimpleBanner/SimpleBanner"
import styled from "styled-components"
import Button from "./../components/Button/button"

const ContactStyles = styled.div`
  display: flex;
  padding: 50px;
  grid-gap: 50px;
  gap: 50px;
  justify-content: center;
  flex-flow: column;
  align-items: center;
  width: 85%;
  margin: 0 auto;

  @media screen and (max-width: 768px) {
    grid-gap: 0px;
    gap: 0px;
    width: 100%;
    padding: 45px;
  }
`
const MessageStyles = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  grid-gap: 15px;
  gap: 15px;

  p,
  h2 {
    text-align: center;
    color: black;
  }

  h2 {
    font-size: 60px;
    font-weight: 700;
    color: #5c5c5c;
    line-height: 75px;
    font-family: "Brandon Grotesque Bold", sans-serif;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`

const FormStyles = styled.form`
  // background: #b7c1f6;
  padding: 30px;
  // border-radius: 10px;
  // box-shadow: 0 5px 10px 0 #000;
  width: 70%;

  @media screen and (max-width: 768px) {
    width: 100%;
  }

  .details {
    display: flex;
    flex-direction: column;
    grid-gap: 15px;
    gap: 15px;

    input {
      width: 100%;
      resize: none;
      padding: 10px 20px;
      outline: none;
      border: 1px solid #b7c1f6;
      background: transparent;
      color: #5c5c5c;
    }
  }

  .message {
    margin: 15px 0;

    p {
      margin-bottom: 10px;
    }
    textarea {
      width: 100%;
      resize: none;
      padding: 10px 20px;
      outline: none;
      border: 1px solid #839ef6;
      background: transparent;
      color: #5c5c5c;
    }
  }
`

const contact = () => {
  return (
    <>
      <Seo title="Contact" />
      <Layout>
        <SimpleBanner title="Enquiries">
          <StaticImage
            className="banner__image"
            src="https://imgur.com/msCKtFG.jpg"
            alt="Selfie green"
          />
        </SimpleBanner>
        <ContactStyles>
          <MessageStyles>
            <h2>Contact The Little Oobae Corner</h2>
            <p className="contact-body">
              For general enquiries, events and large orders, please use the
              contact form below or email: info@oobaecorner.co.uk For job
              opportunities, please email: job@oobaecorner.co.uk.
            </p>
          </MessageStyles>
          <FormStyles name="contact form" method="POST" data-netlify="true">
            <div class="details">
              <input type="hidden" name="form-name" value="contact-form" />
              <input type="text" name="name" placeholder="Full name" />
              <input type="text" name="email" placeholder="Email" />
              <input type="text" name="number" placeholder="Phone number" />
            </div>
            <div className="message">
              <p>Message</p>
              <textarea rows="4" name="message"></textarea>
            </div>
            <Button text="Submit" />
          </FormStyles>
        </ContactStyles>
      </Layout>
    </>
  )
}

export default contact
