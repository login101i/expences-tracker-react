import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer'


const initialState = {
    transaction: [
        { id: 1, text: "Kwiaty", amount: 130 },
        { id: 2, text: "Czekoladki", amount: -30 },
        { id: 3, text: "Perfumy", amount: -5 },
    ]
}

export const GlobalContext = createContext(initialState)


// Provider

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)
    // To jest taki huj... Jak mam to wytłumaczyć hhahah

    // moje akcje dla reducera

    function deleteTransaction(id) {
        dispatch({
            type: 'DELETE',
            payload: id
        })
    }

    function addTransaction(transaction) {
        dispatch({
            type: 'ADD',
            payload: transaction
        })
    }

    return (
        <GlobalContext.Provider value={{
            transaction: state.transaction,
            deleteTransaction,
            addTransaction
        }}>
            {children}
        </GlobalContext.Provider>
    )
}