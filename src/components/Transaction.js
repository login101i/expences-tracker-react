import React, {useContext} from 'react'

import {GlobalContext} from '../context/GlobalState'

export default function Transaction({text, amount, id}) {

const {deleteTransaction}=useContext(GlobalContext)

    const sign=amount>0 ? "+":"-"
    return (
        <>
            <li className={amount>0? "plus":"minus"}>
                {text} <span>{sign} {Math.abs(amount)}</span>
                
                <button
                onClick={()=>deleteTransaction(id)}
                 className="delete-btn">x

                 
                 </button>
            </li> 
        </>
    )
}
