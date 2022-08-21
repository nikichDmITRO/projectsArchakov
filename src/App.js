import React from "react";
import { useState } from "react";
import "./index.scss";
import Modal from "./Modal.js";



function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className="App">
      <button onClick={() => setOpen(true)} className="open-modal-btn">
        ✨ Открыть окно
      </button>
      
      <Modal open={open} setOpen={setOpen} />
      <div>aaa</div>
    </div>
  );
}

export default App;
