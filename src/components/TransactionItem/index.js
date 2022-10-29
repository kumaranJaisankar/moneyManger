// Write your code here
import './index.css'

const TransactionItem = props => {
  const {hisDetails, removeHistory} = props
  const {id, title, amount, type} = hisDetails
  const deleteItem = () => {
    removeHistory(id, amount, type)
  }
  return (
    <li className="li">
      <p className="list-title-1 ck">{title}</p>
      <p className="list-title-2 ck">{amount}</p>
      <p className="list-title-3 ck">{type}</p>
      <button
        testid="delete"
        type="button"
        className="dlt-btn"
        onClick={deleteItem}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
          className="icon-size"
        />
      </button>
    </li>
  )
}
export default TransactionItem
