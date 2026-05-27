import { Canvas } from "@react-three/fiber";
import { Float, Text } from "@react-three/drei";

function Cloud() {
  return (
    <group>

      {/* Main cloud */}

      <mesh position={[0,1.5,0]}>
        <sphereGeometry args={[1.5,64,64]} />
        <meshStandardMaterial
          color="#22c55e"
          emissive="#22c55e"
          emissiveIntensity={2}
        />
      </mesh>

      <mesh position={[-1,1,0]}>
        <sphereGeometry args={[1,64,64]} />
        <meshStandardMaterial
          color="#22c55e"
          emissive="#22c55e"
          emissiveIntensity={2}
        />
      </mesh>

      <mesh position={[1,1,0]}>
        <sphereGeometry args={[1,64,64]} />
        <meshStandardMaterial
          color="#22c55e"
          emissive="#22c55e"
          emissiveIntensity={2}
        />
      </mesh>

      <Text
        position={[0,1.5,2]}
        fontSize={0.3}
        color="white"
        anchorX="center"
      >
        HORIZON CLOUD AI
      </Text>

    </group>
  );
}

function Buildings(){

const items = Array.from(
{length:20},
(_,i)=>({

x:(Math.random()-0.5)*12,
h:Math.random()*2+1

}))

return(

<group position={[0,-3,0]}>

{items.map((b,index)=>(

<mesh
key={index}
position={[
b.x,
b.h/2,
0
]}
>

<boxGeometry
args={[0.4,b.h,0.4]}
/>

<meshStandardMaterial
color="#0ea5e9"
emissive="#0ea5e9"
emissiveIntensity={0.4}
/>

</mesh>

))}

</group>

)

}

export default function HeroScene() {
  return (
    <section className="relative h-[700px] bg-[#020617]">

      <Canvas camera={{position:[0,0,10]}}>

        <ambientLight intensity={1}/>
        <pointLight position={[0,5,5]} intensity={2}/>

        <Float
          speed={2}
          floatIntensity={1}
        >
          <Cloud/>
        </Float>

        <Buildings/>

      </Canvas>

    </section>
  );
}