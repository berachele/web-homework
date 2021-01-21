//custom hook for passing state for transactions to be passable to testing file and AppRouter
import { useState } from 'react'


//dummy data to pass into props (useState's transactions and setTransactions)
let initialMockTransactions = [
    {
      id: "4ea33565-a98f-4151-846a-0a35d4da9a03",
      user: "Hermoine",
      merchant: "Flourish and Blotts",
      amount: "100",
      date: "12/20/2020",
      isOpen: false,
    },
    {
      id: "8cbfc4d1-b506-4755-b18e-1765ff29fe71",
      user: "Harry",
      merchant: "Ollivander's Wand Shop",
      amount: "5",
      date: "01/05/2021",
      isOpen: false,
    }
  ]
  
function useTransactions() {
  const [mockTransactions, setMockTransactions] = useState(initialMockTransactions)

  return { mockTransactions, setMockTransactions }
}

export default useTransactions