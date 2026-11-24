"use client";

import { Activity, ArrowDownToLine, ArrowUpFromLine, Bell, Boxes } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import Link from "next/link";
import { Reveal } from "@/components/motion/reveal";
import { ButtonLink } from "@/components/ui/button-link";
import { Eyebrow } from "@/components/ui/eyebrow";

const inventoryRows = [
  { sku: "MAT-001", product: "Lámina galvanizada", location: "A-01-03", stock: "128 pzas", state: "Disponible" },
  { sku: "INS-014", product: "Tornillo hexagonal", location: "B-04-02", stock: "36 cajas", state: "Revisar mínimo" },
  { sku: "CMP-028", product: "Perfil de aluminio", location: "A-02-01", stock: "74 pzas", state: "Disponible" },
];

const indicators = [
  { label: "Existencias", value: "1,284", unit: "unidades" },
  { label: "Movimientos", value: "08", unit: "del turno" },
  { label: "Productos", value: "243", unit: "registrados" },
];

export function WmsShowcase() {
  const reduceMotion = useReducedMotion();

  return (
    <section aria-labelledby="wms-title" className="home-section home-wms" id="wms">
      <div className="container">
        <div className="home-section-index">
          <span>01</span>
          <span>PRODUCTO PRINCIPAL</span>
          <span>GESTIÓN DE ALMACÉN</span>
        </div>
        <div className="home-wms-layout">
          <Reveal className="home-wms-copy">
            <Eyebrow>Producto empresarial</Eyebrow>
            <h2 id="wms-title">
              NODUM <span>WMS</span>
            </h2>
            <p className="home-wms-lead">
              Control para el lugar donde empieza y se mueve tu operación.
            </p>
            <p className="home-wms-description">
              Un sistema de gestión de almacén enfocado en pequeñas fábricas
              manufactureras. Organiza existencias, registra movimientos y
              conserva la trazabilidad de la operación.
            </p>
            <div className="home-wms-facts">
              <div>
                <span>ENFOQUE</span>
                <strong>Manufactura</strong>
              </div>
              <div>
                <span>DISEÑADO PARA</span>
                <strong>Equipos de 5 a 20 personas</strong>
              </div>
            </div>
            <ButtonLink href="/wms">Conocer NODUM WMS</ButtonLink>
          </Reveal>
          <Reveal className="wms-demo-wrap" delay={0.12}>
            <div
              aria-label="Vista conceptual de interfaz de NODUM WMS con datos ilustrativos"
              className="wms-demo"
              role="group"
            >
              <div className="wms-demo-topline">
                <span className="wms-demo-brand">
                  <Boxes aria-hidden="true" />
                  NODUM WMS
                </span>
                <span className="wms-demo-sample">
                  <i /> DATOS ILUSTRATIVOS · SIN CONEXIÓN
                </span>
              </div>
              <div className="wms-demo-heading">
                <div>
                  <span className="wms-demo-label">VISTA GENERAL</span>
                  <h3>Operación de almacén</h3>
                </div>
                <span className="wms-demo-date">INTERFAZ CONCEPTUAL</span>
              </div>
              <div className="wms-demo-indicators">
                {indicators.map((item, index) => {
                  const Icon = [Boxes, Activity, Bell][index];
                  return (
                    <div className="wms-indicator" key={item.label}>
                      <span className="wms-indicator-icon">
                        <Icon aria-hidden="true" />
                      </span>
                      <span className="wms-indicator-label">{item.label}</span>
                      <strong>{item.value}</strong>
                      <span className="wms-indicator-unit">{item.unit}</span>
                    </div>
                  );
                })}
              </div>
              <div className="wms-demo-content">
                <div className="wms-demo-table">
                  <div className="wms-demo-subhead">
                    <span>Productos / ejemplo</span>
                    <Link href="/wms">VER PRODUCTO ↗</Link>
                  </div>
                  <table>
                    <caption className="visually-hidden">
                      Productos de ejemplo en el inventario conceptual
                    </caption>
                    <thead>
                      <tr>
                        <th scope="col">Producto</th>
                        <th scope="col">Ubicación</th>
                        <th scope="col">Existencia</th>
                      </tr>
                    </thead>
                    <tbody>
                      {inventoryRows.map((row) => (
                        <tr key={row.sku}>
                          <td>
                            <span className="wms-product-name">{row.product}</span>
                            <span className="wms-product-sku">{row.sku}</span>
                          </td>
                          <td>{row.location}</td>
                          <td>{row.stock}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <aside className="wms-demo-alert">
                  <span className="wms-alert-icon">
                    <Bell aria-hidden="true" />
                  </span>
                  <div>
                    <span>AVISO DE EJEMPLO</span>
                    <strong>Revisar nivel de existencias</strong>
                    <small>INS-014 · Tornillo hexagonal</small>
                  </div>
                  <span className="wms-alert-dot" />
                </aside>
              </div>
              <div className="wms-demo-footer">
                <span>
                  <ArrowDownToLine aria-hidden="true" /> ENTRADAS
                </span>
                <motion.div
                  aria-hidden="true"
                  className="wms-demo-track"
                  initial={reduceMotion ? false : { scaleX: 0 }}
                  style={{ transformOrigin: "left" }}
                  transition={{
                    duration: reduceMotion ? 0 : 1,
                    delay: reduceMotion ? 0 : 0.3,
                  }}
                  viewport={{ once: true }}
                  whileInView={reduceMotion ? undefined : { scaleX: 1 }}
                >
                  <span />
                </motion.div>
                <span>
                  <ArrowUpFromLine aria-hidden="true" /> SALIDAS
                </span>
              </div>
              <p className="wms-demo-disclaimer">
                Propuesta visual de interfaz. Los nombres, cantidades y avisos
                son de muestra; no corresponden a datos conectados ni a una
                operación real.
              </p>
              <Link className="wms-demo-link" href="/wms">
                Explorar producto <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
