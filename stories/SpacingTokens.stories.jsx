import React from "react";

// ---------------------------------------------------------------------------
// Token data — extracted from Figma "📖 Token Documentation" (node 5185:4)
// Chain: Semantic token → Primitive alias → px value
// ---------------------------------------------------------------------------
const SPACING_GROUPS = [
  {
    name: "Component — Padding",
    description: "Padding inside components — apply to padding properties",
    tokens: [
      { name: "spacing/component/padding-xs", primitive: "Spacing/4",  value: 4,  use: "Icon-only button, chip" },
      { name: "spacing/component/padding-sm", primitive: "Spacing/8",  value: 8,  use: "Small button, tag, badge" },
      { name: "spacing/component/padding-md", primitive: "Spacing/12", value: 12, use: "Input, medium component" },
      { name: "spacing/component/padding-lg", primitive: "Spacing/16", value: 16, use: "Default button, card" },
      { name: "spacing/component/padding-xl", primitive: "Spacing/24", value: 24, use: "Large card, modal" },
    ],
  },
  {
    name: "Component — Gap",
    description: "Gap between elements inside a component",
    tokens: [
      { name: "spacing/component/gap-xs", primitive: "Spacing/4",  value: 4,  use: "Icon + label (tight)" },
      { name: "spacing/component/gap-sm", primitive: "Spacing/8",  value: 8,  use: "Icon + label (default)" },
      { name: "spacing/component/gap-md", primitive: "Spacing/12", value: 12, use: "Form field gap" },
      { name: "spacing/component/gap-lg", primitive: "Spacing/16", value: 16, use: "Card section gap" },
    ],
  },
  {
    name: "Layout",
    description: "Layout spacing — section gaps and page margins",
    tokens: [
      { name: "spacing/layout/section-sm",      primitive: "Spacing/32", value: 32, use: "Small gap between sections" },
      { name: "spacing/layout/section-md",      primitive: "Spacing/48", value: 48, use: "Default gap between sections" },
      { name: "spacing/layout/section-lg",      primitive: "Spacing/64", value: 64, use: "Large gap — hero section" },
      { name: "spacing/layout/page-margin-sm",  primitive: "Spacing/16", value: 16, use: "Mobile page margin" },
      { name: "spacing/layout/page-margin-md",  primitive: "Spacing/32", value: 32, use: "Tablet page margin" },
      { name: "spacing/layout/page-margin-lg",  primitive: "Spacing/64", value: 64, use: "Desktop page margin" },
    ],
  },
  {
    name: "Inline",
    description: "Horizontal spacing between inline elements",
    tokens: [
      { name: "spacing/inline/xs", primitive: "Spacing/4",  value: 4,  use: "Icon + text (tight)" },
      { name: "spacing/inline/sm", primitive: "Spacing/8",  value: 8,  use: "Default inline gap" },
      { name: "spacing/inline/md", primitive: "Spacing/12", value: 12, use: "Label + helper text" },
      { name: "spacing/inline/lg", primitive: "Spacing/16", value: 16, use: "Large inline gap" },
    ],
  },
  {
    name: "Stack",
    description: "Vertical spacing between stacked elements",
    tokens: [
      { name: "spacing/stack/xs", primitive: "Spacing/8",  value: 8,  use: "Dense list item gap" },
      { name: "spacing/stack/sm", primitive: "Spacing/16", value: 16, use: "Default list item gap" },
      { name: "spacing/stack/md", primitive: "Spacing/24", value: 24, use: "Card stack gap" },
      { name: "spacing/stack/lg", primitive: "Spacing/40", value: 40, use: "Section stack gap" },
      { name: "spacing/stack/xl", primitive: "Spacing/56", value: 56, use: "Large section stack" },
    ],
  },
];

// ---------------------------------------------------------------------------
// Sub-components
// ---------------------------------------------------------------------------
const FONT = "'Outfit', -apple-system, BlinkMacSystemFont, sans-serif";
const BRAND = "#00ac8c";
const MAX_BAR = 64;

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

function SpacingRow({ token }) {
  const barWidth = Math.round((token.value / MAX_BAR) * 48);
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
      {/* Visual bar */}
      <div style={{ width: 60, flexShrink: 0, display: "flex", alignItems: "center" }}>
        <div
          style={{
            width: 48,
            height: 20,
            background: "#eaeaea",
            borderRadius: 3,
            border: "1.5px solid #c7c7c7",
            overflow: "hidden",
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              left: 0,
              top: "50%",
              transform: "translateY(-50%)",
              width: Math.max(barWidth, 3),
              height: 10,
              background: BRAND,
              borderRadius: 2,
            }}
          />
        </div>
      </div>

      {/* Token name */}
      <div style={{ width: 256, flexShrink: 0 }}>
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
      <div style={{ width: 140, flexShrink: 0 }}>
        <span style={{ fontSize: 12, fontFamily: FONT, color: "#6b7280" }}>
          → {token.primitive}
        </span>
      </div>

      {/* Value */}
      <div style={{ width: 60, flexShrink: 0 }}>
        <span
          style={{
            fontSize: 12,
            fontFamily: "'JetBrains Mono', 'Fira Code', 'Courier New', monospace",
            color: "#374151",
          }}
        >
          {token.value}px
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

function SpacingGroup({ group }) {
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
        <ColHeader width={60}>Scale</ColHeader>
        <ColHeader width={256}>Token Name</ColHeader>
        <ColHeader width={140}>Primitive</ColHeader>
        <ColHeader width={60}>Value</ColHeader>
        <ColHeader width={undefined}>Use Case</ColHeader>
      </div>

      {group.tokens.map((t) => (
        <SpacingRow key={t.name} token={t} />
      ))}
    </div>
  );
}

function SpacingDocPage() {
  const totalTokens = SPACING_GROUPS.reduce((acc, g) => acc + g.tokens.length, 0);
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
            background: "#e7f3ff",
            color: "#1a6fa3",
            fontSize: 11,
            fontWeight: 600,
            fontFamily: FONT,
            padding: "3px 10px",
            borderRadius: 12,
            marginBottom: 12,
            border: "1px solid #b3d9f7",
          }}
        >
          Spacing
        </div>
        <h1 style={{ margin: 0, fontSize: 28, fontWeight: 700, fontFamily: FONT, color: "#111827" }}>
          Spacing Tokens
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
          Semantic spacing tokens — describe usage context, not just pixel values.
          Used for <strong>padding</strong>, <strong>gap</strong>, and <strong>margin</strong>.
        </p>
      </div>

      {SPACING_GROUPS.map((group) => (
        <SpacingGroup key={group.name} group={group} />
      ))}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Storybook exports
// ---------------------------------------------------------------------------
export default {
  title: "Design System/Spacing Tokens",
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Semantic spacing token documentation — sourced from Figma DS-Testing-with-AI (node 5185:4). Each token maps a usage context to a primitive alias and pixel value.",
      },
    },
  },
};

export const Documentation = {
  name: "All Spacing Tokens",
  render: () => <SpacingDocPage />,
};

export const ComponentPadding = {
  render: () => (
    <div style={{ padding: "40px 48px", fontFamily: FONT, maxWidth: 960 }}>
      <SpacingGroup group={SPACING_GROUPS[0]} />
    </div>
  ),
};

export const ComponentGap = {
  render: () => (
    <div style={{ padding: "40px 48px", fontFamily: FONT, maxWidth: 960 }}>
      <SpacingGroup group={SPACING_GROUPS[1]} />
    </div>
  ),
};

export const Layout = {
  render: () => (
    <div style={{ padding: "40px 48px", fontFamily: FONT, maxWidth: 960 }}>
      <SpacingGroup group={SPACING_GROUPS[2]} />
    </div>
  ),
};

export const Inline = {
  render: () => (
    <div style={{ padding: "40px 48px", fontFamily: FONT, maxWidth: 960 }}>
      <SpacingGroup group={SPACING_GROUPS[3]} />
    </div>
  ),
};

export const Stack = {
  render: () => (
    <div style={{ padding: "40px 48px", fontFamily: FONT, maxWidth: 960 }}>
      <SpacingGroup group={SPACING_GROUPS[4]} />
    </div>
  ),
};
