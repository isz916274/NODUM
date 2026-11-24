import {
  ArrowDownToLine,
  ArrowUpFromLine,
  Boxes,
  ScanLine,
  Warehouse,
} from "lucide-react";

const steps = [
  { label: "Recepción", icon: ArrowDownToLine },
  { label: "Registro", icon: ScanLine },
  { label: "Ubicación", icon: Warehouse },
  { label: "Inventario", icon: Boxes },
  { label: "Salida", icon: ArrowUpFromLine },
];

export function WmsVisual() {
  return (
    <div aria-label="Esquema conceptual de un flujo de almacén" className="wms-board">
      <div className="wms-board-header">
        <strong>Flujo de almacén</strong>
        <span>ESQUEMA CONCEPTUAL</span>
      </div>
      <div className="wms-board-flow">
        {steps.map(({ icon: Icon, label }, index) => (
          <div className="wms-board-step" key={label}>
            <div className="wms-board-node">
              <Icon aria-hidden="true" />
              <span>{label}</span>
            </div>
            {index < steps.length - 1 ? (
              <span aria-hidden="true" className="wms-flow-connector" />
            ) : null}
          </div>
        ))}
      </div>
      <p className="wms-board-note">
        Representación ilustrativa del recorrido de materiales; el alcance del
        sistema se define para cada operación.
      </p>
    </div>
  );
}
