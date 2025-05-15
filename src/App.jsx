
import './App.css'
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Transactions from './components/Transactions'
import { transactions } from './utils/trdata'

function App() {


  return (
    <>
      <Header />
      <div className='flex'>
      <Sidebar /> 
      <main className='overflow-y-auto p-4 sm:p-6 flex-1 mt-16'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
          {transactions.map((tr,index) =>(
            <Transactions 
            key={index}
            title={tr.title}
            category={tr.category}
            amount={tr.amount}
            date={tr.date}
            />
          ))}
        </div>
        </main>       
      </div>
    </>
  )
}

export default App
