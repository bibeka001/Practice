import React, {useState} from 'react'

const NewID = () => {
    // const[put,setPut] = useState()
    const[num,setNum] = useState(0)
    const onInput = () =>{
        setNum(num+1);
    }
    const onOutput= () => {
        if(num>1){

            setNum(num -1)
        }else{
alert('Nan')
        }
    }
  return (
    <>
      <h1>hello {num}</h1>
      <button onClick={onInput}>Inc</button>
      <button onClick={onOutput}>Dec</button>
    </>
  )
}

export default NewID
