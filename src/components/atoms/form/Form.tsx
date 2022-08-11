import React, { FC } from "react";

interface FormProps {
  formRef: {
    current: HTMLFormElement | null;
  };
  method: "post" | "get";
  className: string;
  children: React.ReactNode;
  onSubmit: (e: React.MouseEvent<HTMLFormElement, MouseEvent>) => void;
}

const Form: FC<FormProps> = ({ formRef, method, className, children, onSubmit }) => {
  return (
    <form ref={formRef} method={method} className={className} onSubmit={onSubmit}>
      {children}
    </form>
  );
};

export default Form;
