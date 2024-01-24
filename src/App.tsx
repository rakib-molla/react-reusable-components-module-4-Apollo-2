// import MainLayout from "./components/layout/MainLayout";
import { useState } from "react";
import Button from "./components/ui/Button";
import Container from "./components/ui/Container";
import Modal from "./components/ui/Modal";

function App() {
  const [modal, setModal] = useState(false);
  const handleOpenModalClose = () => {
    setModal((prev) => !prev);
  };
  return (
    <Container>
      <div className="h-screen w-full flex items-center justify-center ">
        {/* reUseable button  */}
        <Button onClick={() => setModal((prev) => !prev)}>open modal</Button>
        <Modal isOpen={modal} onClose={handleOpenModalClose}>
          <Modal.Header>
            <h3> Title</h3>
          <Modal.CloseButton></Modal.CloseButton>
          </Modal.Header>
          <h1>this is modal </h1>
        </Modal>
      </div>
    </Container>
  );
}

export default App;
