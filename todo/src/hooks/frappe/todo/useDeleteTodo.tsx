import react, { useState, useEffect } from 'react'
import { useFrappeDeleteDoc } from 'frappe-react-sdk'

{/* Define our props types */}
type TodoProps = {
    name: string,
}

export function useUpdateTodoStatus(props: TodoProps) {

    const { deleteDoc } = useFrappeDeleteDoc()
    deleteDoc('ToDo', props.name)

}