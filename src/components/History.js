import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

import Transaction from './Transaction'

export default function History() {
    const { transaction } = useContext(GlobalContext)
    // console.log(context)

    return (
        <div>
            <h3>Historia płatności</h3>
            <ul id="list" className="list">
                {transaction.map(trans => (
                   <Transaction
                   key={trans.id}
                   text={trans.text}
                   amount={trans.amount}
                   />
                ))}

            </ul>
        </div>
    )
}
