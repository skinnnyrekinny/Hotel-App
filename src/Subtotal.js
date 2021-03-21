import React, { useContext, useState } from "react";
import { Link} from "react-router-dom";
import "./Subtotal.css"

function Subtotal() {
    const [sum, dispatch] = useState(0);

    return (
        <div className="subtotal">
            <h2>Subtotal: ${sum}</h2>
            <Link to="/payment">
                <button>
                    Buy
                </button>
            </Link>
        </div>
        
    )
}

export default Subtotal;