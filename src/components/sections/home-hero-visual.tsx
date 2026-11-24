"use client";

import { motion, useReducedMotion } from "motion/react";

export function HomeHeroVisual() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      animate={{ opacity: 1, y: 0 }}
      aria-label="Diagrama conceptual de una operación industrial conectada"
      className="home-hero-visual"
      initial={reduceMotion ? false : { opacity: 0, y: 12 }}
      role="img"
      transition={{
        duration: reduceMotion ? 0 : 0.75,
        delay: reduceMotion ? 0 : 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <div className="hero-visual-head">
        <span><i /> NODUM / SISTEMAS PARA OPERACIONES</span>
        <span>FIG. 01 — MAPA DE FLUJO</span>
      </div>
      <svg
        aria-hidden="true"
        className="hero-engineering-drawing"
        fill="none"
        viewBox="0 0 700 500"
      >
        <defs>
          <pattern
            height="28"
            id="engineering-grid"
            patternUnits="userSpaceOnUse"
            width="28"
          >
            <path d="M28 0H0V28" stroke="#29313a" strokeWidth=".7" />
          </pattern>
          <linearGradient id="rack-face" x1="0" x2="1" y1="0" y2="1">
            <stop stopColor="#26313a" />
            <stop offset="1" stopColor="#182027" />
          </linearGradient>
        </defs>
        <rect fill="url(#engineering-grid)" height="500" width="700" />
        <g opacity=".8" stroke="#42515c" strokeWidth="1">
          <path d="M52 93H490M52 397H490" />
          <path d="M79 69V420M462 69V420" strokeDasharray="3 7" />
          <path d="M79 80H111M79 80V112M462 80h-32m32 0v32" />
          <path d="M79 386h32m-32 0v-32m383 32h-32m32 0v-32" />
          <path d="M91 242h21m-10-10v20M451 242h-21m10-10v20" />
        </g>
        <g stroke="#52616c" strokeWidth="1">
          <path d="m151 169 89-49 90 49-90 52-89-52Z" fill="#202a32" />
          <path d="M151 169v120l89 53V221" fill="url(#rack-face)" />
          <path d="m330 169v120l-90 53V221" fill="#151d23" />
          <path d="m151 208 89 53 90-52M151 248l89 53 90-52" />
          <path d="m176 166 64 37 66-38M176 226l64 38 66-39M176 267l64 38 66-39" />
          <path d="M176 166v59m64-22v59m66-96v60" />
        </g>
        <g stroke="#36BFA0" strokeWidth="1.2">
          <path d="m184 182 21-12 21 12v24l-21 12-21-12v-24Z" fill="#1e3a37" />
          <path d="m249 221 21-12 20 12v23l-20 12-21-12v-23Z" fill="#1e3a37" />
          <path d="m184 263 21-12 21 12v23l-21 12-21-12v-23Z" fill="#1e3a37" />
        </g>
        <g stroke="#A3E635" strokeWidth="1.5">
          <path d="M205 194h95l59 34h94" />
          <path d="M270 232h67l47-27h62" strokeDasharray="4 5" />
          <circle cx="205" cy="194" fill="#A3E635" r="4" />
          <circle cx="358" cy="228" fill="#A3E635" r="4" />
          <circle cx="431" cy="228" fill="#A3E635" r="4" />
          <circle cx="439" cy="205" fill="#101318" r="5" />
        </g>
        <g fill="#A3E635" fontFamily="monospace" fontSize="9" letterSpacing="1.3">
          <text x="123" y="146">ZONA A / ALMACÉN</text>
          <text x="370" y="215">FLUJO DE MATERIALES</text>
          <text x="84" y="438">EJE X  /  MOVIMIENTO</text>
        </g>
        <g stroke="#65737d" strokeWidth=".8">
          <path d="M106 445h349m-349-4v8m70-8v8m70-8v8m70-8v8m70-8v8m69-8v8" />
          <path d="M522 90h120v298H522z" />
          <path d="M522 131h120M522 206h120M522 281h120" />
        </g>
        <g fill="#929BA8" fontFamily="monospace" fontSize="9">
          <text x="538" y="115">ENTRADA</text>
          <text x="538" y="155">REGISTRO</text>
          <text x="538" y="190">INVENTARIO</text>
          <text x="538" y="230">UBICACIÓN</text>
          <text x="538" y="265">MOVIMIENTO</text>
          <text x="538" y="305">TRAZABILIDAD</text>
          <text x="538" y="364">SALIDA</text>
        </g>
        <motion.path
          animate={
            reduceMotion ? { opacity: 1 } : { opacity: [0.35, 1, 0.35] }
          }
          d="M529 168h5"
          initial={reduceMotion ? false : { opacity: 0.4 }}
          transition={{
            duration: reduceMotion ? 0 : 3.2,
            repeat: reduceMotion ? 0 : Infinity,
            ease: "easeInOut",
          }}
          stroke="#A3E635"
          strokeWidth="3"
        />
        <g fill="#929BA8" fontFamily="monospace" fontSize="8">
          <text x="53" y="55">NODUM / SISTEMAS OPERATIVOS</text>
          <text x="521" y="415">VISTA DE SISTEMA / 01</text>
        </g>
      </svg>
      <div className="hero-visual-foot">
        <span>DISEÑO DE SISTEMAS · OPERACIÓN · INFORMACIÓN</span>
        <span>DETALLE / 01</span>
      </div>
    </motion.div>
  );
}
