import React from "react";
import FloatingHearts from "./FloatingHearts.jsx";

export default function ResponseScreen({ accepted, name, onBack }) {
  if (!accepted) {
    return (
      <main className="page-shell response-shell">
        <section className="response-card" aria-live="polite">
          <span className="response-symbol" aria-hidden="true">♡</span>
          <p className="eyebrow">GRACIAS POR RESPONDER</p>
          <h1>Está bien, {name}.</h1>
          <p className="response-copy">
            Gracias por tomarte un momento para responder. No pasa nada. ♡
          </p>
          <button className="text-button" onClick={onBack}>Volver</button>
        </section>
      </main>
    );
  }

  return (
    <main className="page-shell response-shell accepted-shell">
      <FloatingHearts />
      <section className="response-card accepted-card" aria-live="polite">
        <span className="response-symbol accepted-symbol" aria-hidden="true">♥</span>
        <p className="eyebrow">jajajaj lo sabia</p>
        <h1>¡Sabía que dirías que sí</h1>
        <p className="response-copy">
          Ahora vamos a ver que hacemos tatica.
        </p>
        <div className="little-note">Prometo que será un momento bonito. ♡</div>
      </section>
    </main>
  );
}
