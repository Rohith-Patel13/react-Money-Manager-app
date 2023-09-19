import {Component} from 'react'

import './index.css'

import MoneyDetails from '../MoneyDetails/index'

import TransactionItem from '../TransactionItem/index'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here
console.log(transactionTypeOptions)
class MoneyManager extends Component {
  render() {
    return (
      <div className="bg">
        <div className="firstContainer">
          <h1>Hi,Richard</h1>
          <p>
            Welcome back to your
            <span className="spanContent"> Money Manager</span>
          </p>
        </div>

        <div className="UlMoneyDetailsContainer">
          <MoneyDetails />
        </div>

        <div className="thirdContainer">
          <form className="formContainer">
            <h1>Add Transaction</h1>
            <div className="titleContainer">
              <label htmlFor="titleId">TITLE</label>
              <input id="titleId" type="text" placeholder="TITLE" />
            </div>

            <div className="amountContainer">
              <label htmlFor="amountId">AMOUNT</label>
              <input id="amountId" type="text" placeholder="AMOUNT" />
            </div>

            <div className="typeContainer">
              <label htmlFor="typeId">TYPE</label>
              <select id="typeId">
                <option selected>Income</option>
                <option>Expenses</option>
              </select>
            </div>

            <button type="button" className="formBtnEl">
              Add
            </button>
          </form>

          <div className="tableContainer">
            <h1>History</h1>
            <ul className="UlTableContainer">
              <li className="tableHeader">
                <p className="paraDescription tableHead">Title</p>
                <p className="paraDescription tableHead">Amount</p>
                <p className="paraDescription tableHead">Type</p>
              </li>
              <TransactionItem />
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
