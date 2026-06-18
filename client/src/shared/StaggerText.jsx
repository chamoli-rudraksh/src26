import React, { useRef, useEffect } from "react";
import gsap from "gsap";

const StaggerText = ({ text, hoverColor = "inherit" }) => {
  const originalChars = useRef([]);
  const hoverChars = useRef([]);
  const wrapperRef = useRef(null);

  useEffect(() => {
    const parent = wrapperRef.current?.parentElement;
    
    const animate = (yPercent) => {

      gsap.to(originalChars.current, { yPercent, stagger: 0.02, duration: 0.3, ease: "power2.inOut", overwrite: true });
      gsap.to(hoverChars.current, { yPercent, stagger: 0.02, duration: 0.3, ease: "power2.inOut", overwrite: true });
    };

    const handleEnter = () => animate(-100);
    const handleLeave = () => animate(0);

    const target = parent || wrapperRef.current;
    if (target) {
      target.addEventListener("mouseenter", handleEnter);
      target.addEventListener("mouseleave", handleLeave);
      return () => {
        target.removeEventListener("mouseenter", handleEnter);
        target.removeEventListener("mouseleave", handleLeave);
      };
    }
  }, []);

  const textArray = typeof text === "string" ? text.split("") : [];

  const renderChars = (refArray) =>
    textArray.map((char, index) => (
      <span
        key={index}
        ref={(el) => (refArray.current[index] = el)}
        style={{ display: "inline-block", whiteSpace: "pre" }}
      >
        {char}
      </span>
    ));

  return (
    <div
      ref={wrapperRef}
      style={{ position: "relative", overflow: "hidden", display: "flex" }}
    >
      <div style={{ display: "flex" }}>
        {renderChars(originalChars)}
      </div>

      <div
        style={{
          position: "absolute",
          left: 0,
          top: "100%",
          display: "flex",
          color: hoverColor,
        }}
      >
        {renderChars(hoverChars)}
      </div>
    </div>
  );
};

export default StaggerText;