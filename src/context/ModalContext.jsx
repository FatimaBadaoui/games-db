/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const ModalContext = createContext();

const ModalProvider = ({ children }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState({});

  return (
    <ModalContext.Provider
      value={{ modalIsOpen, setIsOpen, modalContent, setModalContent }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
