import { IFormData } from "./Form";

export const validation = (data: IFormData) => {
  let errors: IFormData = {} as IFormData,
    emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i,
    phoneRegex = /\(\d{2}\)\s9?\d{5}-\d{4}/g;

  if (!data.name) errors.name = "Preencha seu nome";

  if (!data.email) errors.email = "Digite seu E-mail";
  else if (!emailRegex.test(data.email)) {
    errors.email = "E-mail inválido";
  }

  if (!phoneRegex.test(data.phone!) && data.phone) {
    errors.phone = "Numero de celular inválido";
  }

  return errors;
};
