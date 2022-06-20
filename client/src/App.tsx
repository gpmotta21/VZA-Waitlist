import { FC, useEffect } from "react";
import styled, { createGlobalStyle } from "styled-components";
import Aos from "aos";
import "aos/dist/aos.css";

import { applicationBg } from "./assets/imgList";
import { Footer } from "./components/Footer";
import { Homepage } from "./components/Homepage/Homepage";
import { Courses } from "./components/Courses/Courses";
import { FixedNav } from "./components/Navbar/FixedNav";
import { Details } from "./components/Details/Details";

const App: FC = () => {
  // UseEffect for the Animation on Scroll lib
  useEffect(() => {
    Aos.init({ offset: 100, once: false });
  }, []);

  return (
    <AppStyle>
      <GlobalStyle />
      <FixedNav />
      <main>
        <Homepage />
        <Details />
        <Courses />
      </main>
      <Footer />
    </AppStyle>
  );
};

export default App;

const AppStyle = styled.div`
  position: relative;
  width: 375px;
  height: auto;
  margin: 0 auto;
  background-color: var(--black);
  background-image: url(${applicationBg});
  background-repeat: no-repeat;
  overflow-x: hidden;

  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 118px;
    overflow: hidden;
  }
`;

const GlobalStyle = createGlobalStyle`
  :root{
  --black: rgb(19, 19, 19);
  --white: #E3E3E3;
  --gray: #C0BDBD;
  --green: #00F729;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  button, a, li{
    all: unset;
  }
  
  button, a{
    cursor: pointer;
  }
`;
