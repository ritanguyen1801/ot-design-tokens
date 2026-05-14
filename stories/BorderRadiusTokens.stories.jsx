import React from "react";

// ---------------------------------------------------------------------------
// Token data — extracted from Figma "📖 Token Documentation" (node 5185:4)
// Chain: Semantic token → Primitive alias → value
// ---------------------------------------------------------------------------
const RADIUS_GROUPS = [
  {
    name: "Generic Scale",
    description: "General-purpose radius scale — use when no component-specific token applies",
    tokens: [
      { name: "radius/none", primitive: "border-radius/0",    value: "0px",  csValue: 0,   use: "Sharp edges — table cell, code block" },
      { name: "radius/sm",   primitive: "border-radius/4",    value: "4px",  csValue: 4,   use: "Badge, tag, chip" },
      { name: "radius/md",   primitive: "border-radius/8",    value: "8px",  csValue: 8,   use: "Button, input, default component" },
      { name: "radius/lg",   primitive: "border-radius/12",   value: "12px", csValue: 12,  use: "Card, dropdown panel" },
      { name: "radius/xl",   primitive: "border-radius/16",   value: "16px", csValue: 16,  use: "Modal, large card" },
      { name: "radius/2xl",  primitive: "border-radius/24",   value: "24px", csValue: 24,  use: "Bottom sheet, large modal" },
      { name: "radius/full", primitive: "border-radius/full", value: "9999px", csValue: 9999, use: "Pill button, avatar, toggle" },
    ],
  },
  {
    name: "Component-Specific",
    description: "Semantic aliases tied to a specific component — prefer these over the generic scale",
    tokens: [
      { name: "radius/button",  primitive: "border-radius/8",    value: "8px",    csValue: 8,    use: "Button component" },
      { name: "radius/input",   primitive: "border-radius/8",    value: "8px",    csValue: 8,    use: "Input, select, textarea" },
      { name: "radius/card",    primitive: "border-radius/12",   value: "12px",   csValue: 12,   use: "Card component" },
      { name: "radius/badge",   primitive: "border-radius/full", value: "9999px", csValue: 9999, use: "Badge, status dot" },
      { name: "radius/tooltip", primitive: "border-radius/6",    value: "6px",    csValue: 6,    use: "Tooltip" },
      { name: "radius/modal",   primitive: "border-radius/16",   value: "16px",   csValue: 16,   use: "Modal dialog" },
      { name: "radius/avatar",  primitive: "border-radius/full", value: "9999px", csValue: 9999, use: "Avatar, profile image" },
    ],
  },
];

// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------
const FONT = "'Outfit', -apple-system, BlinkMacSystemFont, sans-serif";

const ColHeader = ({ children, width }) => (
  <div
    style={{
      width,
      fontSize: 11,
      fontFamily: FONT,
      fontWeight: 600,
      color: "#9ca3af",
      textTransform: "uppercase",
      letterSpacing: "0.06em",
      flexShrink: 0,
    }}
  >
    {children}
  </div>
);

function RadiusRow({ token }) {
  const swatchRadius = Math.min(token.csValue, 14);
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 0,
        padding: "10px 0",
        borderBottom: "1px solid #f0f0f0",
      }}
    >
      {/* Swatch */}
      <div style={{ width: 48, flexShrink: 0, display: "flex", alignItems: "center" }}>
        <div
          style={{
            width: 28,
            height: 28,
            borderRadius: swatchRadius,
            background: "#e0edeb",
            border: "1.5px solid #c7c7c7",
            opacity: 0.9,
          }}
        />
      </div>

      {/* Token name */}
      <div style={{ width: 220, flexShrink: 0 }}>
        <code
          style={{
            fontSize: 12,
            fontFamily: "'JetBrains Mono', 'Fira Code', 'Courier New', monospace",
            color: "#111827",
            background: "#f3f4f6",
            padding: "2px 6px",
            borderRadius: 4,
          }}
        >
          {token.name}
        </code>
      </div>

      {/* Primitive */}
      <div style={{ width: 172, flexShrink: 0 }}>
        <span style={{ fontSize: 12, fontFamily: FONT, color: "#6b7280" }}>
          → {token.primitive}
        </span>
      </div>

      {/* Value */}
      <div style={{ width: 72, flexShrink: 0 }}>
        <span
          style={{
            fontSize: 12,
            fontFamily: "'JetBrains Mono', 'Fira Code', 'Courier New', monospace",
            color: "#374151",
          }}
        >
          {token.value}
        </span>
      </div>

      {/* Use case */}
      <div style={{ flex: 1 }}>
        <span style={{ fontSize: 12, fontFamily: FONT, color: "#6b7280" }}>
          {token.use}
        </span>
      </div>
    </div>
  );
}

function RadiusGroup({ group }) {
  return (
    <div style={{ marginBottom: 40 }}>
      <div
        style={{
          borderBottom: "2px solid #e7e7e7",
          paddingBottom: 12,
          marginBottom: 0,
        }}
      >
        <h2 style={{ margin: 0, fontSize: 16, fontWeight: 700, fontFamily: FONT, color: "#111827" }}>
          {group.name}
        </h2>
        <p style={{ margin: "4px 0 0", fontSize: 12, fontFamily: FONT, color: "#6b7280" }}>
          {group.description}
        </p>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 0,
          padding: "8px 0",
          borderBottom: "1px solid #e7e7e7",
        }}
      >
        <ColHeader width={48}>Shape</ColHeader>
        <ColHeader width={220}>Token Name</ColHeader>
        <ColHeader width={172}>Primitive</ColHeader>
        <ColHeader width={72}>Value</ColHeader>
        <ColHeader width={undefined}>Use Case</ColHeader>
      </div>

      {group.tokens.map((t) => (
        <RadiusRow key={t.name} token={t} />
      ))}
    </div>
  );
}

function RadiusDocPage() {
  const totalTokens = RADIUS_GROUPS.reduce((acc, g) => acc + g.tokens.length, 0);
  return (
    <div
      style={{
        fontFamily: FONT,
        padding: "40px 48px",
        background: "#ffffff",
        minHeight: "100vh",
        maxWidth: 960,
        margin: "0 auto",
      }}
    >
      <div style={{ marginBottom: 40 }}>
        <div
          style={{
            display: "inline-block",
            background: "#f4e8ff",
            color: "#6b3fa0",
            fontSize: 11,
            fontWeight: 600,
            fontFamily: FONT,
            padding: "3px 10px",
            borderRadius: 12,
            marginBottom: 12,
            border: "1px solid #d9b3f7",
          }}
        >
          Radius
        </div>
        <h1 style={{ margin: 0, fontSize: 28, fontWeight: 700, fontFamily: FONT, color: "#111827" }}>
          Border Radius Tokens
        </h1>
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            background: "#f3f4f6",
            borderRadius: 12,
            padding: "2px 10px",
            marginTop: 10,
            marginBottom: 10,
          }}
        >
          <span style={{ fontSize: 12, fontFamily: FONT, color: "#6b7280", fontWeight: 600 }}>
            {totalTokens} tokens
          </span>
        </div>
        <p
          style={{
            margin: "8px 0 0",
            fontSize: 13,
            fontFamily: FONT,
            color: "#6b7280",
            lineHeight: 1.5,
          }}
        >
          Semantic radius tokens — component-specific and generic scale.
          Apply via <strong>cornerRadius</strong> binding.
        </p>
      </div>

      {RADIUS_GROUPS.map((group) => (
        <RadiusGroup key={group.name} group={group} />
      ))}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Storybook exports
// ---------------------------------------------------------------------------
export default {
  title: "Design System/Border Radius Tokens",
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Semantic border radius token documentation — sourced from Figma DS-Testing-with-AI (node 5185:4). Includes a generic scale and component-specific aliases.",
      },
    },
  },
};

export const Documentation = {
  name: "All Border Radius Tokens",
  render: () => <RadiusDocPage />,
};

export const GenericScale = {
  render: () => (
    <div style={{ padding: "40px 48px", fontFamily: FONT, maxWidth: 960 }}>
      <RadiusGroup group={RADIUS_GROUPS[0]} />
    </div>
  ),
};

export const ComponentSpecific = {
  render: () => (
    <div style={{ padding: "40px 48px", fontFamily: FONT, maxWidth: 960 }}>
      <RadiusGroup group={RADIUS_GROUPS[1]} />
    </div>
  ),
};
