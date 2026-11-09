import React from "react";
const hearts = [
  { left: "8%", delay: "0s", duration: "7s", size: "17px" },
  { left: "20%", delay: "1.3s", duration: "8s", size: "12px" },
  { left: "34%", delay: "2.2s", duration: "7.5s", size: "20px" },
  { left: "53%", delay: ".6s", duration: "8.5s", size: "14px" },
  { left: "69%", delay: "1.8s", duration: "7.2s", size: "18px" },
  { left: "83%", delay: "2.8s", duration: "8s", size: "13px" },
  { left: "93%", delay: ".9s", duration: "7.8s", size: "19px" },
];

export default function FloatingHearts() {
  return (
    <div className="hearts" aria-hidden="true">
      {hearts.map((heart, index) => (
        <span
          className="floating-heart"
          key={index}
          style={{
            left: heart.left,
            animationDelay: heart.delay,
            animationDuration: heart.duration,
            fontSize: heart.size,
          }}
        >
          ♥
        </span>
      ))}
    </div>
  );
}
