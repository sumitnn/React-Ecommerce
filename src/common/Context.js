import React,{createContext,useState} from 'react';
import { data } from '../dummy.js';

export const DataContext = createContext();
const Context = () => {
  const [Data] = useState(data);
  
  
  return (
    <>
      <DataContext.Provider value={Data}>

      </DataContext.Provider>
    </>
  )
}

export default Context