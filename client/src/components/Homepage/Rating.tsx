import styled from "styled-components";

import * as imgList from "../../assets/imgList";

export const Rating = () => {
  return (
    <RatingStyle>
      <p>Avaliação média do curso</p>
      <img src={imgList.stars} alt="Avaliação em estrelas" />
      <p>NPS: 83.6</p>
    </RatingStyle>
  );
};

const RatingStyle = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  margin-top: 18px;
  color: var(--white);
  font-family: "Red Hat Display", sans-serif;
`;
