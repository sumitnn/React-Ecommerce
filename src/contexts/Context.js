import React, { createContext,useReducer } from 'react';
const Data = [
    {
        name: 'Cycle1',
        price: 200,
        image: './images/1.png',
        description: 'A simplified way to generate massive mock data based on a schema, using the awesome fake/random data generators like (FakerJs, ChanceJs, CasualJs and RandExpJs), all in one tool to generate your fake data for testing.',
        fastdelivery: false,
        instock: true,
    }, {
        name: 'Cycle2',
        price: 20000,
        image: './images/7.png',
        description: 'A simplified way to generate massive mock data based on a schema, using the awesome fake/random data generators like (FakerJs, ChanceJs, CasualJs and RandExpJs), all in one tool to generate your fake data for testing.',
        fastdelivery: false,
        instock: false,
    }, {
        name: 'Cycle5',
        price: 40000,
        image: './images/10.png',
        description: 'A simplified way to generate massive mock data based on a schema, using the awesome fake/random data generators like (FakerJs, ChanceJs, CasualJs and RandExpJs), all in one tool to generate your fake data for testing.',
        fastdelivery: true,
        instock: true,
    }, {
        name: 'Cycle6',
        price: 60000,
        image: './images/3.png',
        description: 'A simplified way to generate massive mock data based on a schema, using the awesome fake/random data generators like (FakerJs, ChanceJs, CasualJs and RandExpJs), all in one tool to generate your fake data for testing.',
        fastdelivery: false,
        instock: true,
    }, {
        name: 'Cycle',
        price: 28000,
        image: './images/6.png',
        description: 'A simplified way to generate massive mock data based on a schema, using the awesome fake/random data generators like (FakerJs, ChanceJs, CasualJs and RandExpJs), all in one tool to generate your fake data for testing.',
        fastdelivery: false,
        instock: true,
    }, {
        name: 'Cycle7',
        price: 200,
        image: './images/11.png',
        description: 'A simplified way to generate massive mock data based on a schema, using the awesome fake/random data generators like (FakerJs, ChanceJs, CasualJs and RandExpJs), all in one tool to generate your fake data for testing.',
        fastdelivery: false,
        instock: true,
    }, {
        name: 'Cycle',
        price: 10000,
        image: './images/10.png',
        description: 'A simplified way to generate massive mock data based on a schema, using the awesome fake/random data generators like (FakerJs, ChanceJs, CasualJs and RandExpJs), all in one tool to generate your fake data for testing.',
        fastdelivery: true,
        instock: false,
    }, {
        name: 'Cycle',
        price: 8888,
        image: './images/12.png',
        description: 'A simplified way to generate massive mock data based on a schema, using the awesome fake/random data generators like (FakerJs, ChanceJs, CasualJs and RandExpJs), all in one tool to generate your fake data for testing.',
        fastdelivery: false,
        instock: true,
    }, {
        name: 'Cycle',
        price: 20000,
        image: './images/10.png',
        description: 'A simplified way to generate massive mock data based on a schema, using the awesome fake/random data generators like (FakerJs, ChanceJs, CasualJs and RandExpJs), all in one tool to generate your fake data for testing.',
        fastdelivery: false,
        instock: false,
    }, {
        name: 'Cycle',
        price: 20000,
        image: './images/9.png',
        description: 'A simplified way to generate massive mock data based on a schema, using the awesome fake/random data generators like (FakerJs, ChanceJs, CasualJs and RandExpJs), all in one tool to generate your fake data for testing.',
        fastdelivery: false,
        instock: false,
    }, {
        name: 'Cycle',
        price: 20000,
        image: './images/2.png',
        description: 'A simplified way to generate massive mock data based on a schema, using the awesome fake/random data generators like (FakerJs, ChanceJs, CasualJs and RandExpJs), all in one tool to generate your fake data for testing.',
        fastdelivery: false,
        instock: false,
    }, {
        name: 'Cycle',
        price: 20000,
        image: './images/11.png',
        description: 'A simplified way to generate massive mock data based on a schema, using the awesome fake/random data generators like (FakerJs, ChanceJs, CasualJs and RandExpJs), all in one tool to generate your fake data for testing.',
        fastdelivery: true,
        instock: true,
    }, {
        name: 'Cycle',
        price: 20000,
        image: './images/1.png',
        description: 'A simplified way to generate massive mock data based on a schema, using the awesome fake/random data generators like (FakerJs, ChanceJs, CasualJs and RandExpJs), all in one tool to generate your fake data for testing.',
        fastdelivery: false,
        instock: false,
    }, {
        name: 'Cycle',
        price: 2000,
        image: './images/10.png',
        description: 'A simplified way to generate massive mock data based on a schema, using the awesome fake/random data generators like (FakerJs, ChanceJs, CasualJs and RandExpJs), all in one tool to generate your fake data for testing.',
        fastdelivery: false,
        instock: false,
    }, {
        name: 'Cycle',
        price: 7000,
        image: './images/12.png',
        description: 'A simplified way to generate massive mock data based on a schema, using the awesome fake/random data generators like (FakerJs, ChanceJs, CasualJs and RandExpJs), all in one tool to generate your fake data for testing.',
        fastdelivery: true,
        instock: true,
    }, {
        name: 'Cycle',
        price: 20000,
        image: './images/2.png',
        description: 'A simplified way to generate massive mock data based on a schema, using the awesome fake/random data generators like (FakerJs, ChanceJs, CasualJs and RandExpJs), all in one tool to generate your fake data for testing.',
        fastdelivery: false,
        instock: true,
    }, {
        name: 'Cycle',
        price: 20500,
        image: './images/3.png',
        description: 'A simplified way to generate massive mock data based on a schema, using the awesome fake/random data generators like (FakerJs, ChanceJs, CasualJs and RandExpJs), all in one tool to generate your fake data for testing.',
        fastdelivery: true,
        instock: false,
    },
]


export const DataContext = createContext();



const Context = (props) => {
    const reducer = (state,action) => {
        if (action.type === 'Increase') {
            return state + 1
        } else {
            return state - 1
        }

    }
    const reducerr = (statee, action) => {
        if (action.type === 'ascending') {
            console.log(typeof(statee))
            statee.sort((a, b) => (a.price > b.price) ? 1 : -1)
            return statee
        } 

    }
    const [state, dispatch] = useReducer(reducer, 0);
    const [statee, dispatchh] = useReducer(reducerr, Data);
    return (
        <DataContext.Provider value={[statee,state,dispatch,dispatchh]}>
            
                {props.children}
            
          
      </DataContext.Provider>
    
  )
}

export default Context