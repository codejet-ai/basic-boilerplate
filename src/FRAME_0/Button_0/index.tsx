import * as React from "react";

export const Button = () => {
  return (
    <button
      style={{
        zIndex: 3,
        color: "rgba(0, 0, 0, 1)",
        fontFamily: "Arial",
        fontWeight: 400,
        fontSize: "28px",
        textAlign: "left",
        letterSpacing: "0px",
        lineHeight: "8px",
        width: "min(424px, 100%)",
        minHeight: "48px",
        backgroundColor:
          "rgba(239.00000095367432, 239.00000095367432, 239.00000095367432, 1)",
        boxSizing: "border-box",
        outline:
          "1px solid rgba(118.00000056624413, 118.00000056624413, 118.00000056624413, 1)",
        borderRadius: "2px",
        paddingLeft: "8px",
        paddingRight: "8px",
        paddingTop: "4px",
        paddingBottom: "4px",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        flexWrap: "wrap",
        gap: "8px",
        cursor: "pointer",
      }}
    >
      Press me
    </button>
  );
};
