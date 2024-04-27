import React from 'react'
import CheckIcon from '../assets/Check.svg'
import TrashIcon from '../assets/TrashSimple.svg'
import { useFrappeDeleteDoc, useFrappeUpdateDoc } from 'frappe-react-sdk'

{/* Define our props types */}
type TodoProps = {
    name: string,
    description: string,
    status: string
}

export const TodoItem = (props: TodoProps) => {
    {/* Component styling */}
    const styles = {
        wrapper:'flex p-6 bg-secondary text-white rounded-[10px] my-5 justify-between',
        btnContainer: 'flex items-center gap-3',
        actionBtn: 'flex items-center justify-center bg-primary w-[30px] h-[30px] rounded-[10px]',
        doneText: 'text-success line-through'
    }

    { /* Hooks to delete and update docs */}
    const { deleteDoc, error, loading: deletingDoc, reset } = useFrappeDeleteDoc()
    const { updateDoc, loading } = useFrappeUpdateDoc()

    {/* Delete document */}
    const onDelete = () => {
        deleteDoc('ToDoReact', props.name)
    }

    {/* Update document */}
    const onUpdate = () => {
        updateDoc('ToDoReact', props.name, {
            status: 'Done',
        })
    }

  return (
    <div className={styles.wrapper}>
        {/* Checking item status to strike it if done and color it in green */}
        <div>
            { props.status == 'Pending' ? <p>{props.description}</p> : <p className={styles.doneText}>{props.description}</p> }
        </div>

        {/* If the Todo status is pending, do not render the action buttons */}
        {props.status == 'Pending' ?
        <div className={styles.btnContainer}>
            <button className={styles.actionBtn} onClick={onUpdate}>
                <img src={CheckIcon}/>
             </button>
             <button className={styles.actionBtn} onClick={onDelete}>
                <img src={TrashIcon}/>
             </button>
        </div> : null
        }

    </div>
  )
}