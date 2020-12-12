import React, { useContext } from 'react'

import { GlobalContext } from '../context/GlobalState'

export default function Balance() {

    const { transaction } = useContext(GlobalContext)

    const amounts = transaction.map(trans => trans.amount)
    console.log(amounts)

    const total = amounts.reduce((all, item) => all += item, 0).toFixed(2)
    console.log(total)

    return (
        <div>
            <h4>Twoje środki</h4>
            <h1 id="balance"> {total}</h1>
        </div>
    )
}
