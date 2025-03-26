import { useState } from "react";

function Poly() {
    const [coeff, coefficients] = useState("");
    const [exp, exponents] = useState("");
    const [x, xValue] = useState("");
    const [y, yValue] = useState("");
    const [func, poly] = useState("");

    function getFunction(event) {
        event.preventDefault();
        const c = coeff.split(" ");
        const e = exp.split(" ");
        const x = parseFloat(x);
        let func = "";
        let y = 0;

        if (c.length != e.length) {
            document.getElementById("eval").value = "Error: Invalid Input";
        } else {
            let y = 0;
            for (let i = 0; i < coeff.length; i++) {
                y += parseFloat(coeff[i])*Math.pow(x, parseFloat(exp[i]));
                if (i < coeff.length-1) {
                    if (parseFloat(exp[i]) != 0){
                        func += `${coeff[i]}x^${exp[i]}+`;
                    } else {
                        func += `${coeff[i]}+`;
                    }
                } else {
                    if (parseFloat(exp[i]) != 0){
                        func += `${coeff[i]}x^${exp[i]}`;
                    } else {
                        func += `${coeff[i]}`;
                    }
                }
            }
            yValue(`f(x) = ${func}`);
            poly(`f(${x}) = ${y}`);
        }
    }

    return (
        <div className="poly">
        <h1>Polynomial Function</h1>
        <form id="poly" onSubmit={getFunction}>
            <input type="double" id="coeff" value={coeff} onChange={(event) => coefficients(event.target.value)} placeholder="Angle A" required />
            <input type="double" id="exp" value={exp} onChange={(event) => exponents(event.target.value)} placeholder="Side A" required />
            <input type="double" id="x" value={x} onChange={(event) => xValue(event.target.value)} placeholder="Side B" required />
            <button type="submit">Submit</button>
        </form>
        <input type="text" value={y} readOnly placeholder="Function" />
        <input type="text" value={func} readOnly placeholder="Polynomial Evaluation" />
    </div>
    );
}

export default Poly;