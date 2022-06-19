import { FC } from "react";
import styled from "styled-components";

export interface ItemComponentProps {
  icon: string;
  description: string;
}

export const Item: FC<ItemComponentProps> = ({ icon, description }) => {
  return (
    <ItemStyle>
      <img src={icon} alt="Details icon" />
      <p>{description}</p>
    </ItemStyle>
  );
};

const ItemStyle = styled.div`
  width: 132px;
  text-align: center;

  p {
    font-size: 12px;
    color: #eeeeee;
    margin-top: 20px;
  }
`;
