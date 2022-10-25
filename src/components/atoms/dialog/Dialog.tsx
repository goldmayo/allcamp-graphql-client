import { forwardRef } from "react";

interface ModalProps {
  children: React.ReactNode;
  className: string;
}

const Modal = forwardRef<HTMLDialogElement, ModalProps>(({ className, children, ...props }, ref) => {
  const handleClose = (e: React.MouseEvent<HTMLDialogElement>) => {
    // @ts-ignore
    if (e.target === ref.current) {
      // @ts-ignore
      ref.current?.close();
    }
  };

  return (
    <dialog
      role={"dialog"}
      ref={ref}
      className={`${className} p-0 w-full backdrop:bg-black backdrop:opacity-30`}
      onClick={handleClose}
      {...props}
    >
      {children}
    </dialog>
  );
});

Modal.displayName = "Modal";

export default Modal;

// <dialog
//   aria-labelledby="dialog-personal-info-heading"
//   ref={modalRef}
// >
//   <h3 id="dialog-personal-info-heading">Personal Information</h3>
//   <form method="dialog"></form>
// </dialog>
