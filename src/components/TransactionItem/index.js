// Write your code here
import './index.css'

const TransactionItem = () => {
  console.log('TransactionItem')
  return (
    <li className="tableDescription">
      <p className="paraDescription">Salary</p>

      <div className="tableDelete">
        <p className="paraDescription">Rs 50000</p>

        <p className="paraDescription">Income</p>

        <button type="button" className="deleteBtnEl">
          <img
            src=" https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
            alt="delete"
            className="deleteImage"
          />
        </button>
      </div>
    </li>
  )
}

export default TransactionItem
