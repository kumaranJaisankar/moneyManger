import './index.css'

const MoneyDetails = props => {
  const {money} = props
  const {balance, income, expenses} = money
  return (
    <div className="money-track-container">
      <div className="balance-card">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
          className="img-size"
        />
        <div>
          <p className="content">Your Balance</p>
          <p testid="balanceAmount" className="rupee">
            RS {balance}
          </p>
        </div>
      </div>
      <div className="income-card">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
          className="img-size"
        />
        <div>
          <p className="content">Your Income</p>
          <p testid="incomeAmount" className="rupee">
            RS {income}
          </p>
        </div>
      </div>
      <div className="expenses-card">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
          className="img-size"
        />
        <div>
          <p className="content">Your Expenses</p>
          <p testid="expensesAmount" className="rupee">
            RS {expenses}
          </p>
        </div>
      </div>
    </div>
  )
}
export default MoneyDetails
