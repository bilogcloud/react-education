import { useState } from "react";

function DetailsPanel() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "Hide details" : "Show details"}
      </button>

      {isOpen && (
        <p>React is a JavaScript library for building user interfaces.</p>
      )}
    </div>
  );
}

export default DetailsPanel;
