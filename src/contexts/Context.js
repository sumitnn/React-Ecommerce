import React, { createContext, useReducer,useContext } from 'react';
import { cartReducer,sideReducer } from '../contexts/reducer';

const Data = [
    {
        name: 'Cycle1',
        id:1,
        price: 200,
        image: './images/1.png',
        description: 'A simplified way to generate massive mock data based on a schema, using the awesome fake/random data generators like (FakerJs, ChanceJs, CasualJs and RandExpJs), all in one tool to generate your fake data for testing.',
        fastdelivery: false,
        instock: true,
    }, {
        name: 'Cycle2',
        id:2,
        price: 20000,
        image: './images/7.png',
        description: 'A simplified way to generate massive mock data based on a schema, using the awesome fake/random data generators like (FakerJs, ChanceJs, CasualJs and RandExpJs), all in one tool to generate your fake data for testing.',
        fastdelivery: false,
        instock: false,
    }, {
        name: 'Cycle5',
        id:3,
        price: 40000,
        image: './images/10.png',
        description: 'A simplified way to generate massive mock data based on a schema, using the awesome fake/random data generators like (FakerJs, ChanceJs, CasualJs and RandExpJs), all in one tool to generate your fake data for testing.',
        fastdelivery: true,
        instock: true,
    }, {
        name: 'Cycle6',
        id:4,
        price: 60000,
        image: './images/3.png',
        description: 'A simplified way to generate massive mock data based on a schema, using the awesome fake/random data generators like (FakerJs, ChanceJs, CasualJs and RandExpJs), all in one tool to generate your fake data for testing.',
        fastdelivery: false,
        instock: true,
    }, {
        name: 'Cycle',
        id:5,
        price: 28000,
        image: './images/6.png',
        description: 'A simplified way to generate massive mock data based on a schema, using the awesome fake/random data generators like (FakerJs, ChanceJs, CasualJs and RandExpJs), all in one tool to generate your fake data for testing.',
        fastdelivery: false,
        instock: true,
    }, {
        name: 'Cycle7',
        id:6,
        price: 200,
        image: './images/11.png',
        description: 'A simplified way to generate massive mock data based on a schema, using the awesome fake/random data generators like (FakerJs, ChanceJs, CasualJs and RandExpJs), all in one tool to generate your fake data for testing.',
        fastdelivery: false,
        instock: true,
    }, {
        name: 'Cycle',
        id: 7,
        price: 10000,
        image: './images/10.png',
        description: 'A simplified way to generate massive mock data based on a schema, using the awesome fake/random data generators like (FakerJs, ChanceJs, CasualJs and RandExpJs), all in one tool to generate your fake data for testing.',
        fastdelivery: true,
        instock: false,
    }, {
        name: 'Cycle',
        id: 8,
        price: 8888,
        image: './images/12.png',
        description: 'A simplified way to generate massive mock data based on a schema, using the awesome fake/random data generators like (FakerJs, ChanceJs, CasualJs and RandExpJs), all in one tool to generate your fake data for testing.',
        fastdelivery: false,
        instock: true,
    }, {
        name: 'Cycle',
        id: 9,
        price: 20000,
        image: './images/10.png',
        description: 'A simplified way to generate massive mock data based on a schema, using the awesome fake/random data generators like (FakerJs, ChanceJs, CasualJs and RandExpJs), all in one tool to generate your fake data for testing.',
        fastdelivery: false,
        instock: false,
    }, {
        name: 'Cycle',
        id: 10,
        price: 20000,
        image: './images/9.png',
        description: 'A simplified way to generate massive mock data based on a schema, using the awesome fake/random data generators like (FakerJs, ChanceJs, CasualJs and RandExpJs), all in one tool to generate your fake data for testing.',
        fastdelivery: false,
        instock: false,
    }, {
        name: 'Cycle',
        id: 11,
        price: 20000,
        image: './images/2.png',
        description: 'A simplified way to generate massive mock data based on a schema, using the awesome fake/random data generators like (FakerJs, ChanceJs, CasualJs and RandExpJs), all in one tool to generate your fake data for testing.',
        fastdelivery: false,
        instock: false,
    }, {
        name: 'Cycle',
        id: 12,
        price: 20000,
        image: './images/11.png',
        description: 'A simplified way to generate massive mock data based on a schema, using the awesome fake/random data generators like (FakerJs, ChanceJs, CasualJs and RandExpJs), all in one tool to generate your fake data for testing.',
        fastdelivery: true,
        instock: true,
    }, {
        name: 'Cycle',
        id: 13,
        price: 20000,
        image: './images/1.png',
        description: 'A simplified way to generate massive mock data based on a schema, using the awesome fake/random data generators like (FakerJs, ChanceJs, CasualJs and RandExpJs), all in one tool to generate your fake data for testing.',
        fastdelivery: false,
        instock: false,
    }, {
        name: 'Cycle',
        id: 14,
        price: 2000,
        image: './images/10.png',
        description: 'A simplified way to generate massive mock data based on a schema, using the awesome fake/random data generators like (FakerJs, ChanceJs, CasualJs and RandExpJs), all in one tool to generate your fake data for testing.',
        fastdelivery: false,
        instock: false,
    }, {
        name: 'Cycle',
        id: 15,
        price: 7000,
        image: './images/12.png',
        description: 'A simplified way to generate massive mock data based on a schema, using the awesome fake/random data generators like (FakerJs, ChanceJs, CasualJs and RandExpJs), all in one tool to generate your fake data for testing.',
        fastdelivery: true,
        instock: true,
    }, {
        name: 'Cycle',
        id: 16,
        price: 20000,
        image: './images/2.png',
        description: 'A simplified way to generate massive mock data based on a schema, using the awesome fake/random data generators like (FakerJs, ChanceJs, CasualJs and RandExpJs), all in one tool to generate your fake data for testing.',
        fastdelivery: false,
        instock: true,
    }, {
        name: 'Cycle',
        id: 17,
        price: 20500,
        image: './images/3.png',
        description: 'A simplified way to generate massive mock data based on a schema, using the awesome fake/random data generators like (FakerJs, ChanceJs, CasualJs and RandExpJs), all in one tool to generate your fake data for testing.',
        fastdelivery: true,
        instock: false,
    },
]

const Cart = createContext();
const Context = ({ children }) => {
    
    const [state, dispatch] = useReducer(cartReducer, {
        products: Data,
        cart: []
    });
    const [sstate, sdispatch] = useReducer(sideReducer, {
        byascending: false,
        bystock: false,
        byfastdelivery: false

    })

    return (
        <Cart.Provider value={{state,dispatch,sstate,sdispatch}}>
                {children}
      </Cart.Provider>
    
  )
}

export default Context;
export const CartState = () => {
    return useContext(Cart)
}
