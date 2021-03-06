import styled from "styled-components"

export const BasicTextModuleStyles = styled.section`
  margin: 0px 0px 0px 0px;
  text-align: center;
  padding: 0 0 0 0;
  width: 100vw;
  .text {
    width: 100%;
    height: 50vh;
    padding: 50px 0;
    background-color: #b7c1f6;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column;

    @media (max-width: 720px) {
      height: unset;
    }

    .title {
      font-size: 60px;
      font-weight: 700;
      color: #5c5c5c;
      line-height: 75px;
      font-family: "brandon_bold", sans-serif;
    }

    .line {
      width: 80px;
      height: 1px;
      background-color: #ffc401;
      margin: 30px auto;
    }

    .content {
      max-width: 75%;
      margin: 0 auto 0;
      font-size: 20px;
    }
  }

  .image {
    width: 70%;
    @media (max-width: 750px) {
      width: 100%;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`
