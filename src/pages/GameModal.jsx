import Modal from "react-modal";
import { ModalContext } from "../context/ModalContext.jsx";
import { useContext } from "react";

const GameModal = () => {
  const { modalIsOpen, setIsOpen, modalContent } = useContext(ModalContext);

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setIsOpen(false)}
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.792)",
          },
          content: {
            backgroundColor: "#011e39",
            width: "70%",
            height: "500px",
            margin: "auto",
          },
        }}
      >
        <div className="flex justify-end">
          <p
            className="px-1 font-bold bg-red-300 rounded-sm text-red-600 cursor-pointer hover:scale-110 transition-all duration-300 ease-in"
            onClick={() => setIsOpen(false)}
          >
            X
          </p>
        </div>
        <h2 className="font-bold text-[30px] text-whitish">
          {modalContent.name}
        </h2>
        <p className="mt-2 text-whitish">
          <span className="font-bold">Release Date: </span>
          {modalContent.released}
        </p>
        <div className="mt-4 flex gap-2 flex-wrap">
          {modalContent.tags?.map(
            (tag) =>
              tag.language === "eng" && (
                <p
                  key={tag.id}
                  className="bg-blue-500 p-2 rounded-xl text-whitish"
                >
                  {tag.name}
                </p>
              )
          )}
        </div>
        <div className="mt-7 grid grid-cols-4 gap-3">
          {modalContent.short_screenshots?.map((screenshot) => (
            <img
              key={screenshot.id}
              src={screenshot.image}
              alt={modalContent.name}
              className="h-[120px] object-cover"
            />
          ))}
        </div>
      </Modal>
    </div>
  );
};

export default GameModal;
