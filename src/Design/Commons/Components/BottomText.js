import React from "react";
import CopyrightIcon from "@mui/icons-material/Copyright";

export default function BottomText() {
  return (
    <div
      style={{
        marginLeft: "auto",
        marginRight: "auto",
        paddingBottom: "5px",
        paddingTop: "5px",
        display: "flex",
      }}
    >
      <CopyrightIcon style={{ fontSize: "16px", marginRight: "10px",color:"white" }} />
      <p
        style={{
          marginBottom: "0px",
          marginTop: "0px",
          fontSize: "10px",
          color: "white",
          opacity: "0.5",
        }}
      >
        Powered by Darshana Perera
      </p>
    </div>
  );
}
