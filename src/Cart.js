import React, {useContext} from 'react';
import { useNavigate} from "react-router-dom";
import Hotel from './Hotel';
import { HotelContext } from "./HotelContext";
import Subtotal from "./Subtotal";


function Cart() {
    const [hotels, setHotels] = useContext(HotelContext);
    return(
        <div>
            <h1>This is Cart page</h1>
            {
                hotels?.map((hotel) => (
                    <Hotel
                        key={hotel.id}
                        price={hotel.price}
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