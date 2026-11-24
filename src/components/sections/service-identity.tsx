type ServiceIdentityProps = {
  type: "software" | "applications" | "web" | "automation";
};

export function ServiceIdentity({ type }: ServiceIdentityProps) {
  if (type === "applications") {
    return (
      <div aria-hidden="true" className="service-identity service-identity--apps">
        <span className="device device--phone">
          <i />
          <b />
          <b />
        </span>
        <span className="device device--tablet">
          <i />
          <b />
          <b />
          <b />
        </span>
        <span className="device-cross">×</span>
      </div>
    );
  }

  if (type === "web") {
    return (
      <div aria-hidden="true" className="service-identity service-identity--web">
        <div className="browser-sheet">
          <span><i /><i /><i /></span>
          <b />
          <i />
          <i />
          <i />
        </div>
        <span className="browser-index">WEB / 02</span>
      </div>
    );
  }

  if (type === "automation") {
    return (
      <div
        aria-hidden="true"
        className="service-identity service-identity--automation"
      >
        <span className="automation-node automation-node--a" />
        <span className="automation-node automation-node--b" />
        <span className="automation-node automation-node--c" />
        <span className="automation-node automation-node--d" />
        <i className="automation-path automation-path--a" />
        <i className="automation-path automation-path--b" />
        <i className="automation-path automation-path--c" />
      </div>
    );
  }

  return (
    <div aria-hidden="true" className="service-identity service-identity--software">
      <span className="software-bracket">&lt;</span>
      <span className="software-lines">
        <i />
        <i />
        <i />
      </span>
      <span className="software-bracket">/&gt;</span>
      <span className="software-index">SYS / 01</span>
    </div>
  );
}
