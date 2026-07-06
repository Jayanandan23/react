import { useState } from "react";

export default function App() {
  // State to control visibility
  const [show, setShow] = useState(true);

  // Function to toggle visibility
  function toggle() {
    setShow(!show);
  }

  return (
    <div style={styles.card}>
      <button style={styles.btn} onClick={toggle}>
        {show ? "Hide" : "Show"} details
      </button>

      {show && (
        <p style={styles.text}>
          Here are the secret details! 🎉
        </p>
      )}
    </div>
  );
}

const styles = {
  card: {
    fontFamily: "system-ui",
    maxWidth: 320,
    margin: "40px auto",
    padding: 24,
    borderRadius: 16,
    textAlign: "center",
    boxShadow: "0 4px 20px rgba(0,0,0,.08)",
  },
  btn: {
    fontSize: 15,
    padding: "10px 18px",
    border: "none",
    borderRadius: 8,
    background: "#1e90ff",
    color: "white",
    cursor: "pointer",
  },
  text: {
    marginTop: 16,
    color: "#444",
  },
};