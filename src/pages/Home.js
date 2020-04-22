import React from 'react';
import firebase from '../firebase';

import TransactionsList from '../components/transactions-list';
import AddTransactionForm from '../components/add-transaction-form';

const Home = () => {
    return (
        <>
            <h1>Home</h1>
            <button onClick={() => firebase.auth().signOut()}>Sign out</button>

            <div>
                <h1>My Budget</h1>
                {/* <TransactionsList />
                <AddTransactionForm /> */}
            </div>
        </>
    )
}

export default Home;