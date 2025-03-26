import { useState } from "react";

function Heron() {
    const [sideA, setA] = useState("");
    const [sideB, setB] = useState("");
    const [sideC, setC] = useState("");
    const [area, setArea] = useState("");

    function calculateArea(event) {
        event.preventDefault();
        const a = parseFloat(sideA);
        const b = parseFloat(sideB);
        const c = parseFloat(sideC);

        if (a < b + c && b < a + c && c < a + b) {
            const areaValue = 0.25 * Math.sqrt(4 * a * a * b * b - Math.pow(a * a + b * b - c * c, 2));
            setArea(`Area: ${areaValue.toFixed(2)} units squared`);
        } else {
            setArea("Error: Invalid Side Lengths");
        }
    }

    return (
        <div className="heron">
            <h1>Heron's Formula</h1>
            <form onSubmit={calculateArea}>
                <input type="double" id = "heronA" value={sideA} onChange={(event) => setA(event.target.value)} placeholder="Side A" required />
                <input type="double" id = "heronB" value={sideB} onChange={(event) => setB(event.target.value)} placeholder="Side B" required />
                <input type="double" id = "heronC" value={sideC} onChange={(event) => setC(event.target.value)} placeholder="Side C" required />
                <button type="submit">Submit</button>
            </form>
            <input type="text" value={area} readOnly placeholder="Area" />
        </div>
    );
}

export default Heron;