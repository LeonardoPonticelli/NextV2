import React from "react";
import Image from "next/image";
import "./Main.css";

export default function Main() {
  return (
    <div className="container">
      <h1 className="title">Hard Working</h1>
      <Image className="foto-principal" src="/Principal.png" alt="mulher-com-celular" height={1920} width={1080} ></Image>
    </div>
  );
}
