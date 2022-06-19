import { FC } from "react";
import styled from "styled-components";

import * as imageList from "../../assets/imgList";
import { CourseItemComponentProps } from "./courseItems";

// This components is created using the map method in the CourseSlider component

export const SlideItem: FC<CourseItemComponentProps> = ({
  currCourse,
  welcomeMessage,
  description,
  classesAmount,
  classesTime,
  classes,
}) => {
  return (
    <SlideStyle>
      <span>{currCourse}</span>
      <header>
        <h1>{welcomeMessage}</h1>
        <p>{description}</p>
      </header>
      <div>
        <img src={imageList.layers} alt="Green layers icon" />
        <p>{classesAmount}</p>
        <p>{classesTime}</p>
      </div>
      <ul>
        {classes.map((i) => (
          <li>
            <span>{i.currClass}</span>
            <p>{i.title}</p>
            <div>{i.duration}</div>
          </li>
        ))}
      </ul>
    </SlideStyle>
  );
};

const SlideStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 26px 35px 47px 28px;
  font-family: "Red Hat Display", sans-serif;
  color: var(--gray);
  border: var(--gray) solid 0.5px;
  border-radius: 22px;
  width: 100%;

  /* Green block representing the current module / course */
  > span {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 36px;
    height: 39px;
    background-color: var(--green);
    color: var(--black);
    font-size: 14px;
    font-weight: 900;
  }

  /* Container with welcoming message and description*/
  header {
    h1 {
      color: var(--white);
      font-size: 21px;
      margin-bottom: 12px;
    }

    p {
      font-size: 14px;
    }
  }

  /* Container telling amount of classes */
  div {
    display: flex;
    align-items: center;

    img {
      margin-right: 14px;
    }

    p {
      font-weight: 600;

      &:first-of-type {
        color: var(--green);
      }
    }
  }

  /* Ul containing the classes */
  ul {
    li {
      display: flex;
      align-items: center;
      gap: 22px;
      margin-top: 15px;

      span {
        color: var(--green);
      }

      p {
        width: 194px;
      }

      div {
        color: #a4a4a4;
      }
    }
  }
`;
