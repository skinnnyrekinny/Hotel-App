import React, { createContext, useState, useEffect } from "react";

export const HotelContext = createContext();

export const HotelProvider = (props) => {
    
    const [hotels, setHotels] = useState([
        {
        "id": "1",
        "name": "Domenica Lebsack",
        "price": 30,
        "avatar": "https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "description": "Cosmos quasar bits of moving fluff a still more glorious dawn awaits concept of the number one how far away. Extraordinary claims require extraordinary evidence Orion's sword"
        },
        {
        "id": "2",
        "name": "Sarai O'Reilly",
        "price": 60,
        "avatar": "https://images.pexels.com/photos/6127330/pexels-photo-6127330.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        "description": "Gummies candy cake gummies biscuit cupcake oat cake cotton candy jujubes. Dessert pastry toffee sweet roll pie gingerbread dragée dessert lollipop. Liquorice marshmallow tiramisu danish."
        },
        {
        "id": "3",
        "name": "Olen Moore",
        "price": 27,
        "avatar": "https://images.pexels.com/photos/2373201/pexels-photo-2373201.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        "description":"Preserve and cherish that pale blue dot Hypatia a very small stage in a vast cosmic arena paroxysm of global death a mote of dust suspended in a sunbeam Jean-François Champollion."
        },
        {
        "id": "4",
        "name": "Jarvis Orn",
        "price": 35,
        "avatar": "https://images.pexels.com/photos/1579739/pexels-photo-1579739.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        "description": "Danish sweet roll caramels tootsie roll dessert sweet cheesecake. Halvah marzipan sweet roll danish sugar plum. Gummi bears ice cream topping cake jelly beans gummi bears."
        },
        {
        "id": "5",
        "name": "Ona Kirlin",
        "price": 70,
        "avatar": "https://images.pexels.com/photos/1179156/pexels-photo-1179156.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        "description": "Oat cake marshmallow cake toffee. Pastry lemon drops soufflé oat cake bonbon gummies jelly beans bonbon dragée."
        }
        ]);

    //const myAPI = 'https://f1cbd1dc-a8fe-49c5-9c8f-4a7cc6cf5026.mock.pstmn.io/hotels';

    // const getHotels = async () => {
    //     const response = await fetch(myAPI);
    //     const data = await response.json();
    //     setHotels(data.hits);
    // }

    // useEffect(() => {
    //     getHotels()
    // }, []);
    
    return(
        <HotelContext.Provider value={[hotels, setHotels]}> 
            {props.children}
        </HotelContext.Provider>
    );
}