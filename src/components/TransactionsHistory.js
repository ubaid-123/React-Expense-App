import  React, { useContext } from 'react';
import { Transactions } from './Transactions';
import { GlobalContext } from '../context/GlobalState';

export const TransactionHistory = ()=>{
    const { transactions } = useContext(GlobalContext);

    return (
        <div>
            <h3>
                Transaction History
            </h3>
            <ul className="list">
                {transactions.map(transaction => 
                    (
                    <Transactions key={transaction.id} transaction={transaction} />
                    )
                )}
            </ul>
        </div>
    )
}