import { FC } from "react";
import { ClipLoader } from "react-spinners";
import styled from "styled-components";

interface ComponentProps {
  loading: boolean;
  success: boolean | undefined;
}

export const FormFooter: FC<ComponentProps> = ({ loading, success }) => {
  const handleElement = () => {
    if (loading) {
      return <ClipLoader color={"#ffffff"} loading={loading} size={44} />;
    } else if (success) {
      return <Message className="success">Formulário enviado</Message>;
    } else if (success === false) {
      return <Message className="fail">Tente novamente mais tarde</Message>;
    } else {
      return <button type="submit">Entrar na lista</button>;
    }
  };
  return <SuccessStyle>{handleElement()}</SuccessStyle>;
};

const SuccessStyle = styled.div`
  button {
    background-color: var(--black);
    border: 0.5px solid var(--green);
    text-align: center;
    color: #eeeeee;
    font-size: 14px;
    padding: 12px 40px;
    border-radius: 7px;
  }
`;

const Message = styled.span`
  text-align: center;
  font-size: 11px !important;
  padding: 12px 40px;
  border-radius: 7px;

  &.success {
    background-color: var(--green);
    color: var(--black);
  }

  &.fail {
    background-color: red;
    color: var(--black) !important;
  }
`;
