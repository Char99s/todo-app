import React, {useState, useEffect} from 'react'
import {TodoItem} from './TodoItem.tsx'
import { useFrappeGetDocList } from 'frappe-react-sdk'

export const TodoItemsList = () => {
  {/* Component styling */}
  const styles = {
    wrapper: 'w-full',
    sectionTitle: 'font-bold text-accent',
  }
  {/* Fetch ToDoReact documents and fields of name, description,status. Can add filters to further specify if we need only pending or done todo items. ex: filters: [['status', '=', 'Pending']], */}
  const {data, isLoading, error} = useFrappeGetDocList(
    'ToDoReact',
    {
      fields: ['name','description', 'status'],
      orderBy: {
        field: 'creation',
        order: 'desc',
      },
    },
    );

    {/* Show loading or error accordingly. (Shouldn't show error details outside of dev) */}
    if (isLoading) {
      return <>Loading</>;
    }
    if (error) {
      return <>{JSON.stringify(error)}</>;
    }

  return (
    <div className={styles.wrapper}>

      {/* Todo Tasks Section */}
        <div className={styles.sectionTitle}>
          {/* Pending todo items */}
          <p>Tasks to do - {data.filter((item) => item.status == 'Pending').length}</p>
        </div>

        {data.map((item, i) => (
          item.status === 'Pending' ? <TodoItem name={item.name} description={item.description} status={item.status} key={i} /> : null // Or another element for non-pending items
        ))}

      {/* Done Tasks Section */}
        <div className={styles.sectionTitle + ' mt-10'}>
          {/* Done todo items */}
          <p>Done - {data.filter((item) => item.status == 'Done').length}</p>
        </div>

        {data.map((item, i) => (
          item.status === 'Done' ? <TodoItem description={item.description} status={item.status} key={i} /> : null // Or another element for non-pending items
        ))}

    </div>
  )
  
}