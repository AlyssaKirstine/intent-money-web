import React, { useState } from 'react';

import firebase from '../firebase'

const AddTransactionForm = () => {
    const [title, setTitle] = useState('')
    const [date, setDate] = useState('')

    function onSubmit(e) {
        e.preventDefault() // prevents page from refreshing

        firebase
            .firestore()
            .collection('transactions')
            .add({
                title,
                date: new Date(date)
            })
            .then(() => {
                setTitle('')
                setDate('')
            })
    }
    return (
        <form onSubmit={onSubmit}>
            <h4>Add Transaction</h4>
            <div>
                <label>Title</label>
                <input type="text" value={title} onChange={e => setTitle(e.currentTarget.value)}/>
            </div>
            <div>
                <label>Date</label>
                <input type="date" value={date} onChange={e => setDate(e.currentTarget.value)}/>
            </div>
            <button>Add Transaction</button>
        </form>
    )
}

export default AddTransactionForm;