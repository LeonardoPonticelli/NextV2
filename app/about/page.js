import React from "react";
import "./about.css";
import Image from "next/image";


export default function About() {
    return (
        <div className="about">
            <h1 className="about-h1">Sobre mim</h1>
            <div className="about-container">
                <div className="about-item">
                    <p className="about-p">
                        Desde cedo, sempre tive uma grande afinidade com computadores e tecnologia. Essa curiosidade me levou inicialmente a me formar na área de elétrica, onde desenvolvi uma base sólida em sistemas e circuitos. Com o tempo, aprofundei meus conhecimentos ao me especializar em eletrônica, ampliando ainda mais minha compreensão sobre o funcionamento interno dos dispositivos.

Hoje, canalizo toda essa bagagem técnica no desenvolvimento web. Me dedico continuamente a aprender e aprimorar minhas habilidades em front-end e back-end, buscando criar soluções digitais modernas, funcionais e eficientes.


                    </p>
                    <p className="about-p-img">
                      <Image className="about-img" src="/AVATAR.jpg" alt="" width={200} height={200}/>
                    </p>
                </div>
            </div>
        </div>
    );
}