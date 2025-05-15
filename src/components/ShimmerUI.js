const ShimmerUI = () => {
  return (
    <div className="shimmer-container" style={{ display: "flex", flexWrap: "wrap", gap: "16px", padding: "16px" }}>
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className="shimmer-card"
        >
          <div style={{ width: "100%", height: "140px", background: "#e0e0e0", borderRadius: "8px 8px 0 0", marginBottom: "12px" }}></div>
          <div style={{ width: "70%", height: "16px", background: "#e0e0e0", margin: "8px auto", borderRadius: "4px" }}></div>
          <div style={{ width: "50%", height: "12px", background: "#e0e0e0", margin: "8px auto", borderRadius: "4px" }}></div>
        </div>
      ))}
      <style>
        {`
          @keyframes shimmer {
            0% { background-position: -200% 0; }
            100% { background-position: 200% 0; }
          }
        `}
      </style>
    </div>
  )
}

export default ShimmerUI;