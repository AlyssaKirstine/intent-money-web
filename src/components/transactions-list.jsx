import React, { useState, useEffect }  from 'react';

import firebase from '../firebase';

const SORT_OPTIONS = {
    'DATE_ASC': {column: 'date', direction: 'asc'},
    'DATE_DESC': {column: 'date', direction: 'desc'},
}

function useTransactions(sortBy = 'DATE_DESC') {
    const [transactions, setTransactions] = useState([])

    useEffect(() => {
        // unsubscribe callback()
        const unsubscribe = firebase
            .firestore()
            .collection('transactions')
            .orderBy(SORT_OPTIONS[sortBy].column, SORT_OPTIONS[sortBy].direction)
            .onSnapshot((snapshot) => {
                const newTransactions = snapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data()
                }))

                setTransactions(newTransactions);
            })
            
            return () => unsubscribe() // this is run when the component is unmounted
    }, [sortBy]) // when sortBy changes, useEffect will rerun

    return transactions
}
const TransactionsList = () => {
    const [sortBy, setSortBy] = useState('DATE_DESC')
    const transactions = useTransactions(sortBy);
    return (
        <div>
            <h2>Transactions</h2>
            <div>
                <label>Sort  By:</label>{' '}
                <select value={sortBy} onChange={e => setSortBy(e.currentTarget.value)}>
                    <option value="DATE_DESC">Date (latest first)</option>
                    <option value="DATE_ASC">Date (earliest first)</option>
                    <option disabled>---</option>
                </select>
            </div>
            <ol>
                {transactions.map((transaction) =>
                <li key={transaction.id}>
                <div className="transaction">
                    {transaction.title}
                    <p className="date"> - { transaction.date.toDate().toString() }</p>
                </div>
            </li>
                )}
            </ol>
        </div>
    )
}

export default TransactionsList;