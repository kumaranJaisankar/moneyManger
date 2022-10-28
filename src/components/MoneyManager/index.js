import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'
import './index.css'

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

class MoneyManager extends Component {
  state = {
    histroryList: [],
    title: '',
    amount: '',
    type: 'Income',
    money: {balance: 0, income: 0, expenses: 0},
  }

  inputTitle = event => {
    this.setState({title: event.target.value})
  }

  inputAmount = event => {
    this.setState({amount: event.target.value})
  }

  inputType = event => {
    this.setState({type: event.target.value})
  }

  manageMoney = event => {
    event.preventDefault()
    const {title, amount, type} = this.state
    const newHistoryList = {
      id: uuidv4(),
      title,
      amount,
      type,
    }
    this.setState(prev => ({
      histroryList: [...prev.histroryList, newHistoryList],
      title: '',
      amount: '',
      type: 'Income',
      balance: prev.balance + amount,
    }))
    if (type === 'Income') {
      this.setState(prev => ({
        money: {
          balance: Number(prev.money.balance) + Number(amount),
          income: Number(prev.money.income) + Number(amount),
          expenses: 0,
        },
      }))
    } else if (type === 'Expenses') {
      this.setState(prev => ({
        money: {
          balance: Number(prev.money.balance) - Number(amount),
          expenses: Number(prev.money.expenses) + Number(amount),
          income: Number(prev.money.income),
        },
      }))
    }
  }
  removeHistory = ()

  render() {
    const {histroryList, type, title, amount, money} = this.state
    return (
      <div className="container">
        <div className="top-container">
          <h1 className="name">Hi, Richard</h1>
          <p className="greating">
            Welcome back to your <span>Money Manager</span>
          </p>
        </div>
        <MoneyDetails money={money} />
        <div className="lower-card">
          <form className="form-card" onSubmit={this.manageMoney}>
            <h1 className="head">Add Transaction</h1>
            <label htmlFor="title">TITLE</label>
            <input
              value={title}
              placeholder="TITLE"
              id="title"
              type="text"
              onChange={this.inputTitle}
            />
            <label htmlFor="amount">AMOUNT</label>
            <input
              value={amount}
              id="amount"
              placeholder="AMOUNT"
              type="number"
              onChange={this.inputAmount}
            />
            <label htmlFor="type">TYPE</label>
            <select id="type" onChange={this.inputType} value={type}>
              {transactionTypeOptions.map(each => (
                <option key={each.optionId} value={each.displayText} selected>
                  {each.displayText}
                </option>
              ))}
            </select>
            <button type="submit" className="button">
              Add
            </button>
          </form>
          <div className="manage-history">
            <p className="history">History</p>
            <ul>
              <li className="li">
                <p className="list-title-1">Title</p>
                <p className="list-title-2">Amount</p>
                <p className="list-title-3">Type</p>
              </li>
              {histroryList.map(each => (
                <TransactionItem
                  key={each.id}
                  hisDetails={each}
                  removeHistory={this.removeHistory}
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
