import { FC } from "react";
import styled from "styled-components";

import * as imgList from "../assets/imgList";

export const Footer: FC = () => {
  return (
    <FooterStyle>
      <img src={imgList.varosLogo} alt="Varus logo" />
    </FooterStyle>
  );
};

const FooterStyle = styled.footer`
  display: flex;
  justify-content: center;
  padding: 77px 0;
`;
