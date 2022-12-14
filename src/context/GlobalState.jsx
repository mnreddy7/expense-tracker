import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer'
//Intial State 
const initialState = {
  //{ id: 1, text: 'Flower', amount: -20 },
 // { id: 2, text: 'Salary', amount: 300 },
  //{ id: 3, text: 'Book', amount: -10 },
 // { id: 4, text: 'Camera', amount: 150 }
  transactions: []
}

//Create Context
export const GlobalContext = createContext(initialState)

//Provider Component

const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

// Actions
 function deleteTransaction(id){
   dispatch({
     type:'DELETE_TXN',
     payload : id
   });
 }

   function addTxn(txn){
   dispatch({
     type:'ADD_TXN',
     payload : txn
   });
 }

  
  return (<GlobalContext.Provider value={{
    transactions: state.transactions,
    deleteTransaction,
    addTxn
   }}>
    {children}
  </GlobalContext.Provider>);
}

export default GlobalProvider;