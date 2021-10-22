import React from "react";
import BottomText from "../Components/BottomText";

export default function BottomBar() {
  return (
    <div
      style={{
        backgroundColor: "#001E3C",
        display: "flex",
        justifyContent: "space-between",
        position: "absolute",
        bottom: "0",
        width: "100%",
      }}
    >
      <BottomText />
    </div>
  );
}
