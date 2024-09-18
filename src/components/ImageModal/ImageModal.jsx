import ReactModal from "react-modal";
import ImageCard from "../ImageCard/ImageCard";

import "./ImageModal.css";

export default function ImageModal({ showModal, closeModal }) {
  return (
    <ReactModal
      isOpen={showModal.isOpen}
      contentLabel="Minimal Modal Example"
      shouldCloseOnOverlayClick={true}
      onRequestClose={closeModal}
      className={"modal"}
      overlayClassName={"overlay"}
      closeTimeoutMS={150}
    >
      {showModal.photo && <ImageCard photo={showModal.photo} modal={true} />}
    </ReactModal>
  );
}
