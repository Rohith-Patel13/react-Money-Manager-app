// Write your code here
import './index.css'

const MoneyDetails = props => {
  console.log(props)

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
          <h1>Rs 0</h1>
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
          <h1>Rs 0</h1>
        </div>
      </li>

      <li className="expensesContainer">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png "
          alt="expenses"
          className="expensesImage"
        />
        <div>
          <p>Your Expenses</p>
          <h1>Rs 0</h1>
        </div>
      </li>
    </>
  )
}

export default MoneyDetails
