import React from 'react'
import CheckIcon from '../../assets/Check.svg'
import TrashIcon from '../../assets/TrashSimple.svg'
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
    const { deleteDoc } = useFrappeDeleteDoc()
    const { updateDoc } = useFrappeUpdateDoc()

    {/* Delete document (Not used but available for CRUD operations) */}
    const onDelete = () => {
        deleteDoc('ToDoReact', props.name)
    }

    {/* Update document */}
    const onUpdate = (status: string) => {
        updateDoc('ToDo', props.name, {
            status: status,
        })
        window.location.reload()
    }

  return (
    <div className={styles.wrapper}>
        {/* Checking item status to strike text and color it in green if Closed  */}
        <div>
            { props.status == 'Open' ? <p>{props.description}</p> : <p className={styles.doneText}>{props.description}</p> }
        </div>

        {/* render the action buttons only if status is open */}
        {props.status == 'Open' ?
        <div className={styles.btnContainer}>
            <button className={styles.actionBtn} onClick={() => onUpdate('Closed')}>
                <img src={CheckIcon}/>
             </button>
             <button className={styles.actionBtn} onClick={() => onUpdate('Cancelled')}>
                <img src={TrashIcon}/>
             </button>
        </div> : null
        }

    </div>
  )
}