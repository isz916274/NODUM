import { Layers3, Settings2, Workflow } from "lucide-react";
import type { ServiceFeature } from "@/content/service-pages";

const featureIcons = {
  workflow: Workflow,
  layers: Layers3,
  settings: Settings2,
} as const;

export function FeatureGrid({ items }: { items: ServiceFeature[] }) {
  return (
    <div className="feature-grid">
      {items.map((item) => {
        const Icon = featureIcons[item.icon];

        return (
          <article className="feature-card" key={item.title}>
            <Icon aria-hidden="true" className="feature-card-icon" />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </article>
        );
      })}
    </div>
  );
}
