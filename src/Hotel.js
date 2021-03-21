import React, { useState } from 'react';
import style from "./hotel.module.css";
import trash from "./trash.png";

function Hotel({id, name, price, description, image}) {

    const [count, setCount] = useState(0);

    const sum = () => {
        return price * count;
    };

    return(
        <div className={style.hotel}>
            <img className={style.image} src={image} />
            <div className={style.title}>
                <h2>{name}</h2>
                <p>{description}</p>
            </div>
            <div className={style.summary}>
                <button className={style.trashBtn} type="button">
                    <img src={trash} className={style.trash}/>
                </button>
                <div className={style.counter}>
                    <button id="decrement" disabled={count === 0 ? true:false} onClick={() => {setCount(count - 1)}}>-</button>
                    <h4>
                        {count}
                    </h4>
                    <button id="increment" onClick={() => setCount(count + 1)}>+</button>
                </div>
                <div className="cost">
                    <h3>${sum()}</h3>
                </div>
            </div>
        </div>
    );
}

export default Hotel;