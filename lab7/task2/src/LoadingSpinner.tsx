
export default function LoadingSpinner() {
    return (
      <div
        style={{
          margin: "2rem auto",
          width: "40px",
          height: "40px",
          border: "5px solid #ccc",
          borderTop: "5px solid #646cff",
          borderRadius: "50%",
          animation: "spin 1s linear infinite",
        }}
      />
    );
  }