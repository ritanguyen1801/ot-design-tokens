import React from "react";

// ---------------------------------------------------------------------------
// Token data — extracted from Figma "📖 Token Documentation" (node 5185:4)
// Chain: Semantic token → Primitive alias → hex value
// ---------------------------------------------------------------------------
const TOKEN_GROUPS = [
  {
    name: "Background",
    description: "Used for page backgrounds, modals, panels — fill on FRAME/RECTANGLE",
    tokens: [
      { name: "color/bg/default",  primitive: "Base/White",    hex: "#ffffff", use: "Main background — page, card, modal" },
      { name: "color/bg/subtle",   primitive: "Grey/50",       hex: "#f6f6f6", use: "Secondary background — sidebar, table row hover" },
      { name: "color/bg/muted",    primitive: "Grey/100",      hex: "#e7e7e7", use: "Muted background — divider bg, skeleton" },
      { name: "color/bg/inverse",  primitive: "Grey/950",      hex: "#050505", use: "Dark background — dark tooltip, dark badge" },
      { name: "color/bg/brand",    primitive: "Brand/Primary", hex: "#00ac8c", use: "Brand background — primary button, active state" },
      { name: "color/bg/disabled", primitive: "Grey/100",      hex: "#e7e7e7", use: "Disabled background — deactivated component" },
    ],
  },
  {
    name: "Surface",
    description: "Elevation model — distinguishes surface levels",
    tokens: [
      { name: "color/surface/default", primitive: "Base/White",    hex: "#ffffff", use: "Card, panel — sits on bg/default" },
      { name: "color/surface/raised",  primitive: "Base/White",    hex: "#ffffff", use: "Dropdown, popover — elevated above surface/default" },
      { name: "color/surface/sunken",  primitive: "Grey/50",       hex: "#f6f6f6", use: "Input background, code block — recessed" },
      { name: "color/surface/brand",   primitive: "Brand/Primary", hex: "#00ac8c", use: "Brand surface — selected item highlight" },
    ],
  },
  {
    name: "Text",
    description: "Text color — apply to TEXT nodes only",
    tokens: [
      { name: "color/text/default",  primitive: "Grey/950",             hex: "#050505", use: "Body text, heading, primary label" },
      { name: "color/text/subtle",   primitive: "Grey/500",             hex: "#6d6d6d", use: "Placeholder, helper text, caption" },
      { name: "color/text/disabled", primitive: "Grey/500",             hex: "#6d6d6d", use: "Text in disabled state" },
      { name: "color/text/inverse",  primitive: "Base/White",           hex: "#ffffff", use: "Text on dark background — button label" },
      { name: "color/text/brand",    primitive: "Brand/Primary",        hex: "#00ac8c", use: "Link, selected label, brand emphasis" },
      { name: "color/text/error",    primitive: "Status/Red/600",       hex: "#e5271d", use: "Error message, required asterisk" },
      { name: "color/text/success",  primitive: "Status/Green/600",     hex: "#338c2d", use: "Success message, positive value" },
      { name: "color/text/warning",  primitive: "Status/Yellow/600",    hex: "#ce8600", use: "Warning message, caution label" },
      { name: "color/text/info",     primitive: "Status/Dark Blue/600", hex: "#37617a", use: "Info message, neutral status" },
      { name: "color/text/link",     primitive: "Brand/Primary",        hex: "#00ac8c", use: "Hyperlink text" },
    ],
  },
  {
    name: "Border",
    description: "Border color — stroke on FRAME/RECTANGLE",
    tokens: [
      { name: "color/border/default",  primitive: "Grey/100",       hex: "#e7e7e7", use: "Default border — card, input, divider" },
      { name: "color/border/strong",   primitive: "Grey/300",       hex: "#b0b0b0", use: "Strong border — hover state" },
      { name: "color/border/disabled", primitive: "Grey/200",       hex: "#d1d1d1", use: "Disabled border" },
      { name: "color/border/active",   primitive: "Brand/Primary",  hex: "#00ac8c", use: "Focused input border, selected state" },
      { name: "color/border/error",    primitive: "Status/Red/600", hex: "#e5271d", use: "Input error state border" },
      { name: "color/border/focus",    primitive: "Brand/Primary",  hex: "#00ac8c", use: "Focus ring — accessibility outline" },
    ],
  },
  {
    name: "Icon",
    description: "Icon fill color — apply to SVG/vector fills",
    tokens: [
      { name: "color/icon/default",  primitive: "Grey/500",          hex: "#6d6d6d", use: "Default icon" },
      { name: "color/icon/subtle",   primitive: "Grey/400",          hex: "#888888", use: "Secondary icon, decorative" },
      { name: "color/icon/disabled", primitive: "Grey/300",          hex: "#b0b0b0", use: "Icon disabled" },
      { name: "color/icon/inverse",  primitive: "Base/White",        hex: "#ffffff", use: "Icon on dark background" },
      { name: "color/icon/brand",    primitive: "Brand/Primary",     hex: "#00ac8c", use: "Brand icon, active state" },
      { name: "color/icon/error",    primitive: "Status/Red/600",    hex: "#e5271d", use: "Icon error/destructive" },
      { name: "color/icon/success",  primitive: "Status/Green/600",  hex: "#338c2d", use: "Icon success/positive" },
      { name: "color/icon/warning",  primitive: "Status/Yellow/600", hex: "#ce8600", use: "Icon warning/caution" },
    ],
  },
  {
    name: "Feedback",
    description: "Semantic feedback colors for alerts, badges, and status indicators",
    tokens: [
      { name: "color/feedback/error/bg",          primitive: "Status/Red/50",         hex: "#fff2f1", use: "Alert error background" },
      { name: "color/feedback/error/bg/subtle",   primitive: "Status/Red/100",        hex: "#ffe2e1", use: "Badge error background" },
      { name: "color/feedback/error/border",      primitive: "Status/Red/600",        hex: "#e5271d", use: "Alert error border, icon" },
      { name: "color/feedback/error/fg",          primitive: "Status/Red/800",        hex: "#a01b14", use: "Alert error text" },
      { name: "color/feedback/success/bg",        primitive: "Status/Green/50",       hex: "#f3fbf2", use: "Alert success background" },
      { name: "color/feedback/success/bg/subtle", primitive: "Status/Green/100",      hex: "#e3f7e1", use: "Badge success background" },
      { name: "color/feedback/success/border",    primitive: "Status/Green/600",      hex: "#338c2d", use: "Alert success border, icon" },
      { name: "color/feedback/success/fg",        primitive: "Status/Green/800",      hex: "#265823", use: "Alert success text" },
      { name: "color/feedback/warning/bg",        primitive: "Status/Yellow/50",      hex: "#fefbe8", use: "Alert warning background" },
      { name: "color/feedback/warning/bg/subtle", primitive: "Status/Yellow/100",     hex: "#fff8c2", use: "Badge warning background" },
      { name: "color/feedback/warning/border",    primitive: "Status/Yellow/600",     hex: "#ce8600", use: "Alert warning border, icon" },
      { name: "color/feedback/warning/fg",        primitive: "Status/Yellow/800",     hex: "#88490b", use: "Alert warning text" },
      { name: "color/feedback/info/bg",           primitive: "Status/Dark Blue/50",   hex: "#f2f8f9", use: "Alert info background" },
      { name: "color/feedback/info/bg/subtle",    primitive: "Status/Dark Blue/100",  hex: "#ddecf0", use: "Badge info background" },
      { name: "color/feedback/info/border",       primitive: "Status/Dark Blue/600",  hex: "#37617a", use: "Alert info border, icon" },
      { name: "color/feedback/info/fg",           primitive: "Status/Dark Blue/800",  hex: "#314859", use: "Alert info text" },
    ],
  },
];

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------
function isLight(hex) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return (r * 299 + g * 587 + b * 114) / 1000 > 180;
}

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

function TokenRow({ token }) {
  const light = isLight(token.hex);
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
      <div style={{ width: 44, flexShrink: 0 }}>
        <div
          style={{
            width: 28,
            height: 28,
            borderRadius: 6,
            background: token.hex,
            border: light ? "1px solid #e7e7e7" : "none",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        />
      </div>

      {/* Token name */}
      <div style={{ width: 212, flexShrink: 0 }}>
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
      <div style={{ width: 160, flexShrink: 0 }}>
        <span
          style={{
            fontSize: 12,
            fontFamily: FONT,
            color: "#6b7280",
          }}
        >
          → {token.primitive}
        </span>
      </div>

      {/* Hex */}
      <div style={{ width: 80, flexShrink: 0 }}>
        <span
          style={{
            fontSize: 12,
            fontFamily: "'JetBrains Mono', 'Fira Code', 'Courier New', monospace",
            color: "#374151",
          }}
        >
          {token.hex}
        </span>
      </div>

      {/* Use case */}
      <div style={{ flex: 1 }}>
        <span
          style={{
            fontSize: 12,
            fontFamily: FONT,
            color: "#6b7280",
          }}
        >
          {token.use}
        </span>
      </div>
    </div>
  );
}

function TokenGroup({ group }) {
  return (
    <div style={{ marginBottom: 40 }}>
      {/* Group header */}
      <div
        style={{
          borderBottom: "2px solid #e7e7e7",
          paddingBottom: 12,
          marginBottom: 0,
        }}
      >
        <h2
          style={{
            margin: 0,
            fontSize: 16,
            fontWeight: 700,
            fontFamily: FONT,
            color: "#111827",
          }}
        >
          {group.name}
        </h2>
        <p
          style={{
            margin: "4px 0 0",
            fontSize: 12,
            fontFamily: FONT,
            color: "#6b7280",
          }}
        >
          {group.description}
        </p>
      </div>

      {/* Column headers */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 0,
          padding: "8px 0",
          borderBottom: "1px solid #e7e7e7",
        }}
      >
        <ColHeader width={44}>Swatch</ColHeader>
        <ColHeader width={212}>Token Name</ColHeader>
        <ColHeader width={160}>Primitive</ColHeader>
        <ColHeader width={80}>Hex</ColHeader>
        <ColHeader width={undefined}>Use Case</ColHeader>
      </div>

      {/* Rows */}
      {group.tokens.map((t) => (
        <TokenRow key={t.name} token={t} />
      ))}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Page wrapper
// ---------------------------------------------------------------------------
function TokenDocPage() {
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
      {/* Page header */}
      <div style={{ marginBottom: 40 }}>
        <div
          style={{
            display: "inline-block",
            background: "#f0fdf9",
            color: "#00ac8c",
            fontSize: 11,
            fontWeight: 600,
            fontFamily: FONT,
            padding: "3px 10px",
            borderRadius: 12,
            marginBottom: 12,
            border: "1px solid #b2f0e3",
          }}
        >
          Semantic Layer
        </div>
        <h1
          style={{
            margin: 0,
            fontSize: 28,
            fontWeight: 700,
            fontFamily: FONT,
            color: "#111827",
          }}
        >
          Color Tokens
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
            {TOKEN_GROUPS.reduce((acc, g) => acc + g.tokens.length, 0)} tokens
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
          Semantic color tokens — each token represents a UI role, not a specific color value.
          Chain: <strong>Semantic → Primitive → hex</strong>
        </p>
      </div>

      {/* Token groups */}
      {TOKEN_GROUPS.map((group) => (
        <TokenGroup key={group.name} group={group} />
      ))}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Storybook exports
// ---------------------------------------------------------------------------
export default {
  title: "Design System/Color Tokens",
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "Semantic color token documentation — sourced from Figma DS-Testing-with-AI (node 5185:4). Each token maps a UI role to a primitive alias and hex value.",
      },
    },
  },
};

export const Documentation = {
  name: "All Color Tokens",
  render: () => <TokenDocPage />,
};

export const Background = {
  render: () => (
    <div style={{ padding: "40px 48px", fontFamily: FONT, maxWidth: 960 }}>
      <TokenGroup group={TOKEN_GROUPS[0]} />
    </div>
  ),
};

export const Surface = {
  render: () => (
    <div style={{ padding: "40px 48px", fontFamily: FONT, maxWidth: 960 }}>
      <TokenGroup group={TOKEN_GROUPS[1]} />
    </div>
  ),
};

export const Text = {
  render: () => (
    <div style={{ padding: "40px 48px", fontFamily: FONT, maxWidth: 960 }}>
      <TokenGroup group={TOKEN_GROUPS[2]} />
    </div>
  ),
};

export const Border = {
  render: () => (
    <div style={{ padding: "40px 48px", fontFamily: FONT, maxWidth: 960 }}>
      <TokenGroup group={TOKEN_GROUPS[3]} />
    </div>
  ),
};

export const Icon = {
  render: () => (
    <div style={{ padding: "40px 48px", fontFamily: FONT, maxWidth: 960 }}>
      <TokenGroup group={TOKEN_GROUPS[4]} />
    </div>
  ),
};

export const Feedback = {
  render: () => (
    <div style={{ padding: "40px 48px", fontFamily: FONT, maxWidth: 960 }}>
      <TokenGroup group={TOKEN_GROUPS[5]} />
    </div>
  ),
};
