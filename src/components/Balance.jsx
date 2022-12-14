import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

const Balance = () => {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map(transaction => transaction.amount);
  const total = amounts.reduce((acc, item) => (acc+=item), 0).toFixed(2);
  return (
    <React.Fragment>
      <h4>You Balance</h4>
      <h1 id="balance">
        $0.00
      </h1>
    </React.Fragment>
  )
}

export default Balance
