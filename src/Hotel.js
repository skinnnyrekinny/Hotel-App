import React, { useState } from 'react';
import style from "./hotel.module.css";

function Hotel({name, price, description, image}) {

    const [count, setCount] = useState(0);

    return(
        <div className={style.hotel}>
            <img className={style.image} src={image} />
            <div className={style.title}>
                <h2>{name}</h2>
                <p>{description}</p>
            </div>
            <div className={style.summary}>
                <div className={style.counter}>
                    <button id="decrement" disabled={count == 0 ? true:false} onClick={() => {setCount(count - 1)}}>-</button>
                    <h4>
                        {count}
                    </h4>
                    <button id="increment" onClick={() => setCount(count + 1)}>+</button>
                </div>
                <div className="cost">
                    <h3>${price * count}</h3>
                </div>
            </div>
        </div>
    );
}

export default Hotel;