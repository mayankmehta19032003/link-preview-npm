import React, { useEffect, useState } from "react";
import { encode } from "qss";
import { motion } from "framer-motion";

const LinkPreviewer = ({ url, children }) => {
  const width = 200;
  const height = 125;

  const params = encode({
    url,
    screenshot: true,
    meta: false,
    embed: "screenshot.url",
    colorScheme: "dark",
    "viewport.isMobile": true,
    "viewport.deviceScaleFactor": 1,
    "viewport.width": width * 3,
    "viewport.height": height * 3,
  });

  const [isMounted, setIsMounted] = useState(false);
  const [show, setShow] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleMouseMove = (e) => {
    setPosition({
      top: e.clientY - 150, // Adjust to position the preview just above the cursor
      left: e.clientX + 10, // Adjust to position it slightly to the right
    });
  };

  const src = `https://api.microlink.io/?${params}`;

  const dropIn = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.2, type: "spring", damping: 20, stiffness: 300 },
    },
    exit: { opacity: 0, y: 10 },
  };

  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      {isMounted && show && (
        <motion.div
          variants={dropIn}
          initial="hidden"
          animate="visible"
          exit="exit"
          style={{
            position: "fixed",
            top: position.top,
            left: position.left,
            zIndex: 10,
            backgroundColor: "transparent",
            pointerEvents: "none",
          }}
        >
          <motion.img src={src} width={width} height={height} alt="Link Preview" />
        </motion.div>
      )}
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="pointer"
        onMouseEnter={(e) => {
          setShow(true);
          handleMouseMove(e);
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setShow(false)}
      >
        {children}
      </a>
    </div>
  );
};

export default LinkPreviewer;
