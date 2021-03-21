import React, {useContext} from 'react';
import Hotel from './Hotel';
import { HotelContext } from "./HotelContext";
import Subtotal from "./Subtotal";
import "./Cart.css";

function Cart() {
    const [hotels, setHotels] = useContext(HotelContext);

    return(
        <div className="cart">
            <h1 className="header">Embrace the Adventure</h1>
            {
                hotels?.map((hotel) => (
                    <Hotel
                        id={hotel.id}
                        price={hotel.price}
                        sum={hotel.sum}
                        name={hotel.name}
                        image={hotel.avatar}
                        description={hotel.description}
                    />
                ))
            }
            <Subtotal />
        </div>
    );
}

export default Cart;