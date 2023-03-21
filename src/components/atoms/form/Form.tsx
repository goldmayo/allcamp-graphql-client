import React, { FC } from "react";

interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  formRef?: React.MutableRefObject<HTMLFormElement | null>;
  method: "post" | "get" | "dialog";
  className: string;
  children: React.ReactNode;
  onSubmit: (e: React.UIEvent<HTMLFormElement>) => void;
}

const Form: FC<FormProps> = ({ formRef, method, className, children, onSubmit, ...props }) => {
  return (
    <form role="form" ref={formRef} method={method} className={className} onSubmit={onSubmit}>
      {children}
    </form>
  );
};

export default Form;
