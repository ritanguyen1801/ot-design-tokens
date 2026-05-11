import React from "react";
import { Button } from "./Button";

export default {
  title: "Design System/Button",
  component: Button,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Design system button component. Supports 5 hierarchy levels, 3 sizes, icon variants, and 3 interaction states.",
      },
    },
  },
  argTypes: {
    label: {
      control: "text",
      description: 'Button label text (not shown when icon is "Only")',
    },
    hierarchy: {
      control: "select",
      options: ["Primary", "Secondary color", "Tertiary", "Link color", "Link grey"],
      description: "Visual hierarchy / style variant",
    },
    icon: {
      control: "select",
      options: ["False", "Leading", "Only"],
      description: "Icon placement",
    },
    size: {
      control: "select",
      options: ["Small", "Medium", "Large"],
      description: "Button size",
    },
    state: {
      control: "select",
      options: ["Default", "Hover", "Disable"],
      description: "Interaction state",
    },
    onClick: { action: "clicked" },
  },
};

// ---------------------------------------------------------------------------
// Default (interactive playground)
// ---------------------------------------------------------------------------
export const Playground = {
  args: {
    label: "Button",
    hierarchy: "Primary",
    icon: "False",
    size: "Medium",
    state: "Default",
  },
};

// ---------------------------------------------------------------------------
// Hierarchy showcase — all variants at Medium / Default
// ---------------------------------------------------------------------------
export const AllHierarchies = {
  name: "All Hierarchies",
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 24, padding: 32, background: "#f9fafb" }}>
      {["Primary", "Secondary color", "Tertiary", "Link color", "Link grey"].map((h) => (
        <div key={h} style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <span
            style={{
              width: 140,
              fontSize: 13,
              fontFamily: "'Outfit', sans-serif",
              color: "#6b7280",
              flexShrink: 0,
            }}
          >
            {h}
          </span>
          <Button hierarchy={h} size="Medium" icon="False" state="Default" />
          <Button hierarchy={h} size="Medium" icon="Leading" state="Default" />
          <Button hierarchy={h} size="Medium" icon="Only" state="Default" />
        </div>
      ))}
    </div>
  ),
};

// ---------------------------------------------------------------------------
// Size showcase
// ---------------------------------------------------------------------------
export const AllSizes = {
  name: "All Sizes",
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 24, padding: 32, background: "#f9fafb" }}>
      {["Small", "Medium", "Large"].map((s) => (
        <div key={s} style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <span
            style={{
              width: 80,
              fontSize: 13,
              fontFamily: "'Outfit', sans-serif",
              color: "#6b7280",
              flexShrink: 0,
            }}
          >
            {s}
          </span>
          <Button hierarchy="Primary" size={s} icon="False" state="Default" />
          <Button hierarchy="Primary" size={s} icon="Leading" state="Default" />
          <Button hierarchy="Primary" size={s} icon="Only" state="Default" />
        </div>
      ))}
    </div>
  ),
};

// ---------------------------------------------------------------------------
// States showcase
// ---------------------------------------------------------------------------
export const AllStates = {
  name: "All States",
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 32, padding: 32, background: "#f9fafb" }}>
      {["Primary", "Secondary color", "Tertiary"].map((h) => (
        <div key={h}>
          <p
            style={{
              margin: "0 0 12px",
              fontSize: 13,
              fontWeight: 600,
              fontFamily: "'Outfit', sans-serif",
              color: "#374151",
              textTransform: "uppercase",
              letterSpacing: "0.05em",
            }}
          >
            {h}
          </p>
          <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
            {["Default", "Hover", "Disable"].map((st) => (
              <div key={st} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
                <Button hierarchy={h} size="Medium" icon="False" state={st} />
                <span style={{ fontSize: 11, color: "#9ca3af", fontFamily: "'Outfit', sans-serif" }}>
                  {st}
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  ),
};

// ---------------------------------------------------------------------------
// Individual named stories
// ---------------------------------------------------------------------------
export const Primary = {
  args: { label: "Button", hierarchy: "Primary", size: "Medium", icon: "False", state: "Default" },
};

export const SecondaryColor = {
  name: "Secondary Color",
  args: { label: "Button", hierarchy: "Secondary color", size: "Medium", icon: "False", state: "Default" },
};

export const Tertiary = {
  args: { label: "Button", hierarchy: "Tertiary", size: "Medium", icon: "False", state: "Default" },
};

export const LinkColor = {
  name: "Link Color",
  args: { label: "Button", hierarchy: "Link color", size: "Medium", icon: "False", state: "Default" },
};

export const LinkGrey = {
  name: "Link Grey",
  args: { label: "Button", hierarchy: "Link grey", size: "Medium", icon: "False", state: "Default" },
};

export const WithLeadingIcon = {
  name: "With Leading Icon",
  args: { label: "Button", hierarchy: "Primary", size: "Medium", icon: "Leading", state: "Default" },
};

export const IconOnly = {
  name: "Icon Only",
  args: { label: "Action", hierarchy: "Primary", size: "Medium", icon: "Only", state: "Default" },
};

export const Disabled = {
  args: { label: "Button", hierarchy: "Primary", size: "Medium", icon: "False", state: "Disable" },
};
