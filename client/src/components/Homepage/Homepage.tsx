import { FC } from "react";
import styled from "styled-components";

import { Form } from "./Form/Form";
import { Introduction } from "./Introduction";
import { Rating } from "./Rating";
import * as imgList from "../../assets/imgList";

export const Homepage: FC = () => {
  return (
    <HomepageStyle id="homepage">
      <Introduction />
      <FormWrapper data-aos="fade-left" data-aos-duration="700">
        <span>Entre na lista para ser avisado no lançamento do curso</span>
        <Form />
      </FormWrapper>
      <Rating />
    </HomepageStyle>
  );
};

const HomepageStyle = styled.section`
  width: 308px;
`;

const FormWrapper = styled.div`
  position: relative;
  width: 297px;
  padding: 25px 28px 29px 28px;
  margin-top: 35px;
  background: radial-gradient(
    97.57% 210.75% at 0.9% 2.98%,
    rgba(112, 112, 112, 0.4) 0%,
    rgba(255, 255, 255, 0.1) 100%
  );
  backdrop-filter: blur(42px);
  border-radius: 22px;
  font-family: "Red Hat Display", sans-serif;

  /* Green vector background */
  :before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${imgList.formVector});
    background-repeat: no-repeat;
    background-position: 48px 43px;
    background-size: 210px 162.8px;
    z-index: -3;
    filter: blur(26px);
  }

  span {
    font-size: 14px;
    font-weight: 600;
    color: white;
  }
`;
