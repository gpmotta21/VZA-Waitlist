import { FC, useEffect, useState } from "react";
import InputMask from "react-input-mask";
import styled from "styled-components";

import { validation } from "./validation";
import * as API from "../../../api/api";
import { FormFooter } from "./FormFooter";

export interface IFormData {
  name: string;
  email: string;
  phone?: string;
}

export const Form: FC = () => {
  const [formData, setFormData] = useState<IFormData>({} as IFormData),
    [formErrors, setFormErrors] = useState<IFormData>({} as IFormData),
    [submit, setSubmit] = useState<boolean>(false),
    [loading, setLoading] = useState<boolean>(false),
    [success, setSuccess] = useState<boolean | undefined>(undefined),
    mask = "(99) 99999-9999";

  const getValues = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormErrors(validation(formData));
    setSubmit(true);
  };

  // If there are any errors and the user attempted to submit the form data,
  // this useEffect will execute the API call.
  // Since the backend is running on localhost, I added a setTimeout to make the request,
  // thus making the transition between the Loading component and the submit button nicer.
  useEffect(() => {
    const fetchData = async () => {
      try {
        await API.sendFormData("/sendData", formData);
        setLoading(false);
        setSuccess(true);
      } catch (err) {
        setLoading(false);
        setSuccess(false);
        console.log(err);
      }
    };

    let timeout: NodeJS.Timeout;

    if (!Object.keys(formErrors).length && submit) {
      setLoading(true);

      timeout = setTimeout(() => fetchData(), 1500);
    }

    return () => clearTimeout(timeout);
  }, [formErrors]);

  // Turning success state back to false after a few seconds
  useEffect(() => {
    let timeout: NodeJS.Timeout;

    timeout = setTimeout(() => setSuccess(undefined), 3000);

    return () => clearTimeout(timeout);
  }, [success]);

  return (
    <FormStyle onSubmit={(e) => handleSubmit(e)}>
      <Label error={formErrors.name && formErrors.name}>
        <input
          name="name"
          onChange={(e) => getValues(e)}
          placeholder="Nome"
          maxLength={40}
        />
        <p>{formErrors.name && formErrors.name}</p>
      </Label>
      <Label error={formErrors.email && formErrors.email}>
        <input
          name="email"
          onChange={(e) => getValues(e)}
          placeholder="E-mail"
          maxLength={40}
        />
        <p>{formErrors.email && formErrors.email}</p>
      </Label>
      <Label error={formErrors.phone && formErrors.phone}>
        <InputMask
          name="phone"
          onChange={(e) => getValues(e)}
          placeholder="Whatsapp (opcional)"
          mask={mask}
          value={formData.phone}
        />
        <p>{formErrors.phone && formErrors.phone}</p>
      </Label>
      <FormFooter loading={loading} success={success} />
    </FormStyle>
  );
};

const FormStyle = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-top: 20px;

  input,
  button {
    border-radius: 7px;
  }
`;

interface LabelProps {
  error: string | undefined;
}

const Label = styled.label<LabelProps>`
  input {
    width: 100%;
    height: 39px;
    padding: 10px 16px;
    border: ${({ error }) => (error ? "red solid .5px" : "none")};
    outline: none;
    background: #d9d9d9;
  }

  p {
    font-size: 12px;
    color: red;
    font-weight: 900;
    min-height: 16px;
  }
`;
