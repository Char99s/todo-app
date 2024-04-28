import react, { useState, useEffect } from 'react'
import { useFrappeCreateDoc, useFrappeAuth } from 'frappe-react-sdk'

{/* Define our props types */}
type TodoProps = {
    description: string
}

export function useCreateTodo(props: TodoProps) {

  const { currentUser } = useFrappeAuth()
  const { createDoc } = useFrappeCreateDoc()

  createDoc('ToDo', {
    description: props.description,
    status: 'Open',
    allocated_to: currentUser,
  })
}