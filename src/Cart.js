import React, {useContext} from 'react';
import Skeleton from "react-loading-skeleton";
import Hotel from './Hotel';
import { HotelContext } from "./HotelContext";
import Subtotal from "./Subtotal";
import "./Cart.css";

function Cart() {
    const [hotels, setHotels] = useContext(HotelContext);

    return(
        <div className="cart">
            <h1 className="header">Embrace the Adventure</h1>
            <div className="card">
                {
                    hotels?.map((hotel) => (
                        <Hotel
                            id={hotel.id}
                            price={hotel.price}
                            name={hotel.name}
                            image={hotel.avatar}
                            description={hotel.description}
                        />
                    )) || 
                    <div>
                        <Skeleton width={1200} height={300} />
                    </div>
                }
            </div>
            <Subtotal />
        </div>
    );
}

export default Cart;