import React, { useRef, useState } from "react";
import { invitation } from "./config/invitation.js";
import DateProposal from "./components/DateProposal.jsx";
import ResponseScreen from "./components/ResponseScreen.jsx";

export default function App() {
  const [view, setView] = useState("invitation");
  const [noPosition, setNoPosition] = useState(null);
  const [noWasMoved, setNoWasMoved] = useState(false);
  const noButtonRef = useRef(null);
  const arenaRef = useRef(null);

  function moveNoButton() {
    if (!arenaRef.current || !noButtonRef.current) return;

    const arena = arenaRef.current.getBoundingClientRect();
    const button = noButtonRef.current.getBoundingClientRect();
    const padding = 8;
    const maxX = Math.max(padding, arena.width - button.width - padding);
    const maxY = Math.max(padding, arena.height - button.height - padding);

    // Keep a little distance from the Yes button, which stays on the left.
    let x = padding + Math.random() * Math.max(0, maxX - padding);
    let y = padding + Math.random() * Math.max(0, maxY - padding);

    // Avoid positions too close to the initial button location.
    if (Math.abs(x - (arena.width * 0.55)) < 65) {
      x = x < arena.width / 2 ? Math.min(maxX, x + 85) : Math.max(padding, x - 85);
    }

    setNoPosition({ x, y });
    setNoWasMoved(true);
  }

  function handleNoPointerEnter(event) {
    // Keyboard focus should not trigger evasive movement.
    if (event.pointerType === "mouse") moveNoButton();
  }

  function handleNoTouchStart(event) {
    event.preventDefault();
    moveNoButton();
  }

  function handleNoClick(event) {
    // Fallback: even if a click slips through, the button only moves away.
    event.preventDefault();
    moveNoButton();
  }

  function handleNoPointerDown(event) {
    if (event.pointerType === "mouse") {
      event.preventDefault();
      moveNoButton();
    }
  }

  function handleNoKeyDown(event) {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      moveNoButton();
    }
  }

  if (view !== "invitation") {
    return (
      <ResponseScreen
        accepted={view === "accepted"}
        name={invitation.recipientName}
        onBack={() => {
          setView("invitation");
          setNoPosition(null);
          setNoWasMoved(false);
        }}
      />
    );
  }

  return (
    <main className="page-shell">
      <div className="ambient ambient-one" aria-hidden="true" />
      <div className="ambient ambient-two" aria-hidden="true" />

      <section className="invitation-card">
        <div className="top-mark" aria-hidden="true">
          <span />
          <span className="top-heart">♡</span>
          <span />
        </div>

        <p className="eyebrow"></p>
        <h1>Hola, <em>{invitation.recipientName}</em> <span className="greeting-heart">♡</span></h1>
        <p className="intro">
          Hay algo que me gustaría proponerte.
          <br />
          Y pensé que esta sería una forma bonita de preguntártelo.
        </p>

        <div className="divider">
          <span />
          <span className="divider-heart">♥</span>
          <span />
        </div>

        <p className="question-label">ASÍ QUE…</p>
        <h2>¿Te gustaría salir<br className="desktop-break" /> conmigo?</h2>

        <DateProposal
          date={invitation.proposedDate}
          fallback={invitation.proposedDateLabel}
        />

        <div className="button-arena" ref={arenaRef}>
          <button className="yes-button" onClick={() => setView("accepted")}>
            ¡Sí, claro! <span aria-hidden="true">♥</span>
          </button>

          <button
            ref={noButtonRef}
            className={`no-button ${noWasMoved ? "no-button-moved" : ""}`}
            style={noPosition ? {
              position: "absolute",
              left: `${noPosition.x}px`,
              top: `${noPosition.y}px`,
            } : undefined}
            onPointerEnter={handleNoPointerEnter}
            onTouchStart={handleNoTouchStart}
            onPointerDown={handleNoPointerDown}
            onKeyDown={handleNoKeyDown}
            onClick={handleNoClick}
            aria-label="No, intenta seleccionarme"
          >
            No <span aria-hidden="true">🙈</span>
          </button>
        </div>

        <p className="hint" aria-live="polite">
          "No puedes decir que no… 🙈"
        </p>

        <div className="footer">
          <span>HECHO CON UN POQUITO DE VALOR</span>
          <span aria-hidden="true">♡</span>
        </div>
      </section>
    </main>
  );
}
