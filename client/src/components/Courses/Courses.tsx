import { FC } from "react";
import styled from "styled-components";

import * as imageList from "../../assets/imgList";
import { SliderCotainer } from "./SliderContainer";

// I noticed that the Modules segment design has arrow buttons under the Course card
// , so I imagined it should probably be some sort of Slider or Carousel.
// That being said I implemented my own Slider on the SliderContainer component

export const Courses: FC = () => {
  return (
    <CoursesStyle id="modules">
      <header>
        <h1>Todos os módulos</h1>
        <img src={imageList.arrowBox} alt="White arrow box" />
      </header>
      <SliderCotainer />
    </CoursesStyle>
  );
};

const CoursesStyle = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;
  margin-top: 100px;

  > header {
    display: flex;
    justify-content: center;
    gap: 15px;
    width: 302px;

    h1 {
      font-size: 21px;
      font-family: termina, sans-serif;
      color: var(--white);
    }
  }
`;
