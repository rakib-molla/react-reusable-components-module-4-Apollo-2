import { createPortal } from "react-dom";
import cn from "../../utils/cn";
import {
  MouseEvent,
  ReactNode,
  createContext,
  useContext,
  useRef,
} from "react";

const ModalContext = createContext<TModalContext | null>(null);

type TModalContext = {
  onClose: () => void;
};

type TModal = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
};

type TCloseButton = {
  children?: ReactNode;
};

type THeader = TCloseButton;

const Modal = ({ isOpen, onClose, children }: TModal) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleOutsideClose = (e: MouseEvent) => {
    if (!containerRef?.current?.contains(e.target as Node)) {
      onClose();
    }
  };

  return createPortal(
    <ModalContext.Provider value={{ onClose }}>
      <div
        className={cn(
          "fixed flex items-center justify-center inset-0 bg-gray-700/70 invisible z-[999]",
          {
            visible: isOpen,
          }
        )}
        onClick={handleOutsideClose}
      >
        <div ref={containerRef} className="bg-white max-w-sm rounded-md p-4">
          {" "}
          {children}
        </div>
      </div>
    </ModalContext.Provider>,
    document.getElementById("portal") as Element
  );
};

const closeButton = ({ children }: TCloseButton) => {
  const { onClose } = useContext(ModalContext) as TModalContext;

  return (
    <button onClick={onClose}>
      {children ? (
        children
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={4}
          stroke="currentColor"
          className="size-6 bg-red-500 p-0.5 text-white rounded-md"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>
      )}
    </button>
  );
};
Modal.CloseButton = closeButton;

const Header = ({ children }: THeader) => {
  return (
    <div className="flex w-full items-center justify-between mb-3">
      {children}
    </div>
  );
};
Modal.Header = Header;

export default Modal;
