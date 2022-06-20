import { FC } from "react";
import styled from "styled-components";

import * as imgList from "../../assets/imgList";

export const Introduction: FC = () => {
  return (
    <IntroductionStyle data-aos="fade-left" data-aos-duration="500">
      <img src={imgList.valuation} alt="Valuation 2.0 by Varos" />
      <h1>Domine o método mais usado no mundo para encontrar ações baratas.</h1>
      <p>
        Bancos, fundos, investidores. Todos eles usam o Valuation pra fechar bons
        negócios.
      </p>
    </IntroductionStyle>
  );
};

const IntroductionStyle = styled.div`
  display: flex;
  flex-direction: column;

  img {
    width: 255px;
    height: 36.18px;
  }

  h1 {
    font-family: termina, sans-serif;
    font-size: 21px;
    color: var(--white);
    margin: 30px 0 10px 0;
  }

  p {
    width: 253px;
    height: 62px;
    color: var(--gray);
    font-family: "Red Hat Display", sans-serif;
  }
`;
