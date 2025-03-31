import { useState } from "react";
import './PolynomialFunction.css';

function Poly() {
    const [coeff, setCoeff] = useState("");
    const [exp, setExp] = useState("");
    const [xValue, setX] = useState("");
    const [yValue, setY] = useState("");
    const [func, setFunc] = useState("");

    function getFunction(event) {
        event.preventDefault();
        const c = coeff.split(" ");
        const e = exp.split(" ");
        const x = parseFloat(xValue);
        let poly = "";

        if (c.length != e.length) {
            document.getElementById("eval").value = "Error: Invalid Input";
        } else {
            let y = 0;
            for (let i = 0; i < c.length; i++) {
                y += parseFloat(c[i]) * Math.pow(x, parseFloat(e[i]));
                if (i < c.length - 1) {
                    if (parseFloat(e[i]) != 0) {
                        poly += `${c[i]}x^${e[i]}+`;
                    } else {
                        poly += `${c[i]}+`;
                    }
                } else {
                    if (parseFloat(e[i]) != 0) {
                        poly += `${c[i]}x^${e[i]}`;
                    } else {
                        poly += `${c[i]}`;
                    }
                }
            }
            setFunc(`f(x) = ${poly}`);
            setY(`f(${x}) = ${y}`);
        }
    }

    return (
        <div className="poly">
            <h1>Polynomial Function</h1>
            <form id="poly" onSubmit={getFunction}>
                <input type="double" id="coeff" value={coeff} onChange={(event) => setCoeff(event.target.value)} placeholder="Coefficients" required />
                <input type="double" id="exp" value={exp} onChange={(event) => setExp(event.target.value)} placeholder="Exponents" required />
                <input type="double" id="x" value={xValue} onChange={(event) => setX(event.target.value)} placeholder="x value" required />
                <button type="submit">Submit</button>
            </form>
            <input type="text" value={func} readOnly placeholder="Function" />
            <input type="text" value={yValue} readOnly placeholder="Polynomial Evaluation" />
        </div>
    );
}

export default Poly;