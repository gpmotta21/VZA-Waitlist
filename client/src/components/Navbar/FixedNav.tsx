import { FC, useState } from "react";
import styled from "styled-components";

import { AnchorGroup } from "./AnchorGroup";
import * as imgList from "../../assets/imgList";
import { useNavDetection } from "../../hooks/useNavDetection";

export const FixedNav: FC = () => {
  const { scrollingTop, hasScrolled } = useNavDetection(),
    [showAnchors, setShowAnchors] = useState<boolean>(false);

  return (
    <FixedNavStyle>
      <Nav showNav={scrollingTop} changeColor={hasScrolled} showAnchors={showAnchors}>
        <img src={imgList.varosLogo} alt="Varos logo" />
        <AnchorGroup
          showAnchors={showAnchors}
          showNav={scrollingTop}
          setShowAnchors={setShowAnchors}
        />
        <button onClick={() => setShowAnchors(!showAnchors)}>
          <img src={imgList.navToggle} alt="Navbar toggle button" />
        </button>
      </Nav>
    </FixedNavStyle>
  );
};

const FixedNavStyle = styled.nav`
  position: fixed;
  width: 375px;
  z-index: 10;

  a {
    font-family: "Red Hat Display", sans-serif;
    font-size: 18px;
  }
`;

interface NavProps {
  changeColor: boolean;
  showNav: boolean;
  showAnchors: boolean;
}

const Nav = styled.div<NavProps>`
  display: flex;
  justify-content: space-between;
  padding: 20px 34px;
  transition: all 0.5s ease-in-out;

  transform: ${({ showNav }) => (showNav ? "translateY(0)" : "translateY(-100%)")};

  background-color: ${({ changeColor, showAnchors }) =>
    (changeColor || showAnchors) && "#242323"};
`;
