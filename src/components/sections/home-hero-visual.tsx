"use client";

import { motion, useReducedMotion } from "motion/react";

const flow = [
  { number: "01", label: "Recepción", detail: "Registro de materiales" },
  { number: "02", label: "Control", detail: "Ubicación y trazabilidad" },
  { number: "03", label: "Movimiento", detail: "Entradas y salidas" },
];

export function HomeHeroVisual() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      animate={{ opacity: 1, y: 0 }}
      className="hero-visual"
      initial={reduceMotion ? false : { opacity: 0, y: 12 }}
      transition={{
        duration: reduceMotion ? 0 : 0.7,
        ease: [0.22, 1, 0.36, 1],
        delay: reduceMotion ? 0 : 0.12,
      }}
    >
      <div className="visual-topbar">
        <div aria-hidden="true" className="visual-window-dots">
          <span />
          <span />
          <span />
        </div>
        <span className="visual-caption">Control de operación</span>
        <span className="visual-concept">Vista conceptual</span>
      </div>
      <div className="visual-body">
        <span className="visual-overline">Un flujo, una visión clara</span>
        <h2 className="visual-title">Del movimiento al control.</h2>
        <div className="flow-list">
          {flow.map((item) => (
            <div className="flow-item" key={item.number}>
              <span className="flow-number">{item.number}</span>
              <span className="flow-label">
                <strong>{item.label}</strong>
                <span>{item.detail}</span>
              </span>
              <span className="flow-status">OPERACIÓN</span>
            </div>
          ))}
        </div>
        <div className="visual-footer">
          <span>ALMACÉN · PROCESO CONECTADO</span>
          <span>ESQUEMA ILUSTRATIVO</span>
        </div>
      </div>
    </motion.div>
  );
}
