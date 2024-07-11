import Modal from "@/app/components/Modal";
import ModalShareableView from "@/app/components/ModalSharableView";
import React from "react";

const page = ({ params: { name } }) => {
  return (
    <Modal>
      <ModalShareableView name={name} />
    </Modal>
  );
};

export default page;
