import React, { useState, useContext } from 'react'

import { GlobalContext } from '../context/GlobalState'


export const NewTransaction = () => {
    const [text, setText] = useState('')
    const [amount, setAmount] = useState(0)


    const { addTransaction } = useContext(GlobalContext)

    const onSubmit = e => {
        e.preventDefault()

        const newTransaction={
            id:Math.floor(Math.random() * 10000000),
            text,
            amount:+amount

        }

        addTransaction(newTransaction)
        setText('')
        setAmount('')
    }



    return (
        <div>
            <h3>Dodaj nową transakcję</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="text">Tekst</label>
                    <input
                        type="text"
                        id="text"
                        placeholder="Wprowadź wartość tutaj"
                        onChange={e => setText(e.target.value)}
                        value={text}

                    />
                </div>
                <div className="form-control">
                    <label htmlFor="amount"
                    >Wartość <br />
            (ujemne - wydatki, dodatni - przychód)</label>
                    <input
                        type="number"
                        id="amount"
                        placeholder="Wprowadź wartość"
                        onChange={(e) => {
                            setAmount(e.target.value)

                        }}
                        value={amount}
                    />
                </div>
                <button className="btn">Dodaj transakcję </button>
            </form>
        </div>
    )
}
