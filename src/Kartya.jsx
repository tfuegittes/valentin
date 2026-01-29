import React, { useState } from "react";
import "./KartyaStyle.css";
import cica from "./kep/cica.gif";
import juhuu from "./kep/juhuu.gif";

export default function Kartya() {
  const [pos, setPos] = useState({ top: 0, left: 0 });
  const [accept,setAccept] = useState(false)

  const moveButton = () => {
    
    const maxX = 300; 
    const maxY = 100; 
    const left = Math.floor(Math.random() * maxX);
    const top = Math.floor(Math.random() * maxY);
    setPos({ top, left });
  };

  const Elfogadas = () =>{
          setAccept(true)
  }

  return (
    <div className="container">
      <div className="main-card">
        <h1>Szia, Szerelmem! 💕</h1>
        <img className="cicagif" src={accept ? juhuu : cica} alt="cica" />
        {!accept && (
          <>
        <h2>Lennél a Valentinom?</h2>
        <div className="gombok">
          <button className="gomb" onClick={Elfogadas}>IGEN!!!</button>
          <button
          className="gomb"
            style={{ position: "relative", top: pos.top, left: pos.left }}
            onMouseEnter={moveButton}  
            onTouchStart={moveButton}   
          >
            Nem?
          </button>
        </div>
        </>
         )}
         {accept && <h2>JUHUUUU</h2>}
         {accept && <h2>Akkor találkozunk Valentin napon! 👀❤️</h2>}
         {accept && <h2>Nagyon-nagyon szeretlek! 😽❤️❤️</h2>}
      </div>
    </div>
  );
}
