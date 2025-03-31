import { useState } from "react";

function Ambig() {
    const [angleA, setAngle] = useState("");
    const [sideA, setA] = useState("");
    const [sideB, setB] = useState("");
    const [type, setType] = useState("");

    function triangleType(event) {
        event.preventDefault();
        const angle = parseFloat(angleA);
        const a = parseFloat(sideA);
        const b = parseFloat(sideB);
        const h = (b * Math.sin(angle * Math.PI / 180)).toFixed(2);
    
        if (angle > 0 && angle <= 90) {
            if (h < a && a < b) {
                setType("two triangles (ambiguous case)");
            } else if (a == h) {
                setType("right triangle");
            } else if (a < h) {
                setType("no triangle");
            } else if (a >= b) {
                setType("one triangle");
            } 
        } else if (angle < 180 && angle > 90){
            if (a < b || a == b) {
                setType("no triangle");
            } else if (a > b) {
                setType("one triangle");
            }
        } else{
            setType("Error: Angle must be between 0 and 180");
        }
        console.log(`Triangle type: ${type}`);
    }

    return (
        <div className="ambig">
            <h1>Ambiguous Case</h1>
            <form id="ambig" onSubmit={triangleType}>
                <input type="double" id="angleA" value={angleA} onChange={(event) => setAngle(event.target.value)} placeholder="Angle A" required />
                <input type="double" id="sideA" value={sideA} onChange={(event) => setA(event.target.value)} placeholder="Side A" required />
                <input type="double" id="sideB" value={sideB} onChange={(event) => setB(event.target.value)} placeholder="Side B" required />
                <button type="submit">Submit</button>
            </form>
            <input type="text" value={type} readOnly placeholder="Triangle Type" />
        </div>
    );
}

export default Ambig;