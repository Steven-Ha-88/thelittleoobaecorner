import * as React from "react"
import NavModule from "./NavModule/NavModule"
import AnimMain from "./AnimMain/AnimMain"
import Footer from "./Footer/Footer"
import { motion } from "framer-motion"
import { GlobalStyle } from "../styles/GlobalStyles"
import styled from "styled-components"

import {
  FaFacebookSquare as Facebook,
  FaInstagram as Instagram,
  FaTripadvisor as TripAdvisor,
} from "react-icons/fa"

const ContainerStyles = styled.div`
  position: relative;

  &:before {
    content: "";
    width: 1px;
    height: 60px;
    display: block;
    background: #ffe8bb;
    position: absolute;
    top: -60px;
    left: 10px;
  }

  &:after {
    content: "";
    width: 1px;
    height: 60px;
    display: block;
    background: #ffe8bb;
    position: absolute;
    top: 100%;
    left: 10px;
  }
`

const SocialStyles = styled.div`
  position: fixed;
  height: 100vh;
  margin-left: 30px;
  padding: 20px 0;
  z-index: 99;
  display: flex;
  flex-direction: column;
  justify-content: center;

  a {
    color: #7e7474;
  }

  @media only screen and (max-width: 640px) {
    margin-left: 10px;
  }

  @media only screen and (max-width: 640px) .social {
    margin: 10px 0;
    font-size: 14px;
  }

  .social {
    writing-mode: vertical-lr;
    text-orientation: mixed;
    margin: 16px 0;
    position: relative;
    font-size: 15px;
    color: #ffe8bb;
  }

  .label {
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: #ffe8bb;
  }
`

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.75 }}
      >
        <NavModule />
        <SocialStyles>
          <ContainerStyles>
            <div className="social label">
              <span>Follow Us</span>
            </div>
            <div className="social">
              <a href="https://www.instagram.com/thelittleoobaecorner/">
                <Instagram
                  style={{
                    width: "1.3rem",
                    height: "1.3rem",
                    color: "#ffe8bb",
                  }}
                />
              </a>
            </div>
            <div className="social">
              <a>
                <TripAdvisor
                  style={{
                    width: "1.3rem",
                    height: "1.3rem",
                    color: "#ffe8bb",
                  }}
                />
              </a>
            </div>
            <div className="social">
              <a
                style={{ color: "#ffe8bb", textDecoration: "none" }}
                href="http://www.wingsingsouthwoodford.co.uk/"
              >
                WingSing
              </a>
            </div>
          </ContainerStyles>
        </SocialStyles>
        <AnimMain>
          {children}
          <Footer />
        </AnimMain>
      </motion.div>
    </>
  )
}

export default Layout
