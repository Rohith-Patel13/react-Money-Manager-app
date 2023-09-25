// Write your code here

import './index.css'

const MoneyDetails = props => {
  const {moneyDetailsObjectProp} = props
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
          <p>Rs {balance}</p>
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
          <p>Rs {income}</p>
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
          <p>Rs {expenses}</p>
        </div>
      </li>
    </>
  )
}

export default MoneyDetails
