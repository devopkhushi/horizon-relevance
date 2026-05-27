import { Float, Text } from "@react-three/drei";

const cards = [
  {
    title: "AI Insights",
    position: [-5, 3, 0],
  },

  {
    title: "Cloud Optimize",
    position: [5, 3, 0],
  },

  {
    title: "Security",
    position: [-5, 0, 0],
  },

  {
    title: "Automation",
    position: [5, 0, 0],
  },
];

export default function FloatingCards() {
  return (
    <>
      {cards.map((item, index) => (
        <Float
          key={index}
          speed={2}
          rotationIntensity={0.2}
          floatIntensity={1}
        >
          <group position={item.position}>
            
            <mesh>
              <boxGeometry args={[2,1,0.2]}/>
              <meshStandardMaterial
                color="#07111f"
                emissive="#22c55e"
                emissiveIntensity={0.5}
              />
            </mesh>

            <Text
              position={[0,0,0.2]}
              fontSize={0.18}
              color="white"
              anchorX="center"
            >
              {item.title}
            </Text>

          </group>
        </Float>
      ))}
    </>
  );
}