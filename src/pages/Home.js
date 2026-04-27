import { useState } from "react";
import ModelViewer from "../components/ModelViewer";

export default function Home() {
  const [model, setModel] = useState("/models/outfit1.glb");

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      
      {/* 🔹 Header */}
      <h1>GrowBiz Fashion</h1>
      <p>Experience clothing like never before with our 3D virtual preview</p>

      {/* 🔹 3D Viewer */}
      <ModelViewer modelPath={model} />

      {/* 🔹 Buttons */}
      <div style={{ marginTop: "20px" }}>
        <button onClick={() => setModel("/models/outfit1.glb")}>
          Casual Outfit
        </button>

        <button onClick={() => setModel("/models/outfit2.glb")}>
          Formal Outfit
        </button>
      </div>

      {/* 🔹 About Section */}
      <div style={{ marginTop: "40px", maxWidth: "600px", marginInline: "auto" }}>
        <h2>About GrowBiz</h2>
        <p>
          GrowBiz is a modern clothing brand focused on innovation and customer
          experience. Our platform allows users to explore outfits in a 3D
          environment, helping them visualize style, fit, and design before making a purchase.
        </p>
      </div>

      {/* 🔹 Features */}
      <div style={{ marginTop: "30px" }}>
        <h2>Features</h2>
        <ul style={{ listStyle: "none" }}>
          <li>✔ Interactive 3D outfit preview</li>
          <li>✔ Rotate and zoom models</li>
          <li>✔ Switch between multiple styles</li>
          <li>✔ Real-time visualization</li>
        </ul>
      </div>

      {/* 🔹 Footer */}
      <div style={{ marginTop: "40px", fontSize: "14px", opacity: 0.7 }}>
        <p>© 2026 GrowBiz. All rights reserved.</p>
      </div>

    </div>
  );
}