import { FC, useState } from "react";
import { SlideItem } from "./SlideItem";
import { courseItems } from "./courseItems";

import * as imageList from "../../assets/imgList";
import styled from "styled-components";

export const SliderCotainer: FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0),
    direction = `${-currentSlide * 100}%`;

  const handleNext = () => {
    if (currentSlide < courseItems.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const handlePrev = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  return (
    <SliderCotainerStyle>
      <div>
        <Slider direction={direction}>
          {courseItems.map((i, key) => (
            <SlideItem
              currCourse={i.currCourse}
              welcomeMessage={i.welcomeMessage}
              description={i.description}
              classesAmount={i.classesAmount}
              classesTime={i.classesTime}
              classes={i.classes}
              key={key}
            />
          ))}
        </Slider>
      </div>
      <span>
        <button onClick={handlePrev}>
          <img src={imageList.handleLeft} alt="Left arrow" />
        </button>
        <button onClick={handleNext}>
          <img src={imageList.handleRight} alt="Right arrow" />
        </button>
      </span>
    </SliderCotainerStyle>
  );
};

const SliderCotainerStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;

  > span {
    display: flex;
    gap: 24px;
  }

  > div {
    overflow: hidden;
  }
`;

interface SliderProps {
  direction: string;
}

const Slider = styled.div<SliderProps>`
  display: flex;
  width: 350px;
  transition: all 0.7s ease-in-out;

  transform: ${({ direction }) => `translateX(${direction})`};
`;
