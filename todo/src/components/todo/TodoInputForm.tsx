import React, { useState } from 'react'
import PlusIcon from '../../assets/Plus.svg'
import { useFrappeCreateDoc, useFrappeAuth } from 'frappe-react-sdk'

export const TodoInputForm = () => {

  {/* Component styling */}
  const styles = {
    wrapper: 'flex items-start justify-between w-full mb-16',
    input: 'w-full bg-transparent border border-accent text-gray-text text-sm rounded-[10px] focus:outline-none px-2.5 py-2',
    submit: 'flex items-center justify-center bg-accent rounded-[10px] w-[40px] h-[40px]',
    plusSvg: 'w-[30px] h-[30px]',
    inputError: 'text-danger'
  }
  
  {/* State variable to hold our input text and invalid check */}
  const [input, setInput] = useState('')
  const [inputInvalid, setInputInvalid] = useState(false)

  {/* Get current user, then create a new doc for this user with createDoc */}
  const { currentUser } = useFrappeAuth()
  const { createDoc } = useFrappeCreateDoc()

  {/* Create new document on Submit (new documents will automatically have an Open status) */}
  const onSubmit = async (data) => {
    {/* Check if input is not empty */}
    if(input != ''){
      setInputInvalid(false)
      createDoc('ToDo', {
        description: input,
        status: 'Open',
        allocated_to: currentUser,
      })
      window.location.reload()
    }else{
      setInputInvalid(true)
    }
  }

  return (
    <div className={styles.wrapper}>
      <div className='w-full mr-3'>
        <input type='text' className={styles.input} placeholder='Add a new Task' onChange={e => setInput(e.target.value)}/>
        {inputInvalid ? <span className={styles.inputError}>Your input is invalid</span> : null }
        </div>
        <div className='w-fit'>
        <button className={styles.submit}>
            <img src={PlusIcon} className={styles.plusSvg} onClick={onSubmit}/>
        </button>
        </div>
    </div>
  )
}
