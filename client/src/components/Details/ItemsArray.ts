import { ItemComponentProps } from "./Item";
import * as imageList from "../../assets/imgList";

export const itemsArray: ItemComponentProps[] = [
  { icon: imageList.bulb, description: "Startups (Valuation por Múltiplos)" },
  {
    icon: imageList.chart,
    description: "Empresas em crescimento e maturação (Fluxo de Caixa Descontado",
  },
  {
    icon: imageList.graph,
    description: "Empresas maduras (Modelo de Dividendo Descontado",
  },
  {
    icon: imageList.cog,
    description: "Empresas em Reestruturação (turn-around)",
  },
];
