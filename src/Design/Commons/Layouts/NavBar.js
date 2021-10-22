import React from "react";
import Logo from "../Components/Logo";
import AppName from "../Components/AppName";
import ContactMailIcon from "@mui/icons-material/ContactMail";

export default function NavBar() {
  return (
    <div
      style={{
        padding: "8px",
        backgroundColor: "#001E3C",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <div style={{ display: "flex" }}>
        <Logo />
        <AppName />
      </div>
      <ContactMailIcon
        style={{
          fontSize: "25px",
          color: "white",
          opacity: "0.8",
          marginRight: "10px",
          marginBottom:"auto",
          marginTop:"auto"
        }}
      />
    </div>
  );
}
