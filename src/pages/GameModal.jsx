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
            height: "600px",
            margin: "auto",
            borderRadius: "10px",
            overflowY: "scroll",
            scrollbarColor: "#ff367e #011e39",
            scrollbarWidth: "thin",
          },
        }}
      >
        {modalContent ? (
          <div>
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
          </div>
        ) : (
          <div className="flex flex-col h-full justify-center items-center">
            <h2 className="text-lightPink font-bold text-[45px]">Oops....</h2>
            <h2 className="text-lightPink font-bold text-[30px]">
              No Game Found :(
            </h2>
            <button
              className="bg-darkBlue p-2 rounded-lg mt-4 text-whitish hover:bg-lightBlue transition-all duration-300 ease-out"
              onClick={() => setIsOpen(false)}
            >
              Go Back
            </button>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default GameModal;
