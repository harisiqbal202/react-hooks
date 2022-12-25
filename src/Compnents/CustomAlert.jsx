import React, { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

function CustomAlert({ buttonLabel, id }) {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const queryClient = useQueryClient();

  function deleteRecord() {
    toggle();
    console.log("confirm");
    mutation.mutate(id);
  }
  const mutation = useMutation(
    async (recordId) => {
      return await fetch(`http://localhost:3004/users/${recordId}`, {
        method: "DELETE",
      });
    },
    {
      onSuccess: () => {
        // makes react query client to fetch data against this key again,
        // acts like GET call after DELETE call.
        return queryClient.invalidateQueries(["getUsers"]);
      },
    }
  );

  return (
    <>
      <div>
        <Button color="danger" onClick={toggle}>
          {buttonLabel}
        </Button>
        <Modal isOpen={modal} toggle={toggle}>
          <ModalHeader toggle={toggle}>Delete Alert</ModalHeader>
          <ModalBody>Are you Sure to Delete!</ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={deleteRecord}>
              Confirm
            </Button>{" "}
            <Button color="secondary" onClick={toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    </>
  );
}

export default CustomAlert;
