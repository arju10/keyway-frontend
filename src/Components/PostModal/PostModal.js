import React from "react";
import Modal from "react-modal";
import AddPost from "../AddPost/AddPost";


const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

const PostModal = ({ modalIsOpen, closeModal }) => {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <button onClick={closeModal}>close</button>
      <AddPost/>
    </Modal>
  );
};

export default PostModal;
