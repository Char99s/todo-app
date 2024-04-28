import react, { useState, useEffect } from 'react'
import { useFrappeDeleteDoc, useFrappeUpdateDoc } from 'frappe-react-sdk'

{/* Define our props types */}
type TodoProps = {
    name: string,
    status: string
}

export function useUpdateTodoStatus(props: TodoProps) {
    const { updateDoc } = useFrappeUpdateDoc()

    updateDoc('ToDo', props.name, {
        status: props.status,
    })

}