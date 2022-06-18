import React, {useContext} from 'react'
import CompC from './CompC'
import { FirstName, LastName, MiddleName } from './CallContext'

const CompB = () => {
  const fname= useContext(FirstName);
  const mname= useContext(MiddleName);
  const lname = useContext(LastName);
  return (
    <>
    <h1> My name is {fname} {mname} {lname}</h1>
        <CompC />
    </>
  )
}

export default CompB