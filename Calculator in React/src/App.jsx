import Header from './components/Header'
import UserInput from './components/UserInput'
import Result from './components/Result'
import { useState } from "react"

function App() {
  const [values, setValues] = useState({
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 1,
  });
  const inputIsValid = values.duration >= 1;
  function handleInputChange(e) {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: parseInt(value),
    });
  }
  console.log(values)
  return (
    <>
      <Header />
      <UserInput onPassing={handleInputChange} />
      {!inputIsValid && <p className='center' >Duration can't be zero or negative</p>}
      {inputIsValid && <Result updatedData={values} />}
    </>
  )
}

export default App