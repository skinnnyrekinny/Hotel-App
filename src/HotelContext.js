import React, { createContext, useState, useEffect } from "react";

export const HotelContext = createContext();

export const HotelProvider = (props) => {
    
    const [hotels, setHotels] = useState();

    const myAPI = 'https://f1cbd1dc-a8fe-49c5-9c8f-4a7cc6cf5026.mock.pstmn.io/hotels';

    const getHotels = async () => {
        const response = await fetch(myAPI);
        const data = await response.json();
        setHotels(data);
    }

    useEffect(() => {
        getHotels()
    }, []);
    
    return(
        <HotelContext.Provider value={[hotels, setHotels]}> 
            {props.children}
        </HotelContext.Provider>
    );
}