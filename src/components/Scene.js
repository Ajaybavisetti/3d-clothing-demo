import { useGLTF, OrbitControls } from "@react-three/drei";

function Model({ path }) {
  const { scene } = useGLTF(path);
  return <primitive object={scene} scale={2} />;
}

export default function Scene({ modelPath }) {
  return (
    <>
      <ambientLight />
      <directionalLight position={[2, 2, 2]} />
      <Model path={modelPath} />
      <OrbitControls />
    </>
  );
}