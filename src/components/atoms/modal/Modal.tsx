import { forwardRef } from "react";
import { MdClose } from "react-icons/md";
import Button from "@/components/atoms/button/Button";
import FlexBox from "@/components/atoms/flexbox/FlexBox";
import Span from "@/components/atoms/span/Span";

interface ModalProps {
  children: React.ReactNode;
  className: string;
  title: string;
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
      className={`${className} p-0 w-3/4 backdrop:bg-black backdrop:opacity-30 rounded-2xl`}
      onClick={handleClose}
      {...props}
    >
      <FlexBox className="items-center justify-between py-2 pl-8 pr-6 border-b border-primary-bordergray text-headline3">
        <Span className="font-bold">{props.title}</Span>
        <Button
          type="button"
          size="xs"
          className=""
          onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
            //@ts-ignore
            ref.current.close();
          }}
          aria-label="Close"
        >
          <MdClose className="p-0" size={"30px"} />
        </Button>
      </FlexBox>
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
