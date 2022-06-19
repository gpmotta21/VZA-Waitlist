import { FC } from "react";
import styled from "styled-components";

import { Item } from "./Item";
import { itemsArray } from "./ItemsArray";

export const Details: FC = () => {
  return (
    <DetailsStyle id="situation">
      <header>
        <h1>Você, preparado para,</h1>
        <h1>qualquer situação</h1>
      </header>
      <ItemsGrid>
        {itemsArray.map((i, key) => (
          <Item icon={i.icon} description={i.description} key={key} />
        ))}
      </ItemsGrid>
    </DetailsStyle>
  );
};

const DetailsStyle = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 297px;
  margin-top: 55px;
  gap: 45px;
  font-family: termina, sans-serif;

  header {
    font-size: 18px;
    color: var(--white);
    text-align: center;

    h1:last-of-type {
      color: var(--green);
    }
  }
`;

const ItemsGrid = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 28px;
  font-family: "Red Hat Display", sans-serif;
`;
