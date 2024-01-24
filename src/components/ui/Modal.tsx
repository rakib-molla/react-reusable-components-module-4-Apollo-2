import { createPortal } from "react-dom";
import cn from "../../utils/cn";
import {MouseEvent, useRef } from "react";

const Modal = ({ isOpen, onClose, children }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleOutsideClose = (e: MouseEvent) => {
    if (!containerRef?.current?.contains(e.target as Node)) {
      onClose();
    }
  };

  return createPortal(
    <div
      className={cn(
        "fixed flex items-center justify-center inset-0 bg-gray-700/70 invisible z-[999]",
        {
          visible: isOpen,
        }
      )}
      onClick={handleOutsideClose}
    >
      <div ref={containerRef} className="bg-white max-w-sm rounded-md">
        {" "}
        {children}
      </div>
    </div>,
    document.getElementById("portal") as Element
  );
};

const closeButton = ()=>{
   return <div>Close Button</div>
}
Modal.CloseButton = closeButton;

export default Modal;
