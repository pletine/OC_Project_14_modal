import Modal from "./components/modal";
import { useState } from "react";

export default function App() {
  const [modal, setModal] = useState(false);

  return (
    <div className="App">
      <button onClick={() => setModal(true)}>Open Modal</button>
      <Modal onClose={() => setModal(false)} show={modal}>
        <h2>Infos de la modal</h2>
      </Modal>
    </div>
  );
}
