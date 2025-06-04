import React,{useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'
import  numberWithCommas  from '../utils/format'

const Balance = () => {
  const {transactions} = useContext(GlobalContext)

  const amounts = transactions.map(transaction => transaction.amount)
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2) // toFixed(2) is used to round the number to 2 decimal places
  return (
    <>
      <h4>Your Balance</h4>
      <h1 >₹{numberWithCommas(total)}</h1>
    </>
  )
}

export default Balance
