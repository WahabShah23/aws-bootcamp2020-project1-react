import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';
// import { transaction } from './transaction';
import { Transaction } from './Transaction';

export const TransactionList = () => {

    // const context = useContext(GlobalContext);
    const {transactions} = useContext(GlobalContext);

    let display;
    if(transactions.length) {
        display =
        <ul id="list" className="list">
            {transactions.map(transaction => ( <Transaction key={transaction.id} transaction={transaction} /> ))}
        </ul>
    } else {
        display = <p> No transactions so far. Add from below </p>
    }


    return (
        <>
            <h3>Previous Transactions</h3>
            {display}
        </>
    )
}
