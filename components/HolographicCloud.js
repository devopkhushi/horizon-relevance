import { Text } from "@react-three/drei";

export default function HolographicCloud(){

return(

<group>

{/* cloud body */}

<mesh position={[0,2,0]}>
<sphereGeometry args={[1.6,64,64]}/>
<meshStandardMaterial
color="#00ffcc"
emissive="#00ffcc"
emissiveIntensity={2}
transparent
opacity={0.8}
/>
</mesh>


<mesh position={[-1,1.5,0]}>
<sphereGeometry args={[1,64,64]}/>
<meshStandardMaterial
color="#00ffcc"
emissive="#00ffcc"
emissiveIntensity={2}
/>
</mesh>

<mesh position={[1,1.5,0]}>
<sphereGeometry args={[1,64,64]}/>
<meshStandardMaterial
color="#00ffcc"
emissive="#00ffcc"
emissiveIntensity={2}
/>
</mesh>


{/* title */}

<Text
position={[0,2,2]}
fontSize={0.35}
color="white"
anchorX="center"
>

HORIZON
RELEVANCE

</Text>

</group>

)

}