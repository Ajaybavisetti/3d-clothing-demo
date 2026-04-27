import { Canvas } from "@react-three/fiber";
import Scene from "./Scene";

export default function ModelViewer({ modelPath }) {
  return (
    <Canvas style={{ height: "500px" }}>
      <Scene modelPath={modelPath} />
    </Canvas>
  );
}