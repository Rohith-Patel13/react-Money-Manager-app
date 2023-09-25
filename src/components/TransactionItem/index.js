// Write your code here
import './index.css'

const TransactionItem = props => {
  const {eachObject, deleteButtonClickedProp} = props
  const {titleName, amountVal, typeVal, id} = eachObject

  const deleteBtnClicked = () => {
    deleteButtonClickedProp(id)
  }

  return (
    <li className="tableDescription">
      <p className="paraDescription">{titleName}</p>

      <div className="tableDelete">
        <p className="paraDescription">{amountVal}</p>

        <p className="paraDescription">{typeVal}</p>

        <button
          type="button"
          className="deleteBtnEl"
          onClick={deleteBtnClicked}
        >
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
