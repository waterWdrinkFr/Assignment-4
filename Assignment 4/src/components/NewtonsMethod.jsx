import { useState } from "react";

function Newton() {
    let [x, guess] = useState("");
    let [root, setRoot] = useState("");
    
    function getRoot(event) {
        event.preventDefault();
        let x0 = parseFloat(x);
        let x1 = approximateRoot(x0);
        setRoot(`Approximated Root: ${x1.toFixed(3)}`);

        function approximateRoot(x0) {
            let y = 6 * Math.pow(x0, 4) - 13 * Math.pow(x0, 3) - 18 * Math.pow(x0, 2) + 7 * x0 + 6;
            let yPrime = 24 * Math.pow(x0, 3) - 39 * Math.pow(x0, 2) - 36 * x0 + 7;
            let x1 = x0 - y / yPrime;
        
            if (Math.abs(x0 - x1) <= 0.0001) {
                return x1;
            }
            return approximateRoot(x1);
        }
    }

    return (
        <div className="newton">
            <h1>Newton's Method</h1>
            <form id="newton" onSubmit={getRoot}>
                <input type="double" id="x" value={x} onChange={(event) => guess(event.target.value)} placeholder="Initial Guess" required />
                <button type="submit">Submit</button>
            </form>
            <input type="text" value={root} readOnly placeholder="Approximated Root" />
        </div>
    );
}

export default Newton;