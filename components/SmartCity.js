export default function SmartCity() {

const buildings = Array.from(
{ length:30 },
(_,i)=>({

x:(Math.random()-0.5)*12,

height:
Math.random()*3+1,

z:
(Math.random()-0.5)*4

}))

return(

<group position={[0,-3,0]}>

{buildings.map((b,index)=>(

<mesh
key={index}
position={[
b.x,
b.height/2,
b.z
]}
>

<boxGeometry
args={[
0.4,
b.height,
0.4
]}
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
