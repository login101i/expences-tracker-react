import React, { useContext } from 'react'

import { GlobalContext } from '../context/GlobalState'

export default function IncomeExpences() {


    const { transaction } = useContext(GlobalContext)

    const amounts=transaction.map(trans=>trans.amount)


    const income = amounts
    .filter(amount => amount > 0)
    .reduce((all,item)=>(all+=item),0).toFixed(2)
    console.log(income)

    const expence = amounts
        .filter(amount => amount < 0)
        .reduce((all, item) => (all += item), 0).toFixed(2)
    console.log(expence)

    return (
        <div>
            <div className="inc-exp-container">
                <div>
                    <h4>Przychody</h4>
                    <p id="money-plus" className="money plus">+{income} zl</p>
                </div>
                <div>
                    <h4>Wydatki</h4>
                    <p id="money-minus" className="money minus">{expence} zł</p>
                </div>
            </div>
        </div>
    )
}
