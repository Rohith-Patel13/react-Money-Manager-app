// Write your code here
import {Component} from 'react'

import './index.css'

// expenses = income - balance
// balance = income - expenses
// income = expenses + balance

class MoneyDetails extends Component {
  render() {
    const {moneyDetailsObjectProp} = this.props
    const {balance, income, expenses} = moneyDetailsObjectProp
    return (
      <>
        <li className="balanceContainer">
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
            alt="balance"
            className="balanceImage"
          />

          <div>
            <p>Your Balance</p>
            <h1>Rs {balance}</h1>
          </div>
        </li>

        <li className="incomeContainer">
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
            alt="income"
            className="incomeImage"
          />
          <div>
            <p>Your Income</p>
            <h1>Rs {income}</h1>
          </div>
        </li>

        <li className="expensesContainer">
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
            alt="expenses"
            className="expensesImage"
          />
          <div>
            <p>Your Expenses</p>
            <h1>Rs {expenses}</h1>
          </div>
        </li>
      </>
    )
  }
}

export default MoneyDetails
