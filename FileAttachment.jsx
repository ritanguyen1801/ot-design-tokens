import React from "react";

// ---------------------------------------------------------------------------
// Icons (inline SVG so the component has no external asset dependencies)
// ---------------------------------------------------------------------------

const FileIcon = ({ className = "" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <polyline points="14 2 14 8 20 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <line x1="16" y1="13" x2="8" y2="13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <line x1="16" y1="17" x2="8" y2="17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <polyline points="10 9 9 9 8 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const TrashIcon = ({ className = "" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <polyline points="3 6 5 6 21 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M10 11v6M14 11v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const DownloadIcon = ({ className = "" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <polyline points="7 10 12 15 17 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <line x1="12" y1="15" x2="12" y2="3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const AlertIcon = ({ className = "" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
    <line x1="12" y1="8" x2="12" y2="12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <line x1="12" y1="16" x2="12.01" y2="16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

// ---------------------------------------------------------------------------
// File type colour map — drives the icon accent colour
// ---------------------------------------------------------------------------

const FILE_TYPE_COLORS = {
  xlsx: "#1D6F42",
  xls:  "#1D6F42",
  docx: "#2B6CB0",
  doc:  "#2B6CB0",
  pdf:  "#E53E3E",
  png:  "#805AD5",
  jpg:  "#805AD5",
  jpeg: "#805AD5",
  csv:  "#2C7A7B",
  default: "#00A790",
};

function getExtension(filename = "") {
  return filename.split(".").pop().toLowerCase();
}

function getFileColor(filename) {
  const ext = getExtension(filename);
  return FILE_TYPE_COLORS[ext] ?? FILE_TYPE_COLORS.default;
}

// ---------------------------------------------------------------------------
// Progress bar (used in the "uploading" variant)
// ---------------------------------------------------------------------------

function ProgressBar({ percent = 60 }) {
  return (
    <div style={{ width: "100%", height: 4, background: "#e6e7e7", borderRadius: 2, overflow: "hidden" }}>
      <div
        style={{
          height: "100%",
          width: `${percent}%`,
          background: "#00A790",
          borderRadius: 2,
          transition: "width 0.3s ease",
        }}
      />
    </div>
  );
}

// ---------------------------------------------------------------------------
// Core FileAttachment component
// ---------------------------------------------------------------------------

/**
 * FileAttachment — variants:
 *   "default"   — normal uploaded file
 *   "hover"     — hovered / focused state
 *   "uploading" — in-progress upload with progress bar
 *   "error"     — upload failed or file problem
 *   "disabled"  — read-only, no actions
 *   "download"  — shows a download icon instead of delete
 */
export function FileAttachment({
  filename = "File name.xlsx",
  meta = "Uploaded 02 Nov 2025",
  variant = "default",
  uploadPercent = 60,
  onDelete,
  onDownload,
  style = {},
}) {
  const ext = getExtension(filename);
  const iconColor = variant === "disabled" ? "#aeb2b0" : getFileColor(filename);

  // Container styles per variant
  const containerBase = {
    display: "flex",
    alignItems: "center",
    gap: 8,
    padding: "8px 12px",
    border: "1px solid",
    borderRadius: 0,
    width: "100%",
    boxSizing: "border-box",
    fontFamily: "'Outfit', sans-serif",
    position: "relative",
    transition: "background 0.15s ease, border-color 0.15s ease",
  };

  const variantStyles = {
    default: {
      background: "#f5f6f6",
      borderColor: "#e6e7e7",
    },
    hover: {
      background: "#eef0f0",
      borderColor: "#c4c9c7",
      boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
    },
    uploading: {
      background: "#f5f6f6",
      borderColor: "#e6e7e7",
    },
    error: {
      background: "#fff5f5",
      borderColor: "#fc8181",
    },
    disabled: {
      background: "#fafafa",
      borderColor: "#e6e7e7",
      opacity: 0.6,
      pointerEvents: "none",
    },
    download: {
      background: "#f5f6f6",
      borderColor: "#e6e7e7",
    },
  };

  const containerStyle = {
    ...containerBase,
    ...(variantStyles[variant] ?? variantStyles.default),
    ...style,
  };

  const isUploading = variant === "uploading";
  const isError = variant === "error";
  const isDisabled = variant === "disabled";
  const isDownload = variant === "download";

  return (
    <div style={containerStyle}>
      {/* File icon */}
      <div style={{ position: "relative", flexShrink: 0, width: 24, height: 24 }}>
        <FileIcon
          className=""
          style={{
            width: 24,
            height: 24,
            color: isError ? "#E53E3E" : iconColor,
          }}
        />
        {/* Extension badge */}
        <span
          style={{
            position: "absolute",
            bottom: 2,
            left: "50%",
            transform: "translateX(-50%)",
            fontSize: 5,
            fontWeight: 700,
            color: isError ? "#E53E3E" : iconColor,
            letterSpacing: 0,
            textTransform: "uppercase",
            lineHeight: 1,
          }}
        >
          {ext}
        </span>
      </div>

      {/* Text content */}
      <div style={{ flex: "1 0 0", display: "flex", flexDirection: "column", gap: 4, minWidth: 0 }}>
        <span
          style={{
            fontSize: 16,
            fontWeight: 400,
            lineHeight: "24px",
            color: isDisabled ? "#aeb2b0" : isError ? "#C53030" : "#050505",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
          }}
        >
          {filename}
        </span>

        {isUploading ? (
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            <ProgressBar percent={uploadPercent} />
            <span style={{ fontSize: 12, color: "#aeb2b0", lineHeight: "16px" }}>
              Uploading… {uploadPercent}%
            </span>
          </div>
        ) : (
          <span
            style={{
              fontSize: 14,
              fontWeight: 400,
              lineHeight: "22px",
              color: isError ? "#FC8181" : "#aeb2b0",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {isError ? "Upload failed — please try again" : meta}
          </span>
        )}
      </div>

      {/* Action icon */}
      {!isUploading && !isDisabled && (
        isError ? (
          <AlertIcon
            style={{ width: 20, height: 20, flexShrink: 0, color: "#E53E3E" }}
          />
        ) : isDownload ? (
          <button
            onClick={onDownload}
            style={actionButtonStyle}
            aria-label="Download file"
          >
            <DownloadIcon style={{ width: 20, height: 20, color: "#6b7280" }} />
          </button>
        ) : (
          <button
            onClick={onDelete}
            style={actionButtonStyle}
            aria-label="Delete file"
          >
            <TrashIcon style={{ width: 20, height: 20, color: "#6b7280" }} />
          </button>
        )
      )}

      {isUploading && (
        <span
          style={{
            fontSize: 12,
            color: "#aeb2b0",
            flexShrink: 0,
            cursor: "pointer",
            textDecoration: "underline",
          }}
        >
          Cancel
        </span>
      )}
    </div>
  );
}

const actionButtonStyle = {
  background: "none",
  border: "none",
  padding: 2,
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: 4,
  flexShrink: 0,
  transition: "background 0.15s ease",
};

// ---------------------------------------------------------------------------
// Showcase — renders all variants side-by-side for review
// ---------------------------------------------------------------------------

export default function FileAttachmentShowcase() {
  const variants = [
    {
      label: "Default",
      description: "Standard uploaded file",
      props: {
        variant: "default",
        filename: "Report_Q4_2025.xlsx",
        meta: "Uploaded 02 Nov 2025",
      },
    },
    {
      label: "Hover",
      description: "Cursor over the row",
      props: {
        variant: "hover",
        filename: "Report_Q4_2025.xlsx",
        meta: "Uploaded 02 Nov 2025",
      },
    },
    {
      label: "Uploading",
      description: "File transfer in progress",
      props: {
        variant: "uploading",
        filename: "Large_Dataset.csv",
        meta: "",
        uploadPercent: 62,
      },
    },
    {
      label: "Error",
      description: "Upload failed or file is invalid",
      props: {
        variant: "error",
        filename: "Corrupted_file.pdf",
        meta: "",
      },
    },
    {
      label: "Disabled",
      description: "Read-only, no interactions",
      props: {
        variant: "disabled",
        filename: "Locked_document.docx",
        meta: "Uploaded 15 Jan 2025",
      },
    },
    {
      label: "Download action",
      description: "Download instead of delete",
      props: {
        variant: "download",
        filename: "Invoice_March.pdf",
        meta: "Uploaded 01 Mar 2025",
      },
    },
    {
      label: "Image file",
      description: "PNG / JPG file type colour",
      props: {
        variant: "default",
        filename: "Screenshot.png",
        meta: "Uploaded 10 Apr 2025",
      },
    },
    {
      label: "Word document",
      description: "DOCX file type colour",
      props: {
        variant: "default",
        filename: "Project_Brief.docx",
        meta: "Uploaded 22 Feb 2025",
      },
    },
  ];

  return (
    <div
      style={{
        padding: 32,
        background: "#ffffff",
        fontFamily: "'Outfit', sans-serif",
        maxWidth: 640,
      }}
    >
      <h2 style={{ fontSize: 20, fontWeight: 600, marginBottom: 4, color: "#050505" }}>
        FileAttachment — Variants
      </h2>
      <p style={{ fontSize: 14, color: "#6b7280", marginBottom: 32 }}>
        All visual states of the file attachment row component.
      </p>

      <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
        {variants.map(({ label, description, props }) => (
          <div key={label}>
            <div style={{ marginBottom: 6 }}>
              <span style={{ fontSize: 12, fontWeight: 600, color: "#374151", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                {label}
              </span>
              <span style={{ fontSize: 12, color: "#9ca3af", marginLeft: 8 }}>
                {description}
              </span>
            </div>
            <FileAttachment {...props} />
          </div>
        ))}
      </div>
    </div>
  );
}
