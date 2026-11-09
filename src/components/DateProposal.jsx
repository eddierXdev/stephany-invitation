import React from "react";
export default function DateProposal({ date, fallback }) {
  let label = fallback;

  if (date) {
    const parsed = new Date(`${date}T12:00:00`);
    if (!Number.isNaN(parsed.getTime())) {
      label = new Intl.DateTimeFormat("es", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
      }).format(parsed);
    }
  }

  return (
    <div className="date-proposal">
      <span className="date-icon" aria-hidden="true">♡</span>
      <div>
        <p className="date-caption">UNA PROPUESTA</p>
        <p className="date-value">{label}</p>
      </div>
    </div>
  );
}
