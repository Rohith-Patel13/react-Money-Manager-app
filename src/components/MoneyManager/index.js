import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

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
const formData = []
class MoneyManager extends Component {
  state = {
    title: '',
    amount: '',
    type: 'Income',
    formDataInfo: formData,
  }

  titleInputEvent = event => {
    this.setState({title: event.target.value})
  }

  amountInputEvent = event => {
    this.setState({amount: event.target.value})
  }

  dropDownEvent = event => {
    this.setState({type: event.target.value})
  }

  formAddBtnClicked = () => {
    const {title, amount, type} = this.state
    const newFormData = {
      id: uuidv4(),
      titleName: title,
      amountVal: amount,
      typeVal: type,
    }

    this.setState(prevState => ({
      formDataInfo: [...prevState.formDataInfo, newFormData],
    }))
  }

  render() {
    const {title, amount, type, formDataInfo} = this.state

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
              <input
                id="titleId"
                type="text"
                placeholder="TITLE"
                value={title}
                onChange={this.titleInputEvent}
              />
            </div>

            <div className="amountContainer">
              <label htmlFor="amountId">AMOUNT</label>
              <input
                id="amountId"
                type="text"
                placeholder="AMOUNT"
                value={amount}
                onChange={this.amountInputEvent}
              />
            </div>

            <div className="typeContainer">
              <label htmlFor="typeId">TYPE</label>
              <select id="typeId" value={type} onChange={this.dropDownEvent}>
                <option>Income</option>
                <option>Expenses</option>
              </select>
            </div>

            <button
              type="button"
              className="formBtnEl"
              onClick={this.formAddBtnClicked}
            >
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
              {formDataInfo.map(eachObject => (
                <TransactionItem eachObject={eachObject} key={eachObject.id} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
