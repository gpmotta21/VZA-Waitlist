import { FC } from "react";
import { Link } from "react-scroll";
import styled from "styled-components";

interface ComponentProps {
  showNav: boolean;
  showAnchors: boolean;
  setShowAnchors: (showAnchors: boolean) => void;
}

export const AnchorGroup: FC<ComponentProps> = ({
  showNav,
  showAnchors,
  setShowAnchors,
}) => {
  const handleClick = () => {
    setShowAnchors(false);
  };

  return (
    <AnchorGroupStyle showAnchors={showAnchors} showNav={showNav}>
      <Link to="homepage" smooth={true} offset={-50} onClick={handleClick}>
        Homepage
      </Link>
      <Link to="situation" smooth={true} offset={-50} onClick={handleClick}>
        Situações
      </Link>
      <Link to="modules" smooth={true} offset={-50} onClick={handleClick}>
        Módulos
      </Link>
    </AnchorGroupStyle>
  );
};

interface AnchorGroupStyleProps {
  showAnchors: boolean;
  showNav: boolean;
}

const AnchorGroupStyle = styled.span<AnchorGroupStyleProps>`
  position: absolute;
  left: 0;
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 250px;
  color: var(--white);
  overflow: hidden;
  transition: all 0.5s ease-in-out;

  top: ${({ showAnchors, showNav }) => (showAnchors && showNav ? "100%" : "-700%")};
  background-color: ${({ showAnchors }) => showAnchors && "#242323"};
`;
