import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import './index.css'

import MoneyDetails from '../MoneyDetails/index'

import TransactionItem from '../TransactionItem/index'
import Options from '../Options'

/*
The key prop is primarily used 
when rendering lists to help 
React keep track of each element's 
identity in the virtual DOM.
*/

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

const formData = []
const moneyDetails = {balance: 0, income: 0, expenses: 0}
class MoneyManager extends Component {
  state = {
    title: '',
    amount: '',
    type: transactionTypeOptions[0].displayText,
    formDataInfo: formData,
    moneyDetailsObject: moneyDetails,
  }

  titleInputEvent = event => {
    this.setState({title: event.target.value})
  }

  amountInputEvent = event => {
    this.setState({amount: event.target.value})
  }

  dropDownEvent = event => {
    const arrayOption = transactionTypeOptions.filter(
      eachObject => eachObject.optionId === event.target.value,
    )

    this.setState({type: arrayOption[0].displayText})
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
      title: '',
      amount: '',
    }))
    /*
    prevState is used to update the state based on the previous state
    values. When you call setState with a function argument, React provides 
    you with the previous state (prevState) as an argument to that function. 
    This is important when you want to update the state based on its previous 
    values to avoid race conditions or conflicts.
    */

    // expenses = income - balance
    // balance = income - expenses
    // income = expenses + balance

    if (type === 'Income') {
      this.setState(prevState => ({
        moneyDetailsObject: {
          ...prevState.moneyDetailsObject,
          income: prevState.moneyDetailsObject.income + parseInt(amount),
          balance: prevState.moneyDetailsObject.balance + parseInt(amount),
        },
      }))
    }
    if (type === 'Expenses') {
      this.setState(prevState => ({
        moneyDetailsObject: {
          ...prevState.moneyDetailsObject,
          expenses: prevState.moneyDetailsObject.expenses + parseInt(amount),
          balance: prevState.moneyDetailsObject.balance - parseInt(amount),
        },
      }))
    }
  }

  deleteButtonClicked = idNum => {
    const {formDataInfo} = this.state
    const deletedArrayOfObject = formDataInfo.filter(
      eachObject => eachObject.id === idNum,
    )
    // console.log(deletedArrayOfObject) // Array of object
    const deletedObject = deletedArrayOfObject[0]

    const {amountVal, typeVal} = deletedObject
    if (typeVal === 'Income') {
      console.log(amountVal)
    }
  }

  render() {
    const {title, amount, formDataInfo, moneyDetailsObject} = this.state

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
          <MoneyDetails moneyDetailsObjectProp={moneyDetailsObject} />
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
              <select id="typeId" onChange={this.dropDownEvent}>
                {transactionTypeOptions.map(eachObject => (
                  <Options eachObject={eachObject} key={eachObject.optionId} />
                ))}
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
                <TransactionItem
                  eachObject={eachObject}
                  deleteButtonClickedProp={this.deleteButtonClicked}
                  key={eachObject.id}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
