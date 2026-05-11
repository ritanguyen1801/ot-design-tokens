import React from "react";

// ---------------------------------------------------------------------------
// Inline SVG icon — used as a generic leading/only icon placeholder
// (matches the circle icon pattern in the Figma design)
// ---------------------------------------------------------------------------
const CircleIcon = ({ size = 16, color = "currentColor" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    style={{ flexShrink: 0 }}
  >
    <circle cx="8" cy="8" r="6.5" stroke={color} strokeWidth="1.5" />
    <circle cx="8" cy="8" r="2.5" fill={color} />
  </svg>
);

// ---------------------------------------------------------------------------
// Design tokens (from Figma DS)
// ---------------------------------------------------------------------------
const tokens = {
  color: {
    bg: {
      brand:    "#00ac8c",
      brandHover: "#008f76",
      subtle:   "#f6f6f6",
      default:  "#ffffff",
      disabled: "#e7e7e7",
    },
    text: {
      inverse:  "#ffffff",
      brand:    "#00ac8c",
      default:  "#050505",
      disabled: "#6d6d6d",
    },
    border: {
      brand:    "#00ac8c",
      strong:   "#b0b0b0",
    },
  },
};

// ---------------------------------------------------------------------------
// Derived style helpers
// ---------------------------------------------------------------------------
function getHierarchyStyles(hierarchy, state) {
  const isDisabled = state === "Disable";
  const isHover    = state === "Hover";

  switch (hierarchy) {
    case "Primary":
      return {
        background:  isDisabled ? tokens.color.bg.disabled : isHover ? tokens.color.bg.brandHover : tokens.color.bg.brand,
        border:      "1px solid transparent",
        color:       isDisabled ? tokens.color.text.disabled : tokens.color.text.inverse,
      };

    case "Secondary color":
      return {
        background:  "transparent",
        border:      `1px solid ${isDisabled ? tokens.color.border.strong : tokens.color.border.brand}`,
        color:       isDisabled ? tokens.color.text.disabled : tokens.color.text.brand,
      };

    case "Tertiary":
      return {
        background:  isHover ? tokens.color.bg.subtle : tokens.color.bg.default,
        border:      `1px solid ${isHover ? tokens.color.bg.subtle : isDisabled ? tokens.color.border.strong : tokens.color.border.strong}`,
        color:       isDisabled ? tokens.color.text.disabled : tokens.color.text.default,
      };

    case "Link color":
      return {
        background:  "transparent",
        border:      "1px solid transparent",
        color:       isDisabled ? tokens.color.text.disabled : tokens.color.text.brand,
      };

    case "Link grey":
    default:
      return {
        background:  "transparent",
        border:      "1px solid transparent",
        color:       isDisabled ? tokens.color.text.disabled : tokens.color.text.default,
      };
  }
}

function getSizeStyles(size, iconVariant) {
  const isIconOnly = iconVariant === "Only";

  switch (size) {
    case "Small":
      return {
        paddingTop:    isIconOnly ? 8 : 4,
        paddingBottom: isIconOnly ? 8 : 4,
        paddingLeft:   isIconOnly ? 8 : 16,
        paddingRight:  isIconOnly ? 8 : 16,
        fontSize:      16,
        lineHeight:    "24px",
        iconSize:      16,
        gap:           8,
      };
    case "Large":
      return {
        paddingTop:    isIconOnly ? 8 : 8,
        paddingBottom: isIconOnly ? 8 : 8,
        paddingLeft:   isIconOnly ? 8 : 16,
        paddingRight:  isIconOnly ? 8 : 16,
        fontSize:      20,
        lineHeight:    "28px",
        iconSize:      24,
        gap:           8,
      };
    case "Medium":
    default:
      return {
        paddingTop:    isIconOnly ? 8 : 8,
        paddingBottom: isIconOnly ? 8 : 8,
        paddingLeft:   isIconOnly ? 8 : 16,
        paddingRight:  isIconOnly ? 8 : 16,
        fontSize:      16,
        lineHeight:    "24px",
        iconSize:      20,
        gap:           8,
      };
  }
}

// ---------------------------------------------------------------------------
// Button component
// ---------------------------------------------------------------------------

/**
 * Button — design system button component.
 *
 * Props:
 *   label      – button text (ignored when icon="Only")
 *   hierarchy  – "Primary" | "Secondary color" | "Tertiary" | "Link color" | "Link grey"
 *   icon       – "False" | "Leading" | "Only"
 *   size       – "Small" | "Medium" | "Large"
 *   state      – "Default" | "Hover" | "Disable"
 *   onClick    – click handler
 */
export function Button({
  label     = "Button",
  hierarchy = "Primary",
  icon      = "False",
  size      = "Medium",
  state     = "Default",
  onClick,
  style     = {},
  ...rest
}) {
  const isDisabled  = state === "Disable";
  const hasLeading  = icon === "Leading";
  const isIconOnly  = icon === "Only";

  const hierarchyStyles = getHierarchyStyles(hierarchy, state);
  const sizeStyles      = getSizeStyles(size, icon);

  const baseStyle = {
    display:       "inline-flex",
    alignItems:    "center",
    justifyContent: "center",
    gap:           hasLeading ? sizeStyles.gap : 0,
    paddingTop:    sizeStyles.paddingTop,
    paddingBottom: sizeStyles.paddingBottom,
    paddingLeft:   sizeStyles.paddingLeft,
    paddingRight:  sizeStyles.paddingRight,
    fontFamily:    "'Outfit', sans-serif",
    fontSize:      sizeStyles.fontSize,
    fontWeight:    400,
    lineHeight:    sizeStyles.lineHeight,
    whiteSpace:    "nowrap",
    cursor:        isDisabled ? "not-allowed" : "pointer",
    boxSizing:     "border-box",
    outline:       "none",
    borderRadius:  0,
    transition:    "background 0.15s ease, color 0.15s ease, border-color 0.15s ease",
    ...hierarchyStyles,
    ...style,
  };

  return (
    <button
      style={baseStyle}
      disabled={isDisabled}
      onClick={!isDisabled ? onClick : undefined}
      aria-label={isIconOnly ? label : undefined}
      {...rest}
    >
      {(hasLeading || isIconOnly) && (
        <CircleIcon size={sizeStyles.iconSize} color={hierarchyStyles.color} />
      )}
      {!isIconOnly && <span>{label}</span>}
    </button>
  );
}

export default Button;
