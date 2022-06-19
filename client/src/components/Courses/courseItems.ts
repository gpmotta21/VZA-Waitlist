export interface CourseItemComponentProps {
  currCourse: string;
  welcomeMessage: string;
  description: string;
  classesAmount: string;
  classesTime: string;

  classes: {
    currClass: string;
    title: string;
    duration: string;
  }[];
}
export const courseItems: CourseItemComponentProps[] = [
  {
    currCourse: "01",
    welcomeMessage: "Bem vindo ao curso",
    description:
      "Tudo que você precisa saber sobre a metodologia, agenda e comunidade, assim como nossos canais de contato.",
    classesAmount: "04 aulas",
    classesTime: "-6min",

    classes: [
      {
        currClass: "01",
        title: "O que você precisa saber antes de começar",
        duration: "2min",
      },
      {
        currClass: "02",
        title: "Agenda do Curso",
        duration: "2min",
      },
      {
        currClass: "03",
        title: "Informações e Grupo",
        duration: "1min",
      },
      {
        currClass: "04",
        title: "Canais de suporte e contato",
        duration: "1min",
      },
    ],
  },

  {
    currCourse: "01",
    welcomeMessage: "Bem vindo ao curso",
    description:
      "Tudo que você precisa saber sobre a metodologia, agenda e comunidade, assim como nossos canais de contato.",
    classesAmount: "04 aulas",
    classesTime: "-6min",

    classes: [
      {
        currClass: "01",
        title: "O que você precisa saber antes de começar",
        duration: "2min",
      },
      {
        currClass: "02",
        title: "Agenda do Curso",
        duration: "2min",
      },
      {
        currClass: "03",
        title: "Informações e Grupo",
        duration: "1min",
      },
      {
        currClass: "04",
        title: "Canais de suporte e contato",
        duration: "1min",
      },
    ],
  },
  {
    currCourse: "01",
    welcomeMessage: "Bem vindo ao curso",
    description:
      "Tudo que você precisa saber sobre a metodologia, agenda e comunidade, assim como nossos canais de contato.",
    classesAmount: "04 aulas",
    classesTime: "-6min",

    classes: [
      {
        currClass: "01",
        title: "O que você precisa saber antes de começar",
        duration: "2min",
      },
      {
        currClass: "02",
        title: "Agenda do Curso",
        duration: "2min",
      },
      {
        currClass: "03",
        title: "Informações e Grupo",
        duration: "1min",
      },
      {
        currClass: "04",
        title: "Canais de suporte e contato",
        duration: "1min",
      },
    ],
  },
];
