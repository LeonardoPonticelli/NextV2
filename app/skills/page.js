import React from "react";
import "./skills.css";
import CardSkills from "../Components/CardSkills/CardSkills";

export default function Skills() {
  return (
    <div className="skills">
      <h1 className="skills-h1">Cursos e conhecimentos</h1>
      <div className="skills-container">
        <div className="skills-item">
          <CardSkills
            title="Web Morderno"
            description="Javascript React Next Vue Node HTML CSS jQuery Bootstrap Webpack Gulp MySQL"
            image="WEBMORDERNO.jpg"/>
        </div>
        <div className="skills-item">
          <CardSkills
            title="Next.js e React"
            description="Construa aplicações React profissionais com o Framework NextJS! Além de projetos com TailwindCSS, TypeScript e Firebase."
            image="REACTNEXT.png"/>
        </div>
        <div className="skills-item">
          <CardSkills
            title="Eletricista industrial"
            description="Curso de Eletricista industrial do Senai, com ênfase em manutenção e instalação de sistemas elétricos industriais."
            image="SENAI.jpg"/>
        </div>
        <div className="skills-item">
          <CardSkills
            title="Técnico em Eletrônica"
            description="Trabalho com circuitos eletrônicos, manutenção de equipamentos eletrônicos e programação de microcontroladores."
            image="ELETRONICA.jpg" />
        </div>
        <div className="skills-item">
          <CardSkills
            title="Informática"
            description="conhecimento em hardware e software, manutenção de computadores, otimização e instalação de sistemas operacionais."
            image="INFORMATICA.jpg" />
        </div>
      </div>
    </div>
  );
}